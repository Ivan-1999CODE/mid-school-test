import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { QuizOption } from './QuizOption';

export const QuizView = ({ group, onBack, onComplete, initialXP, setGlobalXP }) => {
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [status, setStatus] = useState('idle'); // idle, correct, wrong
    const [score, setScore] = useState(0);
    const [shaking, setShaking] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]); // Array to store user choices

    // 打亂題目順序
    const [questions] = useState(() => {
        const list = group.questions || [];
        return [...list].sort(() => Math.random() - 0.5);
    });

    const currentQ = questions[currentQIndex];
    if (!currentQ) return null;
    
    const isLastQuestion = currentQIndex === questions.length - 1;

    const handleOptionClick = (index) => {
        if (status !== 'idle') return;

        setSelectedOption(index);

        if (index === currentQ.correctIndex) {
            setStatus('correct');
            setScore(s => s + 1);
            setGlobalXP(xp => xp + 10);
        } else {
            setStatus('wrong');
            setShaking(true);
            setTimeout(() => setShaking(false), 500);
        }
    };

    const handleNext = () => {
        const newAnswers = [...userAnswers, selectedOption];
        setUserAnswers(newAnswers);

        if (isLastQuestion) {
            onComplete(score, questions.length, newAnswers, questions);
        } else {
            setCurrentQIndex(prev => prev + 1);
            setSelectedOption(null);
            setStatus('idle');
        }
    };

    if (questions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[80vh] px-6 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <AlertCircle className="w-10 h-10 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">題庫擴充中</h2>
                <p className="text-gray-500 mb-8">「{group.title}」的題目正在建置中，請先練習其他單元！</p>
                <button
                    onClick={onBack}
                    className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition"
                >
                    返回儀表板
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto pb-24">
            {/* Top Bar */}
            <div className="flex items-center mb-6 pt-2">
                <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 mr-2">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="flex-1">
                    <ProgressBar current={currentQIndex + 1} total={questions.length} colorClass="bg-indigo-500" />
                </div>
                <span className="ml-4 text-sm font-bold text-gray-400 whitespace-nowrap">
                    {currentQIndex + 1} / {questions.length}
                </span>
            </div>

            {/* Question Card */}
            <motion.div
                key={currentQ.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="px-2"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 leading-relaxed whitespace-pre-line">
                    {currentQ.question}
                </h2>

                <motion.div
                    className="space-y-3"
                    animate={shaking ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                >
                    {currentQ.options.map((opt, idx) => (
                        <QuizOption
                            key={idx}
                            index={idx}
                            text={opt}
                            isSelected={selectedOption === idx}
                            isCorrect={status !== 'idle' && idx === currentQ.correctIndex}
                            isWrong={status === 'wrong' && idx === selectedOption}
                            disabled={status !== 'idle'}
                            onClick={handleOptionClick}
                        />
                    ))}
                </motion.div>
            </motion.div>

            {/* Feedback Sheet */}
            <AnimatePresence>
                {status !== 'idle' && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={`fixed bottom-0 left-0 right-0 p-6 border-t-2 shadow-2xl z-50 ${status === 'correct' ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'
                            }`}
                    >
                        <div className="max-w-2xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    {status === 'correct' ? (
                                        <>
                                            <div className="bg-emerald-500 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                                            <span className="font-bold text-emerald-700 text-lg">答對了！</span>
                                            <span className="text-sm font-bold text-amber-500 bg-amber-100 px-2 py-0.5 rounded-full">+10 XP</span>
                                        </>
                                    ) : (
                                        <>
                                            <div className="bg-rose-500 rounded-full p-1"><XCircle className="w-5 h-5 text-white" /></div>
                                            <span className="font-bold text-rose-700 text-lg">答錯了...</span>
                                        </>
                                    )}
                                </div>
                                <div className="text-gray-700 text-base leading-relaxed pl-1">
                                    <span className="font-bold text-gray-900">解析：</span>{currentQ.explanation}
                                </div>
                            </div>
                            <button
                                onClick={handleNext}
                                className={`w-full md:w-auto px-8 py-3 rounded-xl font-bold text-white shadow-md transition-transform active:scale-95 ${status === 'correct' ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-rose-500 hover:bg-rose-600'
                                    }`}
                            >
                                {isLastQuestion ? "完成測驗" : "下一題"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
