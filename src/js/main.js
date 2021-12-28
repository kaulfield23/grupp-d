import { carousel } from "./carousel";
import { renderCinemaCommercial } from "./commercial";
import { navbarResponsive } from "./navbar";
import { availableMovies } from "./availableMovies";

(() => {
  carousel();
  navbarResponsive();
  renderCinemaCommercial();
  availableMovies();
})();
