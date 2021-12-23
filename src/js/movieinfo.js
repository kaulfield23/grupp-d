
import { loadMovieAPI } from "./api.js";

export const checking2 =() =>{
    console.log('movie.js is loaded');
} 


const movieTarget = document.getElementById("movieContainer");
const mainContent = document.getElementById("movies");
movieTarget.addEventListener("click", function(){
            // window.alert("its working!");
           mainContent.innerText ="";
           document.getElementById("carousel").innerText= "";
          movieInformation();
          
     });
    
function movieInformation(titel,description, genres, length, age, rating, coverImg, trailer, date, time) {

const movieInfoModal = document.createElement("div");
movieInfoModal.setAttribute("id", "movieInfoWrapper");
movieInfoModal.textContent =`Information about a movie`;
movieInfoModal.style.display = "block";
mainContent.append(movieInfoModal);

const movieTitel = document.createElement("h1");
movieTitel.setAttribute("id", "movieTitel");
movieTitel.src = `${titel}`;
// movieTitel.innerHTML =`${data.titel}`;
movieInfoModal.append(movieTitel); 

//nedan rad hämtar in info. Lägg in i renderade tagsen! (25 ex)
loadMovieAPI().then((movieData) => { console.log("AAage: "+movieData[0].age); })
/*hej();
async function  hej()
{
    //console.log("Movieload hej: "+loadMovieAPI()[0].titel);
    //loadMovieAPI().then(client => { console.log(client); });
    //const h = loadMovieAPI().then(console.log("hopp"));
    //console.log(h[0].title);
    loadMovieAPI().then((movieData) => { console.log("Titled: "+movieData[0].age); });
};*/

//console.log("Movieload: "+movieLoad[0].titel);

const movieCoverInfo = document.createElement("img");
movieCoverInfo.setAttribute("id", "movieImgInfo");
movieCoverInfo.src =`${coverImg}`;
movieInfoModal.append(movieCoverInfo);

const movieTrailer = document.createElement("src");
movieTitel.setAttribute("id", "movieTrailer");
movieTitel.textContent =`${trailer}`;
movieInfoModal.append(movieTrailer);

const movieInfoText= document.createElement("p1");
movieInfoText.setAttribute("id","movieInfoText");
movieInfoText.textContent= `a most fascinationg text about the movie that Im about to fetch from JSON soon`;
movieInfoModal.append(movieInfoText);

const bookMovie = document.createElement("button");
bookMovie.setAttribute("id", "movieBooking-cta");
bookMovie.innerHTML =`Book Tickets`;
movieInfoModal.append(bookMovie);
};