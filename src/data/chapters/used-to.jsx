import React from 'react';
import { Calendar } from 'lucide-react';

export const chapter_used_to = {

                id: "used-to",
                title: "used to",
                icon: <Calendar className="w-6 h-6 text-slate-500" />,
                color: "bg-slate-50 border-slate-200",
                accent: "text-slate-600",
                topics: [{ id: "t1", title: "used to 用法" }],
                questions: [
                    { id: "q_ut1", question: "My husband ______ send me flowers every week before we got married. But now he never does.", options: ["should", "used to", "was going to", "was afraid to"], correctIndex: 1, explanation: "老公『以前習慣』每週送花，現在都不送了... used to 這個詞專門用來講以前過去的習慣。" },
                    { id: "q_ut2", question: "Willy has changed a lot. He ______ get up early to do exercise. But now he wakes up late and is late for school every day.", options: ["forgot to", "hated to", "used to", "volunteered to"], correctIndex: 2, explanation: "他『以前曾經』會早起運動，但往事不堪回首現在都晚起。專情於過去就是 used to 啦。" },
                    { id: "q_ut3", question: "In my school days, I ______ to English radio programs every day. That was how I learned English at that time.", options: ["listen", "have listened", "used to listen", "was listening"], correctIndex: 2, explanation: "在學校的年代嘛，我『過去很習慣聽 (used to listen)』英文廣播，回憶都是 used to v！" }
                ]
            
};
