import { loadMoviePage } from "./pages/moviepage";

export const checking = () => {
  console.log("navbar.js is loaded");
};
const filmerBtn = document.querySelector(".menuMovies");
filmerBtn.addEventListener("click", () => {
  loadMoviePage();
});
