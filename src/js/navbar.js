import { loadMoviePage } from "./pages/moviepage";

export const checking = () => {
  console.log("navbar.js is loaded");
};
const movieBtn = document.querySelector(".menuMovies");
movieBtn.addEventListener("click", () => {
  loadMoviePage();
});
