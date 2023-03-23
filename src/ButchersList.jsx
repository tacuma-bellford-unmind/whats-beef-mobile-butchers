import * as data from "./db/butchers.json";
import { Butcher } from "./Butcher.jsx";

export const ButchersList = () => {
  const { butchers } = data;

  const listOfButchers = butchers.map(({ id, name, meats }) => {
    return (
      <div className="row">
        <Butcher key={id} butcherName={name} selectionOfMeats={meats} />
      </div>
    );
  });

  return (
    <div>
      <h2>Butchers</h2>
      <div className="container">{listOfButchers}</div>
    </div>
  );
};
