import React from "react";
import "components/Result/Result.css";
import Card from "components/Card/Card.js";
import { earphones } from "data/earphones.js";

const Result = ({ filters, onBack }) => {
  // フィルタ処理
  const filteredItems = earphones.filter((item) => {
    if (filters.type && item.type !== filters.type) return false;
    if (filters.noise && !item.noise) return false;
    if (filters.maxPrice && item.price > filters.maxPrice) return false;
    return true;
  });

  return (
    <div>
      <h1>Earmind</h1>
      <div className="container">
        <button className="backButton" onClick={onBack}>
          ← 戻る
        </button>

        <h2 className="sectionTitle">おすすめ</h2>

        <div className="resultList">
          {filteredItems.map((item) => (
            <Card
              key={item.id || item.name}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;