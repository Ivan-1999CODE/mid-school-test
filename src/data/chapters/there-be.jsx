import React from 'react';
import { List } from 'lucide-react';

export const chapter_there_be = {

                id: "there-be",
                title: "There is / There are 題組",
                icon: <List className="w-6 h-6 text-purple-500" />,
                color: "bg-purple-50 border-purple-200",
                accent: "text-purple-600",
                topics: [{ id: "t1", title: "存在句型" }, { id: "t2", title: "地方副詞" }],
                questions: [
                    { id: "q_th1", question: "Paul: What did you find under his desk? Tom: Oh, ____ all kinds of things: a basketball, pencils, a hat, and fries!", options: ["there were", "it was", "it had", "there was"], correctIndex: 0, explanation: "things 是複數，而且問句用 did you find 是過去式，所以回答要有過去式的 There were。" },
                    { id: "q_th2", question: "(In the teachers' office) Miss Huang: Sue, ____ students in the classroom? Miss Cheng: I don't think so. School's over. Miss Huang: But I hear people talking over there.", options: ["are they", "do they", "is there", "are there"], correctIndex: 3, explanation: "students (學生) 是複數，要問「有沒有學生」請用 Are there 喔！" },
                    { id: "q_th3", question: "Jenny: How many countries ____ in Europe? Betty: I'm not sure.", options: ["is it", "is there", "are they", "are there"], correctIndex: 3, explanation: "countries 也是變複數了，「有多少個國家存在」就是問 Are there。" },
                    { id: "q_th4", question: "Jack: There is going to ____ a dance show on Saturday. Would you like to go with me? Nina: Sure. I can't wait for it.", options: ["be", "do", "get", "have"], correctIndex: 0, explanation: "There is going to 後面加原形動詞 be，翻譯為「將會有...」。" },
                    { id: "q_th5", question: "Grace: How many pencils ____ in your pencil box? Allen: Only one.", options: ["are there", "are they", "is there", "is it"], correctIndex: 0, explanation: "pencils 加上了 s 變複數，所以要用 are there。" },
                    { id: "q_th6", question: "____ will be a welcome party next week for the new students. Will you come with me?", options: ["It", "There", "They", "We"], correctIndex: 1, explanation: "There will be 就等於「未來將會有...」，是經典常見片語！" },
                    { id: "q_th7", question: "Grace: How many people ____ in the office when the fire happened? Harry: Five. Luckily, nobody got hurt.", options: ["did they", "had they", "were there", "would there be"], correctIndex: 2, explanation: "因為後面寫著 fire happened (過去式)，是在問「當時」有幾個人，所以用過去式 were there 去問。" },
                    { id: "q_th8", question: "Now we have to take a taxi home because ____ are no buses after eleven o'clock.", options: ["here", "there", "they", "we"], correctIndex: 1, explanation: "「那裡沒有公車了」，There are no... 代表「沒有存在...」。" },
                    { id: "q_th9", question: "When I entered the house for the first time, I found ____ was a big round table in the living room.", options: ["it", "that", "there", "this"], correctIndex: 2, explanation: "前面 found 後面其實省略了一個 that。接下來是說客廳裡「有」一張圓桌，所以要用 there was。" },
                    { id: "q_th10", question: "Somewhere along the road, ____ a shop which sells things from foreign countries.", options: ["that is", "it is", "it has", "there is"], correctIndex: 3, explanation: "「一間賣外國貨的店在那邊」表示它的存在，要用 There is。" },
                    { id: "q_th11", question: "There ____ more than twenty clubs in our school. Which one would you like to join?", options: ["has", "have", "is", "are"], correctIndex: 3, explanation: "超過二十個 clubs (複數)，要搭複數的 be 動詞 are 啦！" }
                ]
            
};
