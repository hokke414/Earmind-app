import "components/Card/Card.css";

function Card({ item, isSelected, isFavorite, onClick, onFavorite }) {
  return (
    <div
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={item.image} alt={item.name} className="image" />

      <div className="cardHeader">
        <h2>{item.name}</h2>

        <button
          className={`favButton ${isFavorite ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation(); // カードクリック防止
            onFavorite();
          }}
        >
          ♥
        </button>
      </div>

      <p>{item.price}円</p>
    </div>
  );
}

export default Card;