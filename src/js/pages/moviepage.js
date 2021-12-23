import { renderMovies } from "../render.js";
import { loadMovieAPI } from "../api.js";

export const loadMoviePage = async () => {
  const data = await loadMovieAPI();
  renderMovies(data);
};
