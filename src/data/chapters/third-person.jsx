import React from 'react';
import { User } from 'lucide-react';

export const chapter_third_person = {

                id: "third-person",
                title: "三單",
                icon: <User className="w-6 h-6 text-red-500" />,
                color: "bg-red-50 border-red-200",
                accent: "text-red-600",
                topics: [{ id: "t1", title: "第三人稱單數變化" }],
                questions: [
                    { id: "q_tp1", question: "Frank read a comic book yesterday, but his brother _____.", options: ["does", "doesn't", "did", "didn't"], correctIndex: 3, explanation: "Yesterday (昨天) 代表整件事是過去式。前面肯定 (read)，but 後面用否定，所以選 didn't。" },
                    { id: "q_tp2", question: "Learning foreign languages _____ me to know more about other countries.", options: ["helps", "helping", "help", "to help"], correctIndex: 0, explanation: "「學外語 (Learning...)」這整件事我們可以看做一個單數的存在。因為是第三人稱單數，現在式動詞記得加 s 變 helps！" },
                    { id: "q_tp3", question: "In my family, my sister is the only person who _____ chocolate.", options: ["love", "loves", "loved", "loving"], correctIndex: 1, explanation: "先行詞 the only person (唯一的那個人) 是單數，關代 who 後面的動詞也要跟著單數變化，選 loves！" },
                    { id: "q_tp4", question: "Mrs. Smith _____ the movie very much. She has seen it three times.", options: ["liked", "likes", "has liked", "will like"], correctIndex: 1, explanation: "She has seen it... (她已經看過三次了)，這代表她現在處於「喜歡 (likes)」這部電影的狀態，所以用現在式！" },
                    { id: "q_tp5", question: "Life in the mountains _____ quieter than life in big cities.", options: ["are", "is", "to be", "being"], correctIndex: 1, explanation: "雖然句子很長，但真正的主角是山裡的「生活 (Life)」。Life 也是單數(it)，動詞配上 is。" },
                    { id: "q_tp6", question: "Melody has a great interest in planting flowers, but her sister _____. She can't even stay in the garden for one minute.", options: ["can't", "doesn't", "isn't", "won't"], correctIndex: 1, explanation: "後面有寫 She can't even stay... 代表姊姊根本沒有興趣。前面對比 melody has a great interest (一般動詞)，所以用 doesn't (have)。" },
                    { id: "q_tp7", question: "Smart Head, one of the hottest TV programs these days, _____ people free plane tickets to Hawaii if they can answer 20 questions correctly in 15 minutes.", options: ["have given", "gives", "giving", "to give"], correctIndex: 1, explanation: "電視節目 Smart Head 雖然有 head 這個字，但這是一個專有名詞(單數)，動詞要選 gives。" }
                ]
            
};
