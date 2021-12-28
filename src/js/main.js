import { carousel } from "./carousel";
import { renderCinemaCommercial } from "./commercial";
import { navbarResponsive } from "./navbar";
import { availableMovies } from "./availableMovies";
import { renderBanners } from "./pages/movieBanners";

(() => {
  carousel();
  navbarResponsive();
  renderCinemaCommercial();
  availableMovies();
  renderBanners();
})();
