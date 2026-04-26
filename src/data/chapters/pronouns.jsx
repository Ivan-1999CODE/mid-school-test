import React from 'react';
import { User } from 'lucide-react';

export const chapter_pronouns = {

                id: "pronouns",
                title: "代名詞",
                icon: <User className="w-6 h-6 text-lime-500" />,
                color: "bg-lime-50 border-lime-200",
                accent: "text-lime-600",
                topics: [{ id: "t1", title: "代名詞/反身代名詞" }],
                questions: [
                    { id: "q_p1", question: "John : Have you seen my comic books, Jean? Jean : ______ on your desk yesterday, but Mom took them away this morning.", options: ["They are", "They had", "They were", "They've been"], correctIndex: 2, explanation: "書是複數 (Books) 而且時間點是昨天 (yesterday) ，過去時間加上複數就得用 They were 喔。" },
                    { id: "q_p2", question: "Yesterday was my daughter's birthday. We took ______ to a restaurant and had a big dinner.", options: ["me", "him", "her", "you"], correctIndex: 2, explanation: "帶『女兒(她)』去餐廳，受詞位置要放這個「她」的受格... 沒錯就是 her。" },
                    { id: "q_p3", question: "John and Susan gave ______ a nice jacket as a Christmas present.", options: ["I", "me", "mine", "myself"], correctIndex: 1, explanation: "強跟蘇珊給我一件外套，給我外套的我是受詞嘛，請選受格 me。" },
                    { id: "q_p4", question: "Mary got two dolls from her grandfather on her birthday, and she liked ______ very much.", options: ["her", "it", "ones", "them"], correctIndex: 3, explanation: "因為娃娃 (dolls) 很多隻是複數，瑪莉超喜歡『它們』，複數代名詞請給 them。" },
                    { id: "q_p5", question: "Andy : What do you think of these postcards? Lucy : Oh, I love ______. They're beautiful.", options: ["they", "them", "their", "theirs"], correctIndex: 1, explanation: "我超愛『它們 (明信片 postcards，複數)』！把它們擺在喜歡(love)後面，就是 them。" },
                    { id: "q_p6", question: "Spring is a wonderful season because ______ is usually warm and sunny.", options: ["which", "this", "one", "it"], correctIndex: 3, explanation: "提到天氣啊季節的，常常開局就很直接來一個代名詞 It！" },
                    { id: "q_p7", question: "Alice : This cake is so delicious! Where did you buy it? Oscar : I didn't buy it. I made it ______!", options: ["for me", "to me", "mine", "myself"], correctIndex: 3, explanation: "這東西不是我買的，都是我「自己」做出來的呀！強調靠自己的反身代名詞 myself。" },
                    { id: "q_p8", question: "Elsa : Do you know anyone from Class A? Jeff : No, I don't know any of ______.", options: ["they", "their", "theirs", "them"], correctIndex: 3, explanation: "我不認識他們其中的任何一個... any of 後面遇到他們要換受格 them！" },
                    { id: "q_p9", question: "______ of the gift boxes are already put under the Christmas tree.", options: ["One", "Any", "All", "Much"], correctIndex: 2, explanation: "句子裡的 are 代表數量不只一個嘛，所以答案中只有 All (所有的) 可以對上 are。" },
                    { id: "q_p10", question: "Sue : Your hat looks so comfortable! Ann : It's more than comfortable. If you wear a hat like ______, you won't feel cold on a windy day.", options: ["I", "myself", "one", "this"], correctIndex: 3, explanation: "如果你戴的帽子長得像『這頂 (this)』，就一點都不冷！像 this 這個用法很好記！" },
                    { id: "q_p11", question: "Mike : I heard there are many monkeys in this mountain. But I didn't see any of them last time when I was here. Carl : Hope we can see ______ today.", options: ["another", "others", "some", "themselves"], correctIndex: 2, explanation: "希望今天還能看到『一些 (猴子)』，表示這群猴子中的一點點，用 some。" },
                    { id: "q_p12", question: "Cell phones are convenient; every person in my family has ______.", options: ["it", "one", "them", "those"], correctIndex: 1, explanation: "我家裡面幾乎每個人都有一支手機啊。既然指『一支』那就順理成章用 one。" },
                    { id: "q_p13", question: "This restaurant makes delicious chicken rice, so ______ always full of people at mealtime.", options: ["it is", "they are", "there is", "there are"], correctIndex: 0, explanation: "餐廳 (單數) 為什麼總是客滿。代名詞就用 it，配上 it is 就好！" },
                    { id: "q_p14", question: "Beatrice loves to draw apples. You can see ______ in her notebooks, on her letters, and even on her school bag!", options: ["one", "others", "them", "which"], correctIndex: 2, explanation: "你在筆記本能看見滿滿的蘋果 (Apples)，把它們變複數拿過來放就成 them 惹。" },
                    { id: "q_p15", question: "On the way to work, Natasha was surprised to find she was wearing a white earring on one ear and a gray earring on ______.", options: ["another", "the next", "the other", "the second"], correctIndex: 2, explanation: "一隻耳朵有一邊... 當只有兩樣東西其中還有另一件要講的時候，固定用法叫做 one... the other。" },
                    { id: "q_p16", question: "Elise : I need a dress for tomorrow's party, but I don't have one. Fiona : Why don't you try on my red one? I bought ______ last week.", options: ["it", "one", "ones", "them"], correctIndex: 0, explanation: "因為就是同一件超美的紅洋裝，當然就要用 it 稱呼它啦！" },
                    { id: "q_p17", question: "There are two supermarkets near my house. The one on the corner sells bread, but ______ doesn't.", options: ["another", "that", "the next", "the other"], correctIndex: 3, explanation: "街上就兩間超市大對決：一間叫做 one ... 那另一間也就是『剩下的那間』 the other 啦。" },
                    { id: "q_p18", question: "Michelle Walden, ______ of the best basketball players in our school history, was called \"Flying Walden\" because she could jump very high.", options: ["any", "each", "one", "who"], correctIndex: 2, explanation: "成為... 裡面最頂級的『其中之一』，one of the best 這種組合可以說是學測會考必出現的啊！" },
                    { id: "q_p19", question: "Mrs. Luo : Who put these socks in the refrigerator? Mr. Luo : I don't know. They're not ______. Ask your son.", options: ["me", "mine", "my", "myself"], correctIndex: 1, explanation: "它們不是我的(襪子)！所有格的代名詞 mine 這個字，就等於說 my socks 短小精悍的寫法！" },
                    { id: "q_p20", question: "I haven't been to the movies these days. Are there any good ______ this week?", options: ["ones", "others", "them", "those"], correctIndex: 0, explanation: "有沒有什麼好看的電影們啊？good 加上複數名詞，找 ones 當替身就對了！" },
                    { id: "q_p21", question: "I don't like any one of these three watches. Can you show me ______ one?", options: ["the others", "other", "either", "another"], correctIndex: 3, explanation: "除了現在展示的這隻之外... 你還能拿『隨便另一支 (another)』給我瞧瞧嗎？" },
                    { id: "q_p22", question: "Susan bought ______ bread in the supermarket, but she did not buy anything to drink.", options: ["many", "some", "any", "one"], correctIndex: 1, explanation: "肯定句買了「一些」麵包，這幾乎不加思索要放入 some。 (否定才是 any 喔！)" },
                    { id: "q_p23", question: "My parents have different hobbies. One enjoys baking; ______ enjoys taking pictures.", options: ["another", "the next", "the other", "the second"], correctIndex: 2, explanation: "父母總共兩個人，老爸喜歡這個、老媽喜歡這個... 兩個的分別就請出 One... the other 的固定組合！" },
                    { id: "q_p24", question: "My mom told me to take care of ______ in England. She worried that I couldn't eat or sleep well there.", options: ["me", "myself", "her", "herself"], correctIndex: 1, explanation: "老媽叫我要好好照顧『我自己』... 反身代名詞這時就用 myself 吧！" },
                    { id: "q_p25", question: "I don't think Katie will read any one of the books you've picked out for her: ______ look(s) very boring.", options: ["it", "one", "some", "they"], correctIndex: 3, explanation: "這堆書 (Books) 看起來真的是複數的有夠無聊，代名詞把它抓出來當然是 they 囉。" },
                    { id: "q_p26", question: "Jenny's bag is very heavy because ______ filled with toy cars.", options: ["it is", "they are", "there is", "there are"], correctIndex: 0, explanation: "因為前面的袋子 (Bag) 只有一個單數，所以是「它」塞滿了車子：it is。" },
                    { id: "q_p27", question: "My wife enjoys going to the movies with her friends, but I like to watch TV at home by ______.", options: ["I", "me", "myself", "mine"], correctIndex: 2, explanation: "我就是喜歡一個人在家不被吵！自己獨自一人的片語 by myself 必考必背啊！" }
                ]
            
};
