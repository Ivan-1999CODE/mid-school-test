import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export const QuizOption = ({ text, index, isSelected, isCorrect, isWrong, onClick, disabled }) => {
    let baseStyle = "w-full p-4 rounded-xl text-left font-medium text-lg border-2 transition-all duration-200 flex items-center justify-between group";
    let stateStyle = "bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50";

    if (isSelected) {
        stateStyle = "bg-indigo-100 border-indigo-500 text-indigo-700";
    }
    if (isCorrect) {
        stateStyle = "bg-emerald-100 border-emerald-500 text-emerald-800";
    }
    if (isWrong && isSelected) {
        stateStyle = "bg-rose-100 border-rose-500 text-rose-800";
    }
    if (disabled && !isSelected && !isCorrect) {
        stateStyle = "bg-gray-50 border-gray-100 text-gray-400 opacity-60";
    }

    return (
        <motion.button
            whileTap={!disabled ? { scale: 0.98 } : {}}
            onClick={() => !disabled && onClick(index)}
            className={`${baseStyle} ${stateStyle}`}
            disabled={disabled}
        >
            <div className="flex items-center">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold border ${isSelected || isCorrect || isWrong ? 'border-transparent bg-white/30' : 'border-gray-200 text-gray-400'
                    }`}>
                    {String.fromCharCode(65 + index)}
                </span>
                {text}
            </div>
            {isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-600" />}
            {isWrong && isSelected && <XCircle className="w-6 h-6 text-rose-600" />}
        </motion.button>
    );
};
