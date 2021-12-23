import { loadMoviePage } from "./pages/moviepage";

export const checking = () => {
    console.log("navbar.js is loaded");
};
const movieBtn = document.querySelector(".menuMovies");
movieBtn.addEventListener("click", () => {
    loadMoviePage();
});

export const navbarResponsive = () => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        let navbar = document.querySelector('#navbar');
        if (navbar.className === "topnav") {
            navbar.className += " responsive";
        } else {
            navbar.className = "topnav"
        }
    })
}