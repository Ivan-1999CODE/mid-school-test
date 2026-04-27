import React, { useState, useRef } from 'react';
import { Star, Zap, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GRAMMAR_DATA } from '../data';

// ── Admin Modal ──────────────────────────────────────────────
const AdminModal = ({ onClose }) => {
    const [openChapter, setOpenChapter] = useState(null);

    const chapters = Object.values(GRAMMAR_DATA);

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm overflow-y-auto py-8 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl relative"
            >
                {/* Header */}
                <div className="sticky top-0 bg-white/95 backdrop-blur rounded-t-3xl px-6 pt-5 pb-4 border-b border-gray-100 flex justify-between items-center z-10">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">📋 題庫總覽</h2>
                        <p className="text-xs text-gray-400 mt-0.5">共 {chapters.reduce((s, c) => s + c.questions.length, 0)} 題 · {chapters.length} 章節</p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="p-4 space-y-2">
                    {chapters.map((chapter) => (
                        <div key={chapter.id} className={`rounded-2xl border-2 overflow-hidden ${chapter.color}`}>
                            {/* Chapter header */}
                            <button
                                className="w-full flex items-center justify-between px-4 py-3 text-left"
                                onClick={() => setOpenChapter(openChapter === chapter.id ? null : chapter.id)}
                            >
                                <div className="flex items-center gap-2.5">
                                    <span className="text-lg">{chapter.icon}</span>
                                    <span className="font-bold text-gray-800 text-sm">{chapter.title}</span>
                                    <span className="text-xs text-gray-400 font-medium">{chapter.questions.length} 題</span>
                                </div>
                                {openChapter === chapter.id
                                    ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                                    : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                                }
                            </button>

                            {/* Questions list */}
                            <AnimatePresence>
                                {openChapter === chapter.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="bg-white/70 divide-y divide-gray-100">
                                            {chapter.questions.length === 0 ? (
                                                <div className="px-5 py-4 text-sm text-gray-400 italic">尚未新增題目</div>
                                            ) : (
                                                chapter.questions.map((q, i) => (
                                                    <div key={q.id} className="px-5 py-4">
                                                        {/* Question */}
                                                        <p className="text-sm font-medium text-gray-800 mb-2">
                                                            <span className="text-gray-400 font-normal mr-1.5">Q{i + 1}.</span>
                                                            {q.question}
                                                        </p>
                                                        {/* Options */}
                                                        <div className="grid grid-cols-2 gap-1 mb-2">
                                                            {q.options.map((opt, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className={`text-xs px-2.5 py-1 rounded-lg ${idx === q.correctIndex
                                                                        ? 'bg-emerald-100 text-emerald-700 font-bold'
                                                                        : 'bg-gray-50 text-gray-500'
                                                                        }`}
                                                                >
                                                                    ({String.fromCharCode(65 + idx)}) {opt}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Explanation */}
                                                        <p className="text-xs text-indigo-600 bg-indigo-50 rounded-lg px-3 py-2 leading-relaxed">
                                                            💡 {q.explanation}
                                                        </p>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="h-4" />
            </motion.div>
        </div>
    );
};

// ── Password Gate ────────────────────────────────────────────
const PasswordGate = ({ onClose, onSuccess }) => {
    const [value, setValue] = useState('');
    const [shake, setShake] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '1999') {
            onSuccess();
        } else {
            setShake(true);
            setValue('');
            setTimeout(() => setShake(false), 500);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={shake ? { x: [0, -8, 8, -8, 8, 0], scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
                transition={{ duration: shake ? 0.4 : 0.2 }}
                onClick={e => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xs"
            >
                <p className="text-center text-sm text-gray-500 mb-3 font-medium">🔐 輸入密碼</p>
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        autoFocus
                        type="password"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="••••"
                        className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <button type="submit" className="bg-indigo-600 text-white rounded-xl px-4 py-2 text-sm font-bold hover:bg-indigo-700 transition-colors">
                        確認
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

// ── Header ───────────────────────────────────────────────────
export const Header = ({ xp, setView, onRandomMix }) => {
    const [clickCount, setClickCount] = useState(0);
    const [showGate, setShowGate] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);
    const timerRef = useRef(null);

    const handleCenterClick = () => {
        const next = clickCount + 1;
        setClickCount(next);
        clearTimeout(timerRef.current);

        if (next >= 3) {
            setClickCount(0);
            setShowGate(true);
        } else {
            timerRef.current = setTimeout(() => setClickCount(0), 1000);
        }
    };

    return (
        <>
            <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex justify-between items-center shadow-sm">
                {/* Logo (left) */}
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setView('dashboard')}>
                    <div className="bg-indigo-600 p-1.5 rounded-lg">
                        <Star className="w-5 h-5 text-white fill-current" />
                    </div>
                    <h1 className="text-xl font-bold text-gray-800 tracking-tight">Grammar<span className="text-indigo-600">Hero</span></h1>
                </div>

                {/* Hidden center tap zone */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 h-full w-24 cursor-default select-none"
                    onClick={handleCenterClick}
                />

                {/* Right button */}
                {onRandomMix && (
                    <button
                        onClick={onRandomMix}
                        className="flex items-center gap-1.5 px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-xl text-sm font-bold transition-colors shadow-sm"
                    >
                        <Zap className="w-4 h-4 fill-current" />
                        <span className="hidden sm:inline">隨機 10 題特訓</span>
                        <span className="inline sm:hidden">特訓</span>
                    </button>
                )}
            </header>

            <AnimatePresence>
                {showGate && !showAdmin && (
                    <PasswordGate
                        onClose={() => setShowGate(false)}
                        onSuccess={() => { setShowGate(false); setShowAdmin(true); }}
                    />
                )}
                {showAdmin && (
                    <AdminModal onClose={() => setShowAdmin(false)} />
                )}
            </AnimatePresence>
        </>
    );
};
