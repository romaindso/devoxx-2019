import gamesList from "./data/games-list";
import gamesDetails from "./data/games-details";
import gamesCharacters from "./data/games-characters";

export const fetchGameList = (delay = localStorage.getItem("delay")) => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(gamesList);
    }, delay);
  });
};

export const fetchGameDetails = (id, delay = localStorage.getItem("delay")) => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(gamesDetails[id]);
    }, delay);
  });
};

export const fetchGameCharacters = (
  id,
  delay = localStorage.getItem("delay")
) => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(gamesCharacters[id].characters);
    }, delay);
  });
};
