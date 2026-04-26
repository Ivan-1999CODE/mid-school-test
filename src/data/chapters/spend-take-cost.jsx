import React from 'react';
import { Scale } from 'lucide-react';

export const chapter_spend_take_cost = {

                id: "spend-take-cost",
                title: "三花運動詞 (Spend/Take/Cost)",
                icon: <Scale className="w-6 h-6 text-teal-500" />,
                color: "bg-teal-50 border-teal-200",
                accent: "text-teal-600",
                topics: [{ id: "t1", title: "Spend/Take/Cost 用法" }],
                questions: [
                    { id: "q_stc1", question: "There's a subway station near my house. ____ takes me only ten minutes to get to my office.", options: ["It", "There", "The one", "The station"], correctIndex: 0, explanation: "花費時間如果用 It 開頭作主詞，後面必須要接 take(s) + 人 + 時間 這款句型！" },
                    { id: "q_stc2", question: "My dog hates to take a bath. It usually ____ me one hour to make him clean.", options: ["needs", "spends", "takes", "uses"], correctIndex: 2, explanation: "一樣是 It 開頭講時間花費，永遠的死黨就是 takes！" },
                    { id: "q_stc3", question: "Studying in a foreign country ____ me a lot of money. That's why I had to sell my apartment.", options: ["cost", "lost", "made", "spent"], correctIndex: 0, explanation: "「事物」花掉人多少「錢」，要用 cost 這個字！ (某事 cost 某人 金錢)" },
                    { id: "q_stc4", question: "It's ____ me a lot of time to find out what I really want to do in the future.", options: ["paying", "spending", "taking", "using"], correctIndex: 2, explanation: "開頭又看到 It is，雖然有 is 變現在進行式，但遇到時間花費依然是搭配 taking 啦。" },
                    { id: "q_stc5", question: "Charles ____ a day in the department store looking for a hat for his wife.", options: ["cost", "spent", "saw", "made"], correctIndex: 1, explanation: "這句人 (Charles) 當主詞，花了時間，就要用 spent。口訣：人 + spend + 時間/金錢。" },
                    { id: "q_stc6", question: "It took the police lots of time ____ who entered Liu's house and killed her one year ago.", options: ["and found out", "find out", "finding out", "to find out"], correctIndex: 3, explanation: "前面是用 it took ... (花了多少時間)。固定套路，這句最後面要做什麼事前面要有 to：to find out。" }
                ]
            
};
