import React from 'react';
import { motion } from 'framer-motion';

export const DashboardCard = ({ group, onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -4, shadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden rounded-2xl border-2 ${group.color} p-4 cursor-pointer transition-colors bg-white hover:border-opacity-100 border-opacity-60 shadow-sm flex flex-col h-full`}
            onClick={onClick}
        >
            <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100">
                    {group.icon}
                </div>
                {group.questions.length === 0 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-400">
                        建置中
                    </span>
                )}
            </div>

            <h3 className="text-base font-bold text-gray-800 mb-2 leading-tight">{group.title}</h3>

            <div className="space-y-1 mb-4 flex-1">
                {group.topics.slice(0, 2).map(topic => (
                    <div key={topic.id} className="text-xs text-gray-500 flex items-center truncate">
                        <span className={`w-1 h-1 rounded-full mr-1.5 bg-gray-300`}></span>
                        {topic.title}
                    </div>
                ))}
                {group.topics.length > 2 && <div className="text-[10px] text-gray-400 pl-2.5">+{group.topics.length - 2} 更多</div>}
            </div>

            <div className="mt-auto pt-2 border-t border-gray-50/50">
                <div className="flex justify-between text-[10px] font-semibold text-gray-400 mb-1">
                    <span>{group.questions.length} 題</span>
                </div>
            </div>
        </motion.div>
    );
};
