import React from 'react';
import { HelpCircle } from 'lucide-react';

export const chapter_wh_words = {

                id: "wh-words",
                title: "疑問詞",
                icon: <HelpCircle className="w-6 h-6 text-indigo-500" />,
                color: "bg-indigo-50 border-indigo-200",
                accent: "text-indigo-600",
                topics: [{ id: "t1", title: "疑問詞綜合" }],
                questions: [
                    { id: "q_wh1", question: "Mrs. Wang: ____ are your children? Mrs. Lin: Ted is five. Peter is eight.", options: ["How", "How old", "How long", "How much"], correctIndex: 1, explanation: "因為回答是五歲跟八歲呀！既然問年紀那就一定是 How old。" },
                    { id: "q_wh2", question: "Son: Mom, ____ are my glasses? Mom: Aren't they on the table in the living room?", options: ["what", "when", "where", "how"], correctIndex: 2, explanation: "回答說：不是在桌上嗎？可以看得出來在問眼鏡放『哪裡』，用 where。" },
                    { id: "q_wh3", question: "Robert: Where are the boys playing? Barbie: ____.", options: ["After school", "Under the tree", "On Sunday", "To the park"], correctIndex: 1, explanation: "題目問男朋友們在哪裡玩 (Where)，選項裡只有解答「在樹下 (Under the tree)」才算是一個地點。" },
                    { id: "q_wh4", question: "Alice: How often do you wash your hair? Betty: ____.", options: ["One day", "Twice a week", "Since yesterday", "Three days ago"], correctIndex: 1, explanation: "How often 是在問你從事某個活動的『頻率』，回答一週兩次 (Twice a week) 最搭。" },
                    { id: "q_wh5", question: "Bill: Have you ever been to Hong Kong? Ted: Yes, ____. It's really a fun place to go.", options: ["five days", "for three years", "in one month", "twice already"], correctIndex: 3, explanation: "問有沒有『去過的經驗』，回答說兩次了 (twice already)！" },
                    { id: "q_wh6", question: "Lucy: ____ is Ted doing in the kitchen? Ryan: He's cooking dinner for us.", options: ["What", "Where", "Who", "Why"], correctIndex: 0, explanation: "問『做什麼 (What)』才會回答『他正在幫我們煮飯呀』！" },
                    { id: "q_wh7", question: "George: ____ do you practice playing the piano? Tommy: When my mom is at home, I have to practice every day.", options: ["How about", "How long", "How much", "How often"], correctIndex: 3, explanation: "回答『當媽媽不在家的時候...(抓緊時機)』，代表人家是在問你練琴的頻率/時機，選 How often 最適合。" },
                    { id: "q_wh8", question: "Mr. Wang: ____ are the children? Ms. Chen: They're having fun in the playground.", options: ["Who", "What", "When", "Where"], correctIndex: 3, explanation: "回答他們人在遊樂場，問句一定是找『哪裡』的 Where。" },
                    { id: "q_wh9", question: "Joe: How often does your brother wash his car? Bob: ____.", options: ["Since yesterday", "Two days ago", "One hour", "Every day"], correctIndex: 3, explanation: "How often 問洗車的「頻率」有幾次，回答「每天 (Every day)」無違和！" },
                    { id: "q_wh10", question: "Sarah: ____ does your little sister get up? Willy: About six.", options: ["How often", "How old", "What day", "What time"], correctIndex: 3, explanation: "回答大約六點醒來，問具體時刻就是 What time。" },
                    { id: "q_wh11", question: "Susan: Do you know ____ you have talked on the phone? Walter: Oh, come on! I've only talked for thirty minutes!", options: ["how old", "how often", "how many", "how long"], correctIndex: 3, explanation: "電話講了 30 分鐘，這叫時間的「長度」，要用 How long 來發問。" },
                    { id: "q_wh12", question: "Kevin: ____ sweater looks better on me, the red one or the blue one? Betty: The red one, I think.", options: ["Which", "How", "Where", "What"], correctIndex: 0, explanation: "哪一件毛衣比較好看，紅的還是藍的？這種有提供選項讓你挑的，一定要用 Which (哪一個)。" },
                    { id: "q_wh13", question: "It was an exciting moment for Mr. and Mrs. Wang ____ they learned that they were going to have a baby.", options: ["what", "when", "whether", "why"], correctIndex: 1, explanation: "『當 (When)』王太太夫妻兩人得知要生寶寶的時候，這是個令人興奮的時刻！" },
                    { id: "q_wh14", question: "Emma: ____ umbrella is it? Sherry: It's Ann's. She forgot to take it home.", options: ["What", "Where", "Which", "Whose"], correctIndex: 3, explanation: "回答「這是安的傘」，代表問的是這把雨傘是「誰的」 (Whose)。" },
                    { id: "q_wh15", question: "Kathy: ____ your French class, Jerry? Jerry: I couldn't understand a word at first, but it's getting better now.", options: ["How's", "What's", "When is", "Which is"], correctIndex: 0, explanation: "『你的法文課上得如何？(How is)』，聽起來就像 How's your French class。" },
                    { id: "q_wh16", question: "Daisy: I went to Taitung to visit my uncle there. Grace: Really? ____ were you there? Daisy: For two weeks.", options: ["How long", "How often", "How soon", "What time"], correctIndex: 0, explanation: "因為回答是待了兩個禮拜 (For two weeks)，詢問時間的持續長度選 How long！" },
                    { id: "q_wh17", question: "Ken: ____ is a boat ticket for children? Paul: How old is your child? It's free for kids under three years old.", options: ["How long", "How much", "How often", "How soon"], correctIndex: 1, explanation: "It's free! 是在回答價錢免費，那當初一定是問「多少錢」How much 囉！" },
                    { id: "q_wh18", question: "Carl: ____? Tina: It's three thirty. Carl: I have a math test at four o'clock.", options: ["How much money...", "What day...", "When does...", "What time is it"], correctIndex: 3, explanation: "看到時間回答三點半，這個送分題當然是選現在幾點 What time is it 啦！" },
                    { id: "q_wh19", question: "Teacher: Does anyone know ____ the famous writer was born? Mei-ling: I know! In Taitung, right? Teacher: You got it!", options: ["how", "when", "where", "whether"], correctIndex: 2, explanation: "回答「在台東」，這是一個地點，所以當時一定是問他「在哪裡出生」Where。" },
                    { id: "q_wh20", question: "Nancy: Did the teacher tell us ____ to get to the station? Susan: Yes. She said we should meet there at ten.", options: ["how", "what", "when", "where"], correctIndex: 0, explanation: "如何到達車站呢？這種用方法抵達的事叫做「How to get...」。" },
                    { id: "q_wh21", question: "Carson: Bye, girls. See you tomorrow, Phoebe. Shirley: ____ did Carson say he would see you tomorrow? Phoebe: We're going out for a picnic. Do you want to come?", options: ["What", "When", "Where", "Why"], correctIndex: 3, explanation: "因為回答解答了去野餐的原因，所以原本一定是在問「為什麼」Why 會想去那裡。" },
                    { id: "q_wh22", question: "We are surprised that Sally and Ray decided to get married. No one knows ____. They often fight with each other and are unhappy together.", options: ["why", "where", "when", "how"], correctIndex: 0, explanation: "前面說「沒人知道為什麼」，後面說因為他們老是在吵架。當然是用 Why 啦！" },
                    { id: "q_wh23", question: "Alice: Do you know ____ Grandma is going to visit us? Willy: It's next week. She told me on the phone.", options: ["where", "when", "whether", "why"], correctIndex: 1, explanation: "奶奶什麼時候要來啊？因為回答是「下星期」，所以問的是時間 When 喔！" },
                    { id: "q_wh24", question: "Jill: Have you decided ____ you will celebrate your 30th birthday? Sue: Yeah, I'm going to have a big barbecue party.", options: ["how", "where", "what", "when"], correctIndex: 0, explanation: "因為回答說「喔，我要辦一個大烤肉派對」，這是「慶祝的方式」，所以要問 How (如何)。" }
                ]
            
};
