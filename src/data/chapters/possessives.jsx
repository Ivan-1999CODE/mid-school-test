import React from 'react';
import { User } from 'lucide-react';

export const chapter_possessives = {

                id: "possessives",
                title: "所有格與所有格受詞",
                icon: <User className="w-6 h-6 text-emerald-500" />,
                color: "bg-emerald-50 border-emerald-200",
                accent: "text-emerald-600",
                topics: [{ id: "t1", title: "所有格用法" }],
                questions: [
                    { id: "q_po1", question: "My sister thinks red hair is ______ fashionable than black hair.", options: ["very", "much", "more", "the most"], correctIndex: 2, explanation: "因為有 than (大於)，我們就要把比較級搬出來！比較時髦 = more fashionable。" },
                    { id: "q_po2", question: "Paula : Is that big toy store Mr. and Mrs. Chen's? Kelly : Yes, it's ______. My daughter loves going there.", options: ["his", "hers", "ours", "theirs"], correctIndex: 3, explanation: "這個是陳氏夫婦的。講「他們的」東西，有一個代碼：theirs。" },
                    { id: "q_po3", question: "Tony : Will you go to Cindy's party tonight? Jane : No, I have to do my homework. Don't you have ______? Tony : Well, I already finished it at school.", options: ["you", "your", "yours", "you're"], correctIndex: 2, explanation: "你難道沒有帶「你的東西(功課)」嗎？ yours 代表 your homework 。" },
                    { id: "q_po4", question: "Gary : I can't find my pen. Nina : Is the one on Jack's desk ______? Gary : Yes, thank you.", options: ["mine", "ours", "theirs", "yours"], correctIndex: 3, explanation: "傑克桌上「這個東西」 是屬於「你的」(yours) 嗎？" },
                    { id: "q_po5", question: "The book under Mary's desk is ______, but I don't know why it is there.", options: ["us", "me", "my", "mine"], correctIndex: 3, explanation: "瑪莉桌底下那本書是我的！把「我的(書)」縮寫成一個字就用 mine。" }
                ]
            
};
