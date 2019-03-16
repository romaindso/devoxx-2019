import details from "./data/games-details";
import gameCharacters from "./data/games-characters";
import gameVideos from "./data/games-videos";
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
      return resolve(gameCharacters[id].characters);
    }, delay);
  });
};

export const fetchGameVideos = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(gameVideos[id].videos);
    }, delay);
  });
};
