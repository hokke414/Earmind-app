import "components/Card/Card.css";

function Card({ item, isSelected, onClick}) {
  return (
    <div
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={item.image} alt={item.name} className="image" />

      <div className="cardHeader">
        <h2>{item.name}</h2>
      </div>

      <p>{item.price}円</p>
    </div>
  );
}

export default Card;