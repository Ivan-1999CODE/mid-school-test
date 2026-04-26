import React from 'react';
import { MessageCircle } from 'lucide-react';

export const chapter_tag_questions = {

                id: "tag-questions",
                title: "附加問句",
                icon: <MessageCircle className="w-6 h-6 text-pink-500" />,
                color: "bg-pink-50 border-pink-200",
                accent: "text-pink-600",
                topics: [{ id: "t1", title: "附加問句練習" }],
                questions: [
                    { id: "q_tag1", question: "Oscar: I'm going to the museum. Bus Number 286 goes there, ____? David: Yes, but you can take a Number 287, too.", options: ["does it", "doesn't it", "is it", "isn't it"], correctIndex: 1, explanation: "goes 是一般動詞現在式，肯定句後面要轉成否定，所以用 doesn't it 啦！" },
                    { id: "q_tag2", question: "Rose: It's time to go to bed. You have to get up early tomorrow, ____? Nina: Yes, my class is going hiking tomorrow.", options: ["can't you", "don't you", "aren't you", "haven't you"], correctIndex: 1, explanation: "have to 的 have 在這邊算是普通動詞不是完成式，前面肯定就用附加問句 don't you！" },
                    { id: "q_tag3", question: "Kate: Earl, is that tall boy your brother? Earl: Yes, ____. Kate: But you two look so different!", options: ["it is", "he is", "that is", "you are"], correctIndex: 1, explanation: "問的是那個男孩(boy)，他是男的，代名詞就是 he，句子是肯定回答就搭配 he is。" },
                    { id: "q_tag4", question: "You've studied English for a long time, ____?", options: ["did you", "didn't you", "have", "haven't you"], correctIndex: 3, explanation: "前面看到 You've 其實就是 You have，前面肯定後面否定，一秒選 haven't you。" },
                    { id: "q_tag5", question: "She's going to Europe, ____ she?", options: ["doesn't", "hasn't", "isn't", "won't"], correctIndex: 2, explanation: "前面是 She's (She is)，這是一個肯定句。那後面當然就是否定的 isn't she 囉。" },
                    { id: "q_tag6", question: "Robert: Charles wanted to borrow $1,000 from me yesterday. Mandy: You didn't lend him the money, ____?", options: ["would you", "wouldn't you", "did you", "didn't you"], correctIndex: 2, explanation: "這個簡單！前面已經是否定 (didn't)，反過來到尾巴就是要變成肯定的 did you。" },
                    { id: "q_tag7", question: "Lucy: Do you think Sally and Martin should get married? Rose: Why not? They love each other, ____?", options: ["will they", "won't they", "do they", "don't they"], correctIndex: 3, explanation: "love 是一般動詞肯定。反過來到後面，因為 They 是複數，就要改成 don't they 放後面。" },
                    { id: "q_tag8", question: "The tall man over there is our new English teacher, ____?", options: ["is he", "is there", "isn't he", "isn't there"], correctIndex: 2, explanation: "前面的動詞是 is (肯定)，所以後面就變成 isn't，而且男人是男生（he），就選 isn't he。" },
                    { id: "q_tag9", question: "Alice really likes having noodles for breakfast, ____?", options: ["doesn't she", "is she", "hasn't she", "did she"], correctIndex: 0, explanation: "likes 後面有加 s 就是一般動詞肯定，所以到後面的問句就改搭配 doesnt，Alice 是女生所以加個 she。" },
                    { id: "q_tag10", question: "Henry: Shelly's in the nurse's office, ____? Daniel: Yeah, she just cut her finger.", options: ["wasn't she", "isn't she", "hasn't she", "didn't she"], correctIndex: 1, explanation: "王先生問，Shelly 正在健康中心，對嗎 (is => isn't she)? 護理師說對啊她感冒了。所以這題填 isn't she。" }
                ]
            
};
