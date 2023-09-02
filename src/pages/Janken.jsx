// pages/Janken.jsx;

// 🔽 useState の読み込み
import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

export const Janken = () => {
  // 🔽 初期値を3項目を持つオブジェクトで設定
  const [jankenResult, setJankenResult] = useState({
    myHand: "入力待ち",
    comHand: "待機中",
    result: "未対戦",
  });
 // 🔽 履歴を保存するための state を作成．初期値は空配列
  const [history, setHistory] = useState([]);

  // 🔽 「自分の手」を入力して，「自分の手，相手の手，勝敗」を持ったオブジェクトを出力する関数
  const getJankenResult = (myHand) => {
    const hand = ["グー", "チョキ", "パー"];
    const myIndex = hand.indexOf(myHand);
    const comIndex = Math.floor(Math.random() * 3);
    const resultSheet = [
      ["Draw", "Win", "Lose"],
      ["Lose", "Draw", "Win"],
      ["Win", "Lose", "Draw"],
    ];
    return {
      myHand: myHand,
      comHand: hand[comIndex],
      result: resultSheet[myIndex][comIndex],
    };
  };

  // 🔽 ボタンクリック時に実行する「じゃんけんをして結果を保存する関数」
  const getJanken = (myHand) => {
    const result = getJankenResult(myHand);
    setJankenResult(result);
    // 🔽 「履歴の配列の先頭にじゃんけんの結果を追加した新しい配列」を作成して履歴のデータを上書きする．
    setHistory([result, ...history]);
  };

//   return (
//     <>
//       <p>じゃんけんの画面</p>
//       <ActionButton text="グー" action={() => getJanken("グー")} />
//       {/* 🔽 チョキボタンとパーボタンを追加 */}
//       <ActionButton text="チョキ" action={() => getJanken("チョキ")} />
//       <ActionButton text="パー" action={() => getJanken("パー")} />
//       {/* 🔽 `jankenResult` はオブジェクトなのでキー名を指定して各値を取り出す */}
//       <p>自分の手：{jankenResult.myHand}</p>
//       <p>相手の手：{jankenResult.comHand}</p>
//       <p>結果：{jankenResult.result}</p>
//     </>
//   );
// };
  
  // 履歴の表示
return (
    <>
      <p>じゃんけんの画面</p>
      <ActionButton text="グー" action={() => getJanken("グー")} />
      <ActionButton text="チョキ" action={() => getJanken("チョキ")} />
      <ActionButton text="パー" action={() => getJanken("パー")} />
      <p>自分の手：{jankenResult.myHand}</p>
      <p>相手の手：{jankenResult.comHand}</p>
      <p>結果：{jankenResult.result}</p>


      <h2>履歴</h2>
      <ul>
        {history.map((record, index) => (
          <li key={index}>
            {record.myHand} vs {record.comHand} : {record.result}
          </li>
        ))}
      </ul>
    </>
);
};