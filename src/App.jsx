import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { DashboardCard } from './components/DashboardCard';
import { QuizView } from './components/QuizView';
import { CompletionScreen } from './components/CompletionScreen';
import { GRAMMAR_DATA } from './data';

const App = () => {
    const [xp, setXp] = useState(0);
    const [view, setView] = useState('dashboard'); // dashboard, quiz, complete
    const [activeGroup, setActiveGroup] = useState(null);
    const [quizResult, setQuizResult] = useState({ score: 0, total: 0 });
    const [pendingGroup, setPendingGroup] = useState(null); // for mode selection modal

    useEffect(() => {
        const savedXp = localStorage.getItem('grammar_hero_xp');
        if (savedXp) setXp(parseInt(savedXp));
    }, []);

    useEffect(() => {
        localStorage.setItem('grammar_hero_xp', xp.toString());
    }, [xp]);

    const handleCardClick = (group) => {
        if (group.questions.length === 0) return;
        if (group.questions.length < 10) {
            // Too few questions, go directly
            setActiveGroup({ ...group });
            setView('quiz');
        } else {
            setPendingGroup(group);
        }
    };

    const handleSelectMode = (mode) => {
        if (!pendingGroup) return;
        let questions;
        if (mode === 'random') {
            questions = [...pendingGroup.questions].sort(() => Math.random() - 0.5).slice(0, 10);
        } else {
            questions = pendingGroup.questions;
        }
        setActiveGroup({ ...pendingGroup, questions });
        setPendingGroup(null);
        setView('quiz');
    };

    const handleRandomMix = () => {
        const allQuestions = Object.values(GRAMMAR_DATA).flatMap(g => g.questions);
        if (allQuestions.length === 0) return;

        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);

        const mixGroup = {
            id: 'random-mix',
            title: '隨機 10 題特訓',
            questions: selected,
            // dummy values for UI
            color: "bg-amber-50 border-amber-200",
            icon: null
        };
        setActiveGroup(mixGroup);
        setView('quiz');
    };

    const handleQuizComplete = (score, total, userAnswers, shuffledQuestions) => {
        setQuizResult({ score, total, userAnswers, shuffledQuestions });
        setView('complete');
    };

    const handleGoHome = () => {
        setActiveGroup(null);
        setView('dashboard');
    };

    return (
        <div className="min-h-screen bg-[#F7F9FC] font-sans selection:bg-indigo-100 pb-10 overflow-x-hidden">
            <Header xp={xp} setView={handleGoHome} onRandomMix={view === 'dashboard' ? handleRandomMix : null} />

            <main className="max-w-5xl mx-auto px-4 py-8 relative">
                <AnimatePresence mode="wait">
                    {view === 'dashboard' && (
                        <motion.div
                            key="dashboard"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        >
                            {Object.values(GRAMMAR_DATA).map(group => (
                                <DashboardCard
                                    key={group.id}
                                    group={group}
                                    onClick={() => handleCardClick(group)}
                                />
                            ))}
                        </motion.div>
                    )}

                    {view === 'quiz' && activeGroup && (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-white rounded-3xl shadow-sm border border-gray-100 pt-6 px-4 md:px-8 pb-8 min-h-[75vh]"
                        >
                            <QuizView
                                group={activeGroup}
                                onBack={handleGoHome}
                                onComplete={handleQuizComplete}
                                setGlobalXP={setXp}
                            />
                        </motion.div>
                    )}

                    {view === 'complete' && activeGroup && (
                        <motion.div
                            key="complete"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
                        >
                            <CompletionScreen
                                score={quizResult.score}
                                total={quizResult.total}
                                onHome={handleGoHome}
                                group={activeGroup}
                                userAnswers={quizResult.userAnswers}
                                shuffledQuestions={quizResult.shuffledQuestions}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {/* Mode Selection Modal */}
            <AnimatePresence>
                {pendingGroup && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setPendingGroup(null)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        />
                        {/* Bottom Sheet */}
                        <motion.div
                            key="mode-sheet"
                            initial={{ y: '100%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '100%', opacity: 0 }}
                            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl p-6 pb-10"
                        >
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />
                            <div className="flex items-center gap-3 mb-1">
                                {pendingGroup.icon}
                                <h2 className="text-xl font-bold text-gray-800">{pendingGroup.title}</h2>
                            </div>
                            <p className="text-sm text-gray-400 mb-6 pl-0.5">共 {pendingGroup.questions.length} 題，請選擇練習模式</p>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => handleSelectMode('random')}
                                    className="w-full flex items-center justify-between px-5 py-4 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white rounded-2xl font-bold text-base transition-all shadow-md shadow-indigo-200"
                                >
                                    <span>🎲 隨機 10 題特訓</span>
                                    <span className="text-indigo-200 text-sm font-normal">快速練習</span>
                                </button>
                                <button
                                    onClick={() => handleSelectMode('all')}
                                    className="w-full flex items-center justify-between px-5 py-4 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] text-gray-800 rounded-2xl font-bold text-base transition-all"
                                >
                                    <span>📚 練習全部 {pendingGroup.questions.length} 題</span>
                                    <span className="text-gray-400 text-sm font-normal">完整挑戰</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default App;
