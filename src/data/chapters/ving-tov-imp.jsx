import React from 'react';
import { Zap } from 'lucide-react';

export const chapter_ving_tov_imp = {

                id: "ving-tov-imp",
                title: "Ving, ToV, 祈使句",
                icon: <Zap className="w-6 h-6 text-amber-500" />,
                color: "bg-amber-50 border-amber-200",
                accent: "text-amber-600",
                topics: [{ id: "t1", title: "不定詞 vs 動名詞" }, { id: "t2", title: "祈使句用法" }],
                questions: [
                    { id: "q_v1", question: "Writing stories ______ what my father liked to do best in his younger days.", options: ["were", "was", "have been", "has been"], correctIndex: 1, explanation: "把「寫故事」當成一整件事看，就是單數喔！因為描述過去的事情，所以用 was。" },
                    { id: "q_v2", question: "Josh has planned to make a trip to New York and ______ some of his friends there.", options: ["visit", "visits", "visiting", "visited"], correctIndex: 0, explanation: "前面 plan to 已經有 to，用 and 連接後面的動詞可以省略 to，直接選原形 visit 就好！" },
                    { id: "q_v3", question: "Alison doesn't like ______ what to do. She only does things she wants to do.", options: ["told", "to tell", "be told", "to be told"], correctIndex: 3, explanation: "Alison 不喜歡「被」別人教做事。被動要用 to be + pp，所以選 to be told。" },
                    { id: "q_v4", question: "It almost killed Kevin to take care of his baby sister for one afternoon. He wondered how his mom could do ______ every day.", options: ["her", "it", "one", "them"], correctIndex: 1, explanation: "前面提過了「照顧妹妹」這件事，怕囉嗦就直接用 it 來代替這件事囉！" },
                    { id: "q_v5", question: "Playing games on the cellphone ______ popular with high school students.", options: ["is", "are", "being", "to be"], correctIndex: 0, explanation: "「在手機上玩遊戲」視為一件事（單數），所以動詞配 is。" },
                    { id: "q_v6", question: "______ a map with you when you go to a place for the first time.", options: ["Have taken", "Take", "Taking", "To take"], correctIndex: 1, explanation: "這是一個祈使句（給建議或命令），開頭直接放原形動詞 Take！" },
                    { id: "q_v7", question: "Playing sports at least three times a week ______ good for your health.", options: ["is", "are", "has", "have"], correctIndex: 0, explanation: "「每週運動三次」是一件事（單數主詞），選 is 就對了！" },
                    { id: "q_v8", question: "Getting up early on a cold morning is not easy, ______?", options: ["are you", "do you", "does it", "is it"], correctIndex: 3, explanation: "前面 Getting up 是一件事所以用 it 表示。原本句子裡有 not，反過來當然要配肯定的 is it。" },
                    { id: "q_v9", question: "______ in the daytime is not good for you. You may not sleep well at night and feel tired the next day.", options: ["Slept", "Sleeps", "Have slept", "Sleeping"], correctIndex: 3, explanation: "要當句子的主詞，動詞要加上 ing 變成動名詞 Sleeping。" },
                    { id: "q_v10", question: "I think ______ is more fun to go to the movies with my friends than with my family.", options: ["that", "there", "one", "it"], correctIndex: 3, explanation: "「和朋友看電影」太長了被丟到後面，前面要找一個「替身」，就請虛主詞 it 來頂替吧！" },
                    { id: "q_v11", question: "The most convenient way to get around this small town is ______ a bike.", options: ["to ride", "to have ridden", "rides", "rode"], correctIndex: 0, explanation: "最方便的方法「是去」騎腳踏車，is 後面加 to ride 可以表示目的或是你的內容。" },
                    { id: "q_v12", question: "I usually carry a camera on my trips; taking pictures ______ a good way for me to remember the experience.", options: ["to be", "is", "being", "are"], correctIndex: 1, explanation: "「拍照 (Taking pictures)」這件事當主詞算單數，所以動詞要用 is。" },
                    { id: "q_v13", question: "Playing in the water ______ lots of fun on a hot summer day.", options: ["is", "are", "has", "have"], correctIndex: 0, explanation: "「玩水」當作一件事看（單數主詞），動詞當然配 is 囉！" },
                    { id: "q_v14", question: "It was important for Kevin ______ his homework quickly because he had to help his parents sell fruit in the night market.", options: ["finish", "to finish", "finishes", "finished"], correctIndex: 1, explanation: "看到 It is/was + 形容詞 + for 人，後面固定接 to + 原形動詞，這是超級常考的固定句型！" },
                    { id: "q_v15", question: "Learning foreign languages ______ me to know more about other countries.", options: ["helps", "helping", "help", "to help"], correctIndex: 0, explanation: "「學外語」這件事算單數 (it)，動詞因為第三人稱單數要加 s，選 helps。" },
                    { id: "q_v16", question: "Wendy: Do you know where the library is? Simon: Just ______ going for two more blocks and you'll see it.", options: ["keep", "to keep", "keeping", "keeps"], correctIndex: 0, explanation: "別人問路你給指示（祈使句），開頭一律用原形動詞，選 keep 就好。" },
                    { id: "q_v17", question: "______ good grades, you have to study hard.", options: ["To get", "Getting", "Get", "Gets"], correctIndex: 0, explanation: "放在句首表示「為了...」的意思，必須要用 To + 原形動詞，意思是「為了拿好成績...」。" },
                    { id: "q_v18", question: "Asking questions ______ Henna learn more and better.", options: ["help", "helps", "helping", "to help"], correctIndex: 1, explanation: "「發問」當作單數的一件事，後面的動詞要加 s，選 helps！" },
                    { id: "q_v19", question: "Judy: The ball game will be on TV tomorrow at six in the morning. Lucy: ______ up early and you won't miss it.", options: ["Get", "To get", "Getting", "Gets"], correctIndex: 0, explanation: "這是祈使句（叫你早起），一樣用原形動詞開頭，選 Get。" },
                    { id: "q_v20", question: "Playing video games is fun, ______?", options: ["do they", "aren't they", "does it", "isn't it"], correctIndex: 3, explanation: "附加問句把握「前肯後否的原則」。前面是 is fun，後面要變否定 isn't。主詞是一件事，用 it。" },
                    { id: "q_v21", question: "A-ming: Dad, can I go dancing tomorrow? Mr. Wu: ______ your homework and we'll talk about it.", options: ["Finishes", "Finishing", "To finish", "Finish"], correctIndex: 3, explanation: "爸爸叫你先把功課做完，祈使句開頭直接用原形動詞 Finish。" },
                    { id: "q_v22", question: "______ the lesson before class gives me a better idea about what the teacher is going to teach.", options: ["Preview", "Previews", "Previewed", "Previewing"], correctIndex: 3, explanation: "「課前預習」當主詞，要加上 ing 變成動名詞 Previewing 喔！" },
                    { id: "q_v23", question: "Watching American movies ______ one of the activities we enjoy most in our English class.", options: ["is", "are", "to be", "being"], correctIndex: 0, explanation: "「看美國電影」這件事算作單數，加上時態是現在式，動詞配 is。" },
                    { id: "q_v24", question: "______ carefully before you buy a new house.", options: ["Thinking", "To think", "Thinks", "Think"], correctIndex: 3, explanation: "叫你買房子前要先想清楚，祈使句開頭直接用原形 Think。" },
                    { id: "q_v25", question: "Reading comic books ______ fun.", options: ["is", "are", "has", "have"], correctIndex: 0, explanation: "「看漫畫」當作一件事（單數），選 is。" },
                    { id: "q_v26", question: "John always goes to bed late at night, so ______ early is difficult for him.", options: ["get up", "got up", "gets up", "getting up"], correctIndex: 3, explanation: "「早起」當作主詞時，動詞要加上 ing 變成 Getting up。" }
                ]
            
};
