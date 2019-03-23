import gamesList from "./data/games-list";
import gamesDetails from "./data/games-details";
import gamesCharacters from "./data/games-characters";
import gamesVideos from "./data/games-videos";
import { delay } from "./constants";

export const fetchGameList = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(gamesList);
    }, delay);
  });
};

export const fetchGameDetails = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(gamesDetails[id]);
    }, delay);
  });
};

export const fetchGameCharacters = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(gamesCharacters[id].characters);
    }, delay);
  });
};

export const fetchGameVideos = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(gamesVideos[id].videos);
    }, delay);
  });
};
