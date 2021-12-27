import { carousel } from "./carousel";
import { renderCinemaCommercial } from "./commercial";
import { navbarResponsive } from "./navbar";

window.onload = function () {
  carousel();
  navbarResponsive();
  renderCinemaCommercial();
};
