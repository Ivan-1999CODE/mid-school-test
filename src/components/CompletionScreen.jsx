import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, RefreshCw, Eye, FileText, CheckCircle2, X } from 'lucide-react';

export const CompletionScreen = ({ score, total, onHome, group, userAnswers, shuffledQuestions }) => {
    const percentage = Math.round((score / total) * 100);
    const isPass = percentage >= 60;
    const [showReview, setShowReview] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 pb-20">
            {!showReview && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full flex flex-col items-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="mb-6 mt-10"
                    >
                        {isPass ? (
                            <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-yellow-200">
                                <Trophy className="w-16 h-16 text-yellow-500" />
                            </div>
                        ) : (
                            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center border-4 border-gray-200">
                                <RefreshCw className="w-16 h-16 text-gray-400" />
                            </div>
                        )}
                    </motion.div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {isPass ? "太棒了！完成單元" : "再接再厲！"}
                    </h2>
                    <p className="text-gray-500 mb-8 text-lg">
                        你在這個單元獲得了 <span className="font-bold text-indigo-600">{score}</span> / {total} 分
                    </p>

                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs mb-8">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-xs text-gray-400 uppercase font-bold mb-1">獲得 XP</div>
                            <div className="text-2xl font-bold text-amber-500">+{score * 10}</div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-xs text-gray-400 uppercase font-bold mb-1">準確率</div>
                            <div className={`text-2xl font-bold ${isPass ? 'text-emerald-500' : 'text-rose-500'}`}>
                                {percentage}%
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full max-w-xs gap-3">
                        <button
                            onClick={() => setShowReview(true)}
                            className="w-full px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-100 font-bold rounded-xl shadow-sm hover:bg-indigo-50 hover:border-indigo-200 transition-all flex items-center justify-center gap-2"
                        >
                            <Eye className="w-5 h-5" />
                            查看試題解析
                        </button>

                        <button
                            onClick={onHome}
                            className="w-full px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl transition-all active:scale-95"
                        >
                            回到儀表板
                        </button>
                    </div>
                </motion.div>
            )}

            {showReview && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-2xl mx-auto pt-6 text-left"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-indigo-500" />
                            試題詳解總表
                        </h3>
                        <button
                            onClick={() => setShowReview(false)}
                            className="text-sm font-semibold text-gray-500 hover:text-gray-800 underline"
                        >
                            收起列表
                        </button>
                    </div>

                    <div className="space-y-6">
                        {(shuffledQuestions || group.questions).map((q, idx) => {
                            const userAnswerIndex = userAnswers[idx];
                            const isCorrect = userAnswerIndex === q.correctIndex;

                            return (
                                <div key={q.id} className={`p-5 rounded-2xl border-2 bg-white ${isCorrect ? 'border-emerald-100' : 'border-rose-100'}`}>
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className={`mt-1 min-w-[28px] h-7 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 ${isCorrect ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg leading-snug whitespace-pre-line">{q.question}</h4>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 pl-10">
                                        {q.options.map((opt, optIdx) => {
                                            const isThisCorrect = optIdx === q.correctIndex;
                                            const isUserChoice = optIdx === userAnswerIndex;
                                            
                                            let badgeClass = "bg-gray-50 border-gray-100 text-gray-600";
                                            let icon = null;
                                            
                                            if (isThisCorrect) {
                                                badgeClass = "bg-emerald-50 border-emerald-200 text-emerald-800 font-bold";
                                                icon = <CheckCircle2 className="w-4 h-4 ml-auto text-emerald-600" />;
                                            } else if (isUserChoice && !isThisCorrect) {
                                                badgeClass = "bg-rose-50 border-rose-200 text-rose-800";
                                                icon = <X className="w-4 h-4 ml-auto text-rose-600" />;
                                            }

                                            return (
                                                <div key={optIdx} className={`p-2 border rounded-lg flex items-center ${badgeClass}`}>
                                                    <span className="w-6 h-6 flex items-center justify-center mr-2 text-xs opacity-50">
                                                        {String.fromCharCode(65 + optIdx)}.
                                                    </span>
                                                    <span className="text-sm">{opt}</span>
                                                    {icon}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="pl-10 mt-3 pt-3 border-t border-gray-100">
                                        <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
                                            <span className="font-bold shrink-0 text-indigo-600">💡 解析：</span>
                                            <span>{q.explanation}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-8 flex justify-center pb-8">
                        <button
                            onClick={onHome}
                            className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all active:scale-95"
                        >
                            回到儀表板
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};
