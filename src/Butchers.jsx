import * as data from "./db/butchers.json";
import { Meat } from "./Meat.jsx";

export const Butchers = ({ count, onClick }) => {
  const cardSize = "18rem";
  const { butchers } = data;

  const listOfButchers = butchers.map((butcher) => {
    const getSelectionMeats = ({ name, quantity, price }) => (
      <Meat key={name} name={name} quantity={quantity} price={price} />
    );
    const meats = butcher.meats.map(getSelectionMeats);

    return (
      <div className="col-sm">
        <div key={butcher.id} className="card" style={{ width: cardSize }}>
          <img className="card-img-top" src={butcher.imageUrl} />
          <div className="card-body">
            <h5 className="card-title">{butcher.name}</h5>
            {meats}
            <button className="btn btn-primary" onClick={onClick}>
              Add to basket {count}
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2>Butchers</h2>
      <div className="container">
        <div className="row">{listOfButchers}</div>
      </div>
    </div>
  );
};
