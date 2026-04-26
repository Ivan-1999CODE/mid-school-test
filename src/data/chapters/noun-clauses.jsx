import React from 'react';
import { Layers } from 'lucide-react';

export const chapter_noun_clauses = {

                id: "noun-clauses",
                title: "名詞子句",
                icon: <Layers className="w-6 h-6 text-blue-500" />,
                color: "bg-blue-50 border-blue-200",
                accent: "text-blue-600",
                topics: [{ id: "t1", title: "名詞子句練習" }],
                questions: [
                    { id: "q_nc1", question: "Alice learned from the TV news _____ Nora Jones was coming to Taiwan the next day.", options: ["that", "where", "which", "whether"], correctIndex: 0, explanation: "Alice 得知了「瓊斯要來」這件事。後面是一句完整的話，我們用 that 這個連接詞把它包起來當作一件事！" },
                    { id: "q_nc2", question: "Lisa is new here, so she doesn't know _____ the restaurant is.", options: ["that", "where", "whether", "which"], correctIndex: 1, explanation: "她不知道這間餐廳到底「在哪裡」。地點的疑問詞要用 where。" },
                    { id: "q_nc3", question: "My father told me last night _____ we're going to the Food Festival this weekend. My brother and I felt very excited.", options: ["whether", "where", "what", "that"], correctIndex: 3, explanation: "爸爸昨晚告我「我們打算去美食節」這件事。一樣後面是一句完整的話，就叫 that 出來說明！" },
                    { id: "q_nc4", question: "Anita: I saw Nora in the teacher's office this morning. Do you know _____ she was there?", options: ["how", "if", "when", "why"], correctIndex: 3, explanation: "整句話的意思聽起來像「你知道『為什麼』她會在那裡嗎？」。選項裡的 why 讀起來最合理！" },
                    { id: "q_nc5", question: "I was surprised to know from the newspaper yesterday _____ flowers do not always smell sweet; some can smell like dead fish.", options: ["that", "when", "where", "which"], correctIndex: 0, explanation: "我很驚訝地得知「花不總是香的」這件事。這也是 that 開頭的名詞子句經典考法！" },
                    { id: "q_nc6", question: "Jill: Have you decided _____ you will celebrate your 30th birthday? Sue: Yeah, I'm going to have a big barbecue party.", options: ["how", "where", "what", "when"], correctIndex: 0, explanation: "你決定好「如何 (how)」慶祝你的 30 歲生日了嗎？" }
                ]
            
};
