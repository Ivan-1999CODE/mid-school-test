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

    useEffect(() => {
        const savedXp = localStorage.getItem('grammar_hero_xp');
        if (savedXp) setXp(parseInt(savedXp));
    }, []);

    useEffect(() => {
        localStorage.setItem('grammar_hero_xp', xp.toString());
    }, [xp]);

    const handleStartQuiz = (group) => {
        if (group.questions.length === 0) return;
        setActiveGroup(group);
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
                                    onClick={() => handleStartQuiz(group)}
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
        </div>
    );
};

export default App;
