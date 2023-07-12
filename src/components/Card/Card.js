/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Card.css";

const Card = ({ colour, image, name, ranking }) => {
  return (
    <div
      className="card"
      style={{ borderColor: colour }}
      data-testid="border-div"
    >
      <img src={image} alt="A default image" className="card-img" />
      <h2 className="card-name">{name}</h2>
      <p className="card-rank">
        <span data-testid="indicator">{ranking < 50 ? "–" : "+"}</span>
        <span>{ranking}</span>
      </p>
    </div>
  );
};

export default Card;
