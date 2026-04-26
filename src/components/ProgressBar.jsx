import React from 'react';
import { motion } from 'framer-motion';

export const ProgressBar = ({ current, total, colorClass = "bg-indigo-600" }) => {
    const percentage = Math.min(100, Math.max(0, (current / total) * 100));
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <motion.div
                className={`h-2.5 rounded-full ${colorClass}`}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
        </div>
    );
};
