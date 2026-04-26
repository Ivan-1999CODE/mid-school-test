import React from 'react';
import { Eye } from 'lucide-react';

export const chapter_perception = {

                id: "perception",
                title: "感官動詞",
                icon: <Eye className="w-6 h-6 text-sky-500" />,
                color: "bg-sky-50 border-sky-200",
                accent: "text-sky-600",
                topics: [{ id: "t1", title: "See/Hear/Watch + V/Ving" }],
                questions: [
                    { id: "q_pe1", question: "Bruce: When did Roger change his job? Laura: He hasn't changed his job. He still works in the same computer store. Bruce: But I saw him ____ watches on the street corner.", options: ["sold", "to sell", "have sold", "selling"], correctIndex: 3, explanation: "感官動詞 see 看到 somebody 正在做某事，後面可以配 V-ing，代表「當下正好看著他正在賣 (selling)」！" },
                    { id: "q_pe2", question: "Cindy cried out when she saw a motorcycle ____ into her cat.", options: ["bump", "bumped", "to bump", "has bumped"], correctIndex: 0, explanation: "這個 saw (看到) 是感官動詞，機車撞上貓是一個瞬間或全程短動作的事實，可以直接用原形 bump。" },
                    { id: "q_pe3", question: "Mike: When did Laura become a taxi driver? Jerry: She is NOT a taxi driver. She's a nurse. Mike: But I saw her ____ a taxi yesterday! Jerry: Oh, maybe it was her younger sister!", options: ["driving", "drove", "to drive", "have driven"], correctIndex: 0, explanation: "剛好瞄到她「正在」開車！感官動詞後面碰到這種強調當下的狀態就選 Ving：driving。" },
                    { id: "q_pe4", question: "When I was walking along the river, I saw some fish ____ out of the water.", options: ["jumped", "to jump", "jumping", "are jumping"], correctIndex: 2, explanation: "沿著河邊散步時，看到魚「不斷在」跳，有持續畫面的感覺，選 jumping！" },
                    { id: "q_pe5", question: "The little boy jumped up and down happily when he saw a bee ____ into the house.", options: ["flown", "to fly", "flying", "has flown"], correctIndex: 2, explanation: "小男孩看到蜜蜂「正在飛進來」。感官動詞見到這個過程畫面，Ving 上場也就是 flying！" },
                    { id: "q_pe6", question: "See? The strange man I saw yesterday ____ around my house again. Should I call the police?", options: ["walking", "is walking", "and walked", "to walk"], correctIndex: 1, explanation: "昨天我看到的怪人，現在又「正在 (is walking)」附近走了。不要被 saw 騙了，這句真正的主角動詞在後面喔！" },
                    { id: "q_pe7", question: "My cat got excited when it saw the boy ____ the birds.", options: ["catches", "catching", "to catch", "caught"], correctIndex: 1, explanation: "貓看到那個男孩「正在」抓鳥。感官動詞(saw) + 受詞 + 正在做... 所以是 Ving 的 catching！" }
                ]
            
};
