import { useState } from "react";

export const Card = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const { name, price, inStock, image } = children.props;
  const [newStock, setNewStock] = useState(inStock);
  console.log(price * quantity);
  const handleClick = () => {
    setNewStock(inStock - quantity);
    setQuantity(quantity + 1);
  };

  const cardSize = "18rem";

  return (
    <div className="card" style={{ width: cardSize }}>
      <img src={image} alt="meat photo" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>{children}</p>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Add to basket {quantity}
      </button>
      <p>total: £{price * quantity}</p>
      <p>In stock: {newStock}</p>
    </div>
  );
};
