import React from 'react';
import { GitBranch } from 'lucide-react';

export const chapter_relatives = {

                id: "relatives",
                title: "關係代名詞",
                icon: <GitBranch className="w-6 h-6 text-rose-500" />,
                color: "bg-rose-50 border-rose-200",
                accent: "text-rose-600",
                topics: [{ id: "t1", title: "主格/受格關代" }],
                questions: [
                    { id: "q_r1", question: "Do you remember the girl ____ looked worried at the train station yesterday?", options: ["who", "where", "which", "what"], correctIndex: 0, explanation: "你在找的「女生 (girl)」是人！人當先行詞後面關代要用 who。" },
                    { id: "q_r2", question: "Eva: What's your ideal mate like? Ada: Well, I want a husband who ____ well. I enjoy eating, but I hate kitchen.", options: ["cook", "cooks", "cooking", "to cook"], correctIndex: 1, explanation: "前面的 husband 是單數老公。後面的動詞 cook 因為要跟著單數的 husband 變化，所以要加 s 變 cooks。" },
                    { id: "q_r3", question: "James: Do you see the street vendor over there? Philip: Which one? James: The one ____ is wearing a hat.", options: ["it", "he", "who", "which"], correctIndex: 2, explanation: "The one 指的是前面說過的人(攤販)，既然是人，關代就用 who。" },
                    { id: "q_r4", question: "I need someone ____ his work to take out the garbage for me.", options: ["finish", "finished", "has finished", "who has finished"], correctIndex: 3, explanation: "someone 是人，我們用 who 來指對方，而且 has finished 表示「已經完成」的人。" },
                    { id: "q_r5", question: "Willy found ____ the novel he bought last week was under his bed.", options: ["that", "where", "whether", "which"], correctIndex: 0, explanation: "這題不是關代喔！這是 found that... (發現...這件事情)，這是一個名詞子句。" },
                    { id: "q_r6", question: "The boys ____ are coming to my office tomorrow were my students five years ago.", options: ["who", "they", "those", "whose"], correctIndex: 0, explanation: "The boys 是一群男生，代表是人，後面直接選 who 準沒錯。" },
                    { id: "q_r7", question: "The movie is about a true story ____ happened in Korea in 1945.", options: ["it", "that", "what", "when"], correctIndex: 1, explanation: "true story (真實故事) 是一件事不是人，不能用 who，可以使用 that 先頂替 which 來用！" },
                    { id: "q_r8", question: "I like to read comic books ____ me laugh.", options: ["made", "to have made", "that make", "which makes"], correctIndex: 2, explanation: "comic books (漫畫書們) 是複數的物品！關代可以用 that 代替，而且後面的動詞不加 s，變成 that make。" },
                    { id: "q_r9", question: "In my family, my sister is the only person who ____ chocolate.", options: ["love", "loves", "loved", "loving"], correctIndex: 1, explanation: "先行詞 the only person (唯一的那個人) 是單數，所以動詞 love 要加 s 變 loves。" },
                    { id: "q_r10", question: "At dinner time, I often enjoy telling Mom everything ____ at school.", options: ["happened", "was happening", "that happened", "which happening"], correctIndex: 2, explanation: "一切事情 (everything) 最喜歡搭配 that 來當關代了，這幾乎是個固定招式！" },
                    { id: "q_r11", question: "The woman you met in the library yesterday ____ our school a lot of books.", options: ["giving", "given", "to give", "gave"], correctIndex: 3, explanation: "這個句子的主角大動詞在後面，女人 (The woman)「給了 (gave)」學校很多書。你昨天在圖書館遇到她只是中間補充說明用的！" },
                    { id: "q_r12", question: "See? The strange man I saw yesterday ____ around my house again. Should I call the police?", options: ["walking", "is walking", "and walked", "to walk"], correctIndex: 1, explanation: "這個奇怪的男人「正在 (is walking)」我家附近走來走去，這才是整句話想表達的重點！" },
                    { id: "q_r13", question: "\"Are you dating anyone special now?\" is a question that popular movie stars ____ in an interview.", options: ["to be often asked", "are often asked", "being often asked", "who are often asked"], correctIndex: 1, explanation: "電影明星們是被訪問的對象，所以他們是「被問 (are asked)」問題的人！" },
                    { id: "q_r14", question: "All the excuses Nick made ____ a lot about how much he hates to do the job.", options: ["say", "saying", "which say", "to say"], correctIndex: 0, explanation: "尼克找的所有藉口 excuses 都是複數，代表「說出了 (say)」他有多討厭這工作，動詞不用加 s。" },
                    { id: "q_r15", question: "Can anyone who knows the answer ____ it out loud?", options: ["say", "says", "saying", "to say"], correctIndex: 0, explanation: "這句開頭是 Can anyone... (任何人可以...)，因為有助動詞 Can 開頭，後面的動詞一定要被打回原形 say！" }
                ]
            
};
