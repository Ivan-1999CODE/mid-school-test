import React from 'react';
import { Trophy } from 'lucide-react';

export const chapter_comparatives = {

                id: "comparatives",
                title: "比較級與最高級",
                icon: <Trophy className="w-6 h-6 text-amber-500" />,
                color: "bg-amber-50 border-amber-200",
                accent: "text-amber-600",
                topics: [{ id: "t1", title: "比較級/最高級" }],
                questions: [
                    { id: "q_com1", question: "Young boys really grow fast. Both my sons are already ______ than I am.", options: ["tall", "taller", "tallest", "the tallest"], correctIndex: 1, explanation: "看到這個 than 大大的字，就是要做比較啦，乖乖選比較級的 taller 更高吧！" },
                    { id: "q_com2", question: "John felt much better ______ he took the medicine the doctor gave him.", options: ["if", "so", "than", "after"], correctIndex: 3, explanation: "吃完藥『之後』就好多啦。這題主要看句子意思挑對連接詞 after。" },
                    { id: "q_com3", question: "The singer sings beautifully. I cannot think of anyone with a ______ voice.", options: ["best", "better", "more", "most"], correctIndex: 1, explanation: "我怎麼想也想不到有擁有『更好(better)』聲音的人了呢。" },
                    { id: "q_com4", question: "This pencil is too short. Please give me a ______ one.", options: ["lighter", "longer", "smaller", "taller"], correctIndex: 1, explanation: "這支筆嫌太短，當然就要來一支更長的 longer 的啦！" },
                    { id: "q_com5", question: "Lucy looks ______ in pants than in a dress.", options: ["pretty", "prettily", "prettier", "the prettiest"], correctIndex: 2, explanation: "又看見 than 來幫忙！代表穿褲子比穿裙子更讚，找比較級 prettier 啦！" },
                    { id: "q_com6", question: "How can you study in the living room when other people are watching TV? I think you need a ______ place.", options: ["cleaner", "quieter", "safer", "smaller"], correctIndex: 1, explanation: "客廳有人在吵，看來你這個環境是需要一個『更安靜』(quieter)的新天地了。" },
                    { id: "q_com7", question: "In this five-person game, the one who finds ______ hidden balls will win the last free ticket for the movie A Born Player.", options: ["many", "some", "the more", "the most"], correctIndex: 3, explanation: "這個能找出「最多顆(the most)」球的人就能帶走獎金！看到後面全部人都參與競爭，就上最高級。" },
                    { id: "q_com8", question: "This restaurant sells the best steak in Taipei; you can't find ______ steak in the city.", options: ["delicious", "more delicious", "the most delicious", "deliciously"], correctIndex: 1, explanation: "在城裡找不到『比這個更好吃的』＝這根本已經是全市最猛的牛排啦！邏輯轉一下喔！" },
                    { id: "q_com9", question: "Rose: Who's that man wearing a white jacket? Lisa: He's Dr. Wu's son. Rose: Really? They look ______ like brothers than father and son.", options: ["as", "less", "more", "not"], correctIndex: 2, explanation: "這是一個組合包，叫 more A than B... 意思是說比起像父子，看起來『更像』親兄弟啦！" },
                    { id: "q_com10", question: "For Mike, the price is ______ important thing when he shops for jeans. He cares even more about the shape and the size of the pockets.", options: ["the more", "the most", "the less", "the least"], correctIndex: 3, explanation: "他在乎口袋>在乎別的，那價格這東西對他自然就是『最不』重要的 (the least) 囉！" }
                ]
            
};
