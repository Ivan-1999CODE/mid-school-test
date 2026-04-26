import React from 'react';
import { Layers } from 'lucide-react';

export const chapter_conjunctions = {

                id: "conjunctions",
                title: "連接詞",
                icon: <Layers className="w-6 h-6 text-cyan-500" />,
                color: "bg-cyan-50 border-cyan-200",
                accent: "text-cyan-600",
                topics: [{ id: "t1", title: "連接詞綜合" }],
                questions: [
                    { id: "q_con1", question: "It was very hot when we got to Kenting National Park, ______ we still had a good time there.", options: ["or", "so", "but", "because"], correctIndex: 2, explanation: "非常熱...「但是」我們還是玩得很開心！前面看起來很慘，後面卻很好，就用 but 轉折。" },
                    { id: "q_con2", question: "Jane: I heard you went to Yangmingshan last spring vacation. Dick: We not only visited the park ______ took a hot-spring bath.", options: ["by the way", "but also", "after", "and"], correctIndex: 1, explanation: "超實用句型來了：not only... but also...！翻譯成『我們不但去了公園，也洗了溫泉！』" },
                    { id: "q_con3", question: "A-hong can speak two foreign languages, ______ his brothers can't.", options: ["but", "or", "so", "then"], correctIndex: 0, explanation: "阿宏會講兩種外語，兄弟卻「不會」。前後成對比相反狀態，選 but 啦。" },
                    { id: "q_con4", question: "Da-fa is cleaning the house ______ some of his friends are coming for dinner.", options: ["because", "but", "if", "so"], correctIndex: 0, explanation: "為什麼他在打掃啊？「因為」朋友要來呀！前後講原因用 because 超好懂。" },
                    { id: "q_con5", question: "Mr. Green was very angry with his daughter ______ she always put her dirty socks on the dining table.", options: ["although", "because", "but", "until"], correctIndex: 1, explanation: "為什麼格林先生很生氣？「因為」她把髒襪子放桌上。因果關係因為是 because。" },
                    { id: "q_con6", question: "______ Joe looks strong, in fact he gets sick easily.", options: ["Because", "If", "Though", "When"], correctIndex: 2, explanation: "雖然 Joe 看起來這傢伙很壯，「但是」其實他很容易生病。前面放個 Though (雖然) 剛剛好！" },
                    { id: "q_con7", question: "Enya got up early this morning ______ she did not want to be late for her trip.", options: ["if", "but", "though", "because"], correctIndex: 3, explanation: "Enya 早起... 是「因為」她不想遲到。說明理由用 because。" },
                    { id: "q_con8", question: "Elsa hates going shopping, ______ she went last night when her grandpa asked her to buy some medicine for him.", options: ["because", "but", "if", "so"], correctIndex: 1, explanation: "Elsa 是個恨透了逛街的女子，「但是」昨晚她還是去逛了。口是心非要加用 but 啦～" },
                    { id: "q_con9", question: "Mr. Hu speaks good English ______ he lived in the U.S. for many years.", options: ["because", "but", "so", "whether"], correctIndex: 0, explanation: "胡先生把英文講這麼好是「因為」他在美國住過好幾年。原因擺明要放 because。" },
                    { id: "q_con10", question: "______ going shopping, Dad asked me if Mom would eat at home tonight. He wanted to know what he should buy for the dinner.", options: ["Without", "Until", "By", "Before"], correctIndex: 3, explanation: "爸爸是在我們去逛街這件事「發生前」先問媽媽會不會在家吃飯。選 Before。" },
                    { id: "q_con11", question: "I want to go camping in the mountains this afternoon, but a typhoon is coming. I'm not sure ______ the road to the mountains will be closed.", options: ["how", "what", "whether", "why"], correctIndex: 2, explanation: "我不確定往山上的的路「會不會/是否」被封住。翻譯成是否的話就選 whether 喔！" },
                    { id: "q_con12", question: "I can't find my history book, ______ I know it's somewhere in the living room.", options: ["because", "but", "since", "until"], correctIndex: 1, explanation: "我找不到歷史課本拉，「但是(but)」我知道它應該還在客廳的某個角落。" },
                    { id: "q_con13", question: "I ______ a bath when someone turned off the light. I was scared and shouted for help.", options: ["was taking", "took", "am taking", "had taken"], correctIndex: 0, explanation: "燈突然被關掉時，我「正在洗澡」，過去進行式聽起來超慘 was taking。" },
                    { id: "q_con14", question: "Dad: Are you going out? It's really late now. Mitch: I know, but it's the last day to buy tickets to the World Cup games, ______ I must go.", options: ["if", "or", "so", "though"], correctIndex: 2, explanation: "這是買票的最後一天，「所以 (so)」我一定要去啦！" },
                    { id: "q_con15", question: "______ Annie knows fast food is not good for her health, she still eats it.", options: ["Although", "Because", "If", "When"], correctIndex: 0, explanation: "「雖然 (Although)」安妮知道速食不好，但她就是還是要吃！" },
                    { id: "q_con16", question: "I have to catch the bus right now, ______ I'll miss my brother's birthday party.", options: ["and", "because", "or", "until"], correctIndex: 2, explanation: "我現在得趕快去搭公車了，「否則 (or)」就會錯過生日派對！" },
                    { id: "q_con17", question: "I'm not sure if Kevin ______ this morning, but if he does, I'll tell him that you called.", options: ["will come in", "comes in", "has come in", "came in"], correctIndex: 1, explanation: "『如果』這種條件裡面，可以用現在式代未來式喔，他今天早上要是出現了(comes in)，我就會...。" },
                    { id: "q_con18", question: "This dress is pretty, ______ it does not look good on me.", options: ["so", "but", "or", "if"], correctIndex: 1, explanation: "這件衣服超好看的，「但是 (but)」穿在我身上就是怪。心痛轉折選 but。" },
                    { id: "q_con19", question: "My sister wants to buy a car ______ she doesn't have enough money.", options: ["because", "but", "if", "or"], correctIndex: 1, explanation: "我妹想買一輛車...「但是 (but)」她根本沒錢！窮酸的轉折，選 you guessed it, but。" },
                    { id: "q_con20", question: "I've wanted to read The Diary of a Young Girl for months, ______ today I finally borrowed the book from the library.", options: ["and", "since", "so", "until"], correctIndex: 0, explanation: "我一直很想看這本書，「而且終於 (and)」今天借到了。順順地接下去講就用 and。" },
                    { id: "q_con21", question: "Ms. Liu usually gives us a lot of homework, ______ she didn't give us any today.", options: ["but", "if", "or", "so"], correctIndex: 0, explanation: "她老是給超多功課的，「但 (but)」今天佛心來的居然沒給！" },
                    { id: "q_con22", question: "Mozart ______ his first music when he was only six years old.", options: ["is writing", "has written", "will write", "wrote"], correctIndex: 3, explanation: "在六歲時寫了他人生的第一首曲子，在過去發生的事實用過去式 wrote 喔！" },
                    { id: "q_con23", question: "Josh has planned to make a trip to New York and ______ some of his friends there.", options: ["visit", "visits", "visiting", "visited"], correctIndex: 0, explanation: "Josh 計畫去旅行... 「而且拜訪」朋友。前面 to make 之後 and 後面跟著直接原形 visit！" },
                    { id: "q_con24", question: "I knew that George could play the flute, ______ I didn't know he was so good at it.", options: ["because", "but", "if", "so"], correctIndex: 1, explanation: "這傢伙真的會吹長笛啊，「但 (but)」我還真不知道他原來這麼強！" },
                    { id: "q_con25", question: "The weather is always changing, so I don't know ______ I should bring an umbrella when I go out.", options: ["how", "what", "where", "whether"], correctIndex: 3, explanation: "這天氣實在搞不懂，「是否 (whether)」我該乖乖帶把傘呢。" }
                ]
            
};
