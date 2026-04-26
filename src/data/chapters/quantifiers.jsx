import React from 'react';
import { Search } from 'lucide-react';

export const chapter_quantifiers = {

                id: "quantifiers",
                title: "not any, no, some等",
                icon: <Search className="w-6 h-6 text-violet-500" />,
                color: "bg-violet-50 border-violet-200",
                accent: "text-violet-600",
                topics: [{ id: "t1", title: "數量詞用法" }],
                questions: [
                    { id: "q_q1", question: "Tina: The bread looks delicious! You want to buy some? Carl: I'd love to, but I don't have ______ money with me now.", options: ["no", "all", "any", "some"], correctIndex: 2, explanation: "否定詞 don't 後面接錢錢，如果一毛都沒有，就配 any money。" },
                    { id: "q_q2", question: "Elsa: Did Eric buy any vegetables in the market? Bob: No, he didn't, but he bought ______ fish.", options: ["no", "any", "some", "both"], correctIndex: 2, explanation: "雖然沒有買剛剛的事物，但他還是買了「一些」魚。這句是肯定句喔！就給它加 some 吧！" },
                    { id: "q_q3", question: "I cannot understand why Steven bought so many watches but never wears ______ of them.", options: ["any", "both", "every", "others"], correctIndex: 0, explanation: "從沒拿過其中任何一支出來戴！這個 never 本身就是一種否定，配的絕對是 any。" },
                    { id: "q_q4", question: "I haven't been to the movies these days. Are there any good ______ this week?", options: ["ones", "others", "them", "those"], correctIndex: 0, explanation: "有沒有什麼好看的電影呢？good ones 代表好「東東們(複數)」！" },
                    { id: "q_q5", question: "Jogging is the only exercise I enjoy. I find ______ other kinds of exercise boring.", options: ["all", "few", "many", "some"], correctIndex: 0, explanation: "只喜歡慢跑，意思就是其他的「全部 (all)」我都覺得超無聊！" },
                    { id: "q_q6", question: "Susan bought ______ bread in the supermarket, but she did not buy anything to drink.", options: ["many", "some", "any", "one"], correctIndex: 1, explanation: "蘇珊在超市買了「一些」麵包... 這麼平凡的肯定句就不要懷疑先選 some 上去啦。" },
                    { id: "q_q7", question: "______ other waiters in the restaurant have worked here longer than Clark; only Lois and Lana started working here before him.", options: ["All", "Most", "Some", "Few"], correctIndex: 3, explanation: "只有另外那兩神人可以做比他久，那代表其他有比他久的員工人數簡直少得可憐 (Few)。" },
                    { id: "q_q8", question: "Southwell Tennis Club was the ______ club that David joined last year. He was too busy to join any other club.", options: ["best", "first", "only", "other"], correctIndex: 2, explanation: "因為他忙到別的俱樂部都無法參加，所以網球就變成他的「唯一(only)」！" }
                ]
            
};
