import React from 'react';
import { BookOpen } from 'lucide-react';

export const chapter_be_aux = {

                id: "be-aux",
                title: "be 動詞 vs 助動詞",
                icon: <BookOpen className="w-6 h-6 text-blue-500" />,
                color: "bg-blue-50 border-blue-200",
                accent: "text-blue-600",
                topics: [{ id: "t1", title: "Be動詞 vs Do助動詞" }],
                questions: [
                    { id: "q_ba1", question: "Simon: Why ____ Jerry and Lisa play cards with us? Henry: Because they want to go to the movies.", options: ["don't", "isn't", "aren't", "doesn't"], correctIndex: 0, explanation: "play 是個一般動作(原形動詞)，Jerry 跟 Lisa 是兩個人(複數)，所以問句搭配助動詞 don't。" },
                    { id: "q_ba2", question: "Jane always does well on English tests, but her sisters ____.", options: ["doesn't", "aren't", "don't", "didn't"], correctIndex: 2, explanation: "姐姐們 (sisters) 是複數，而且前面姊姊是肯定 does well，後方對比就要用否定 don't。" },
                    { id: "q_ba3", question: "Becky: Do you like watching cooking programs on TV? Diana: No, I don't, but my twin brother ____. He's very fond of cooking.", options: ["does", "do", "is", "are"], correctIndex: 0, explanation: "前面的問句有助動詞 don't，我就配合你，我的 brother 是單數，用肯定 does！" },
                    { id: "q_ba4", question: "Jane: Did you get up early this morning? Tina: No, I didn't, but my brother ____. He gets up early every day.", options: ["does", "is", "did", "was"], correctIndex: 2, explanation: "前面說我沒有 (didn't)，但是我哥哥有！後面要轉成肯定的過去式 did。" },
                    { id: "q_ba5", question: "Playing video games is fun, ____?", options: ["do they", "aren't they", "does it", "isn't it"], correctIndex: 3, explanation: "打電動前面是 is fun，後面要反過來變否定 isn't。主詞是一件事，用 it。" },
                    { id: "q_ba6", question: "Paul: ____ Shelly's father a businessman? Carl: I don't think so. I remember he teaches English.", options: ["Are", "Is", "Do", "Does"], correctIndex: 1, explanation: "問身份「老爸是不是商人？」，老爸是單數的一個角色，我們用 is 來問。" },
                    { id: "q_ba7", question: "Mom: What ____ after school today? Ryan: Well, I just read some comic books.", options: ["did you do", "do you do", "are you doing", "will you do"], correctIndex: 0, explanation: "今天放學後你做了什麼？雖然有 today，因為放學時間已經過了事情發生完了，用過去式的助動詞 did you do 啦！" },
                    { id: "q_ba8", question: "Ken's brothers like to watch tennis, but Ken ____. He is crazy about baseball.", options: ["is", "isn't", "does", "doesn't"], correctIndex: 3, explanation: "前面 like (一般動詞肯定)，but 代表相反，Ken 是單數所以用 doesn't (否定)。" },
                    { id: "q_ba9", question: "____ the dog that bites people yours? You should keep it home.", options: ["Can", "Does", "Has", "Is"], correctIndex: 3, explanation: "The dog is yours. 變成問句就是 Is the dog yours? (那隻狗是你的嗎)" },
                    { id: "q_ba10", question: "Mom: Oh, no! Your sister forgot her sports shoes. When ____ she have PE class? Peter: It's in the afternoon. Don't worry. I'll bring them to her.", options: ["did", "does", "has", "is"], correctIndex: 1, explanation: "have 是上體育課的「上 (一般動作)」，碰到一般動詞，問句就要請出助動詞大哥 does 來幫忙！" },
                    { id: "q_ba11", question: "Melody has a great interest in planting flowers, but her sister ____. She can't even stay in the garden for one minute.", options: ["can't", "doesn't", "isn't", "won't"], correctIndex: 1, explanation: "前面 has an interest 代表有這個興趣(一般動詞)，相反的沒有當然是 doesn't 囉！" }
                ]
            
};
