import { MousePointer2 } from 'lucide-react';
import React from 'react';

export const chapter_causative = {

                id: "causative",
                title: "使役動詞",
                icon: <MousePointer2 className="w-6 h-6 text-orange-500" />,
                color: "bg-orange-50 border-orange-200",
                accent: "text-orange-600",
                topics: [{ id: "t1", title: "Make/Have/Let" }],
                questions: [
                    { id: "q_c1", question: "Mrs. Wilson ____ her son wash the dishes after dinner.", options: ["had", "told", "wanted", "invited"], correctIndex: 0, explanation: "使役動詞用法：had 開頭就是「叫、使」，不管怎樣後面都接不加 to 的原形動詞 wash！其它三個通常要加 to 喔。" },
                    { id: "q_c2", question: "The teachers make us ____ harder by giving us tests.", options: ["study", "studied", "to study", "studying"], correctIndex: 0, explanation: "make (強迫/使某人) 後面不管三七二十一，直接選原形動詞 study！" },
                    { id: "q_c3", question: "The teacher ____ his students vacuum the floor of the classroom after the party.", options: ["asked", "wanted", "found", "had"], correctIndex: 3, explanation: "had 這裡翻譯為「讓/叫」，只要是這個字當使役動詞，後面學生打掃 classroom 就用原形動詞 vacuum！" },
                    { id: "q_c4", question: "Mother makes me ____ my homework every day before I can play video games.", options: ["finish", "finished", "finishing", "to finish"], correctIndex: 0, explanation: "媽媽「逼」我 (makes me)，使役動詞來了！接原形 finish 就對惹！" },
                    { id: "q_c5", question: "Jenny plays the piano very well. Her mother makes her ____ two hours every day.", options: ["practice", "practiced", "practicing", "to practice"], correctIndex: 0, explanation: "makes 這個使役動詞，後面就是要讓女兒乖乖「加上原形」： practice！" },
                    { id: "q_c6", question: "My mother ____ me send a letter yesterday.", options: ["asked", "had", "told", "wanted"], correctIndex: 1, explanation: "前面是要選出使役動詞。只有 had (讓/叫) 能搭配後面原形的 send 喔！" },
                    { id: "q_c7", question: "If I finish my homework before eight o'clock, my parents will let me ____ TV for one hour.", options: ["watch", "watching", "to watch", "have watched"], correctIndex: 0, explanation: "let (讓) 這個就是最好記的使役動詞了，後面看電視直接放原形 watch。" },
                    { id: "q_c8", question: "Working all day on the computer makes my eyes really ____.", options: ["bored", "hard", "slow", "tired"], correctIndex: 3, explanation: "這裡考另一種 make 的寫法：make + 人 + 狀態 (形容詞)。讓眼睛覺得很「累」，選 tired。" },
                    { id: "q_c9", question: "Deborah put some sugar and cream in her coffee to make it ____ better.", options: ["taste", "tasted", "tasting", "to taste"], correctIndex: 0, explanation: "加糖跟奶油讓咖啡「變好喝」，make 後面嘗起來 taste 給他選原形動詞！" },
                    { id: "q_c10", question: "Nancy does not like to spend time taking out the garbage. She always has her brother ____ it for her.", options: ["do", "does", "did", "done"], correctIndex: 0, explanation: "她總是請哥哥代勞：has her brother...。使役動詞 has，所以哥哥倒垃圾的動作要選原形 do。" },
                ]
            
};
