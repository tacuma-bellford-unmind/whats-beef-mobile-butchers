import { getButchers } from "./db/getButchers.js";

export function loader() {
  const butchers = getButchers();
  return butchers;
}

export const Butcher = ({ butcherName }) => (
  <div>
    <h1>{butcherName}</h1>
  </div>
);
