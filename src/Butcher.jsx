import { Card } from "./Card.jsx";
import { Meat } from "./Meat.jsx";

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
        <a href="#">{butcherName}</a>
      </h1>
      {meatSelection}
    </div>
  );
};