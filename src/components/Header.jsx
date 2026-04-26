import React from 'react';
import { Star, Zap } from 'lucide-react';

export const Header = ({ xp, setView, onRandomMix }) => (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setView('dashboard')}>
            <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Star className="w-5 h-5 text-white fill-current" />
            </div>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">Grammar<span className="text-indigo-600">Hero</span></h1>
        </div>
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
);
