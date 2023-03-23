import { Butcher } from "./Butcher.jsx";
import { getButchers } from "./db/getButchers.js";
import { useLoaderData } from "react-router-dom";

export function loader() {
  const butchers = getButchers();
  return butchers;
}

export const ButchersList = () => {
  const butchers = useLoaderData();

  const listOfButchers = butchers.map(({ id, name, meats }) => {
    return (
      <div className="row">
        <Butcher
          key={id}
          butcherId={id}
          butcherName={name}
          selectionOfMeats={meats}
        />
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
