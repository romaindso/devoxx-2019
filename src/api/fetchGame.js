import details from "./data/games-details";
import { delay } from "./constants";

export const fetchGame = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(details[id]);
    }, delay);
  });
};
