"use client";
import { useState } from "react";
import "components/Form/Form.css";

function Form({ onNext }) {
  const [type, setType] = useState("");
  const [noise, setNoise] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div>
      <h1>Earmind</h1>
     <div className="container">
        <h1>条件を選択</h1>
        <div>
          <h2>・タイプ</h2>
          <select onChange={(e) => setType(e.target.value)}>
            <option value="">選択してください</option>
            <option value="wireless">ワイヤレス</option>
            <option value="wired">有線</option>
          </select>
        </div>
        
        <div>
          <h2>・価格帯</h2>
          <select onChange={(e) => setMaxPrice(Number(e.target.value))}>
            <option value="">価格を選択</option>
            <option value="5000">〜5000円</option>
            <option value="20000">5000円〜20000円</option>
            <option value="50000">20000円〜50000円</option>
          </select>
        </div>  

        <div>
          <h2>・機能</h2>
          <label>
            <input
              type="checkbox"
              onChange={(e) => setNoise(e.target.checked)}
            />
            ノイズキャンセリング
          </label>
        </div>

       <button
         className="button"
         onClick={() => onNext({ type, noise, maxPrice })}
       >
         検索
       </button>
     </div>
    </div>
  );
}

export default Form;