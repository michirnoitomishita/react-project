// pages/Omikuji.jsx

// 🔽 追加
import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

export const Omikuji = () => {
  // 🔽 追加
  const [omikujiResult, setOmikujiResult] = useState("");

// 1. history stateを追加
  const [history, setHistory] = useState([]);

  const getOmikuji = () => {
    const result = ["大吉", "中吉", "小吉", "凶", "大凶"][
      Math.floor(Math.random() * 5)
    ];
    console.log(result);
    // 🔽 追加
    setOmikujiResult(result);
    
 // 2. おみくじの結果をhistoryに追加
    setHistory([result, ...history]);

  };

 return (
    <>
      <p>おみくじの画面</p>
      <ActionButton text="おみくじをひく" action={getOmikuji} />
      <p>{omikujiResult}</p>

      <h2>履歴</h2>
      {/* 3. 履歴の表示部分を修正 */}
      <ul>
        {history.map((result, index) => (
          <li key={index}>
            {result}
          </li>
        ))}
      </ul>
    </>
  );
};
