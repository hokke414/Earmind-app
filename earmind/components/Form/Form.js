"use client";
import { useState } from "react";
import "components/Form/Form.css";

function Form({ onNext }) {
  const [type, setType] = useState("");
  const [noise, setNoise] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div className="container">
      <h1>条件を選択</h1>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">選択してください</option>
        <option value="wireless">ワイヤレス</option>
        <option value="wired">有線</option>
      </select>

      <select onChange={(e) => setMaxPrice(Number(e.target.value))}>
        <option value="">価格を選択</option>
        <option value="5000">〜5000円</option>
        <option value="20000">5000円〜20000円</option>
        <option value="50000">20000円〜50000円</option>
      </select>

      <label>
        <input
          type="checkbox"
          onChange={(e) => setNoise(e.target.checked)}
        />
        ノイズキャンセリング
      </label>

      <button
        className="button"
        onClick={() => onNext({ type, noise, maxPrice })}
      >
        結果を見る
      </button>
    </div>
  );
}

export default Form;