import * as data from "./butchers.json";

export const getMeatSelection = () => {
  const { butchers } = data;
  const meatSelection = butchers.map((butcher) => butcher.meats);
  return { meatSelection };
};
