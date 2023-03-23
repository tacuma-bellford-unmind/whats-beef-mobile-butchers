import { Butcher } from "./Butcher.jsx";
import { getButchers } from "./db/getButchers.js";
import { Link, useLoaderData } from "react-router-dom";
import { Card } from "./Card.jsx";
import { Meat } from "./Meat.jsx";

export function loader() {
  const butchers = getButchers();
  return butchers;
}

export const ButchersList = () => {
  const butchers = useLoaderData();

  return (
    <div>
      <h2>Butchers</h2>
      <div className="container">
        {butchers.map((butcher) => (
          <>
            <div className="row">
              <Link to={`butchers/${butcher.id}`}>
                <Butcher
                  key={butcher.id}
                  butcherId={butcher.id}
                  butcherName={butcher.name}
                />
              </Link>
              {butcher.meats.map(({ name, inStock, price, imageUrl }) => (
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
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
