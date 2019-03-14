import details from "./data/games-details";
import game from "./data/games-characters";
import { delay } from "./constants";

export const fetchGameDetails = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(details[id]);
    }, delay);
  });
};

export const fetchGameCharacters = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(game[id].characters);
    }, delay);
  });
};
