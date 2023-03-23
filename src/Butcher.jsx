import { Card } from "./Card.jsx";
import { Meat } from "./Meat.jsx";
import { Link, useLoaderData } from "react-router-dom";
import { getButchers } from "./db/getButchers.js";

export function loader() {
  const butchers = getButchers();
  const meats = butchers.map((butcher) => butcher.meats);
  return meats;
}

export const Butcher = ({ butcherId, butcherName }) => {
  const meats = useLoaderData();

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

  const meatSelection = meats.map(getSelectionMeats);

  return (
    <div>
      <h1>
        <Link to={`butchers/${butcherId}`}>{butcherName}</Link>
      </h1>
      {meatSelection}
    </div>
  );
};
