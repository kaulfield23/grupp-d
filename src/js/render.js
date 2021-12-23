import { movieCards } from "./movieCards.js";

export const renderMovies = (data) => {
  const container = document.querySelector(".movies");
  container.innerHTML = "";

  data.forEach((item) => {
    movieCards(item);
  });
};
