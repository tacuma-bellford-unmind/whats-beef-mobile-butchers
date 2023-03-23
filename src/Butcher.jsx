import { Card } from "./Card.jsx";
import { Meat } from "./Meat.jsx";
import { Link } from "react-router-dom";

export const Butcher = ({ butcherName, selectionOfMeats }) => {
  const getSelectionMeats = ({ name, inStock, price, imageUrl }) => (
    <div className="col-lg-12">
      <Card>
        <Meat
          key={name}
          name={name}
          inStock={inStock}
          price={price}
          image={imageUrl}
        />
      </Card>
    </div>
  );

  const meatSelection = selectionOfMeats.map(getSelectionMeats);

  return (
    <div>
      <h1>
        <Link to={`butchers/1`}>{butcherName}</Link>
      </h1>
      {meatSelection}
    </div>
  );
};
