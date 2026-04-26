import React from 'react';
import { GitBranch } from 'lucide-react';

export const chapter_clauses_if = {

                id: "clauses-if",
                title: "If, whether, when 等",
                icon: <GitBranch className="w-6 h-6 text-fuchsia-500" />,
                color: "bg-fuchsia-50 border-fuchsia-200",
                accent: "text-fuchsia-600",
                topics: [{ id: "t1", title: "連接詞與條件句" }],
                questions: [
                    { id: "q_ci1", question: "A-wei: This typhoon is so terrible! A-fen: Yes, I'm not sure _____ we can still go fishing tomorrow.", options: ["who", "what", "which", "whether"], correctIndex: 3, explanation: "因為人家回答「我不確定喔...」，代表後面的意思是「是否 (whether)」明天還能去釣魚。" },
                    { id: "q_ci2", question: "If Frank _____ to the office tonight, give this package to him.", options: ["came", "comes", "has come", "will come"], correctIndex: 1, explanation: "If (如果) 帶領的條件句裡面，因為事情還沒發生，我們有個大絕招：用「現在式」來代替「未來式」！所以選 comes 就好啦。" },
                    { id: "q_ci3", question: "Jacky would like to bring that poor dog back home, but he isn't sure _____ his mother likes dogs.", options: ["how", "what", "whether", "which"], correctIndex: 2, explanation: "他不確定到底媽媽喜不喜歡狗，一樣是要帶出「不確定是否 (whether)」。" },
                    { id: "q_ci4", question: "It was an exciting moment for Mr. and Mrs. Wang _____ they learned that they were going to have a baby.", options: ["what", "when", "whether", "why"], correctIndex: 1, explanation: "這是個令人興奮的時刻...「當 (When)」他們得知這個消息。用 When 連接兩個發生的動作。" },
                    { id: "q_ci5", question: "If the weather is fine this weekend, my family _____ to the beach for two days.", options: ["go", "went", "have gone", "will go"], correctIndex: 3, explanation: "前面用 If + 現在式，後面的主要句子既然要在未來發生，就要乖乖用未來式 will go 喔！" },
                    { id: "q_ci6", question: "Betty _____ TV when her little brother fell off the chair.", options: ["watched", "was watching", "has watched", "is going to watch"], correctIndex: 1, explanation: "當弟弟從椅子上摔下來的那個節骨眼，Betty「正在」看電視，這件事是過去進行式 was watching。" },
                    { id: "q_ci7", question: "Candy has decided to move to Taipei next year. When she studies in an art school there, she _____ with her aunt for five months.", options: ["lives", "has lived", "lived", "will live"], correctIndex: 3, explanation: "前方的 When she studies 用了現在式，也就是說當她未來去讀書的時候...，她「將會」住在那。用 will live！" },
                    { id: "q_ci8", question: "Tonight I'll stay at the office until I _____ the work.", options: ["finish", "am finishing", "finished", "will finish"], correctIndex: 0, explanation: "until (直到) 也是會引導時間條件句，後面的動詞也是用「現在式 (finish)」來代替未來式喔！" },
                    { id: "q_ci9", question: "Don't forget that Mom and Dad won't be home until next Wednesday. Until _____, we have to prepare meals ourselves.", options: ["late", "now", "then", "today"], correctIndex: 2, explanation: "Until then 是一個超級常見的片語，意思就是「直到那時候」。" }
                ]
            
};
