import { checking } from "./navbar";
import { carousel } from "./carousel";
carousel();
import {checking2} from './movieinfo.js';
checking2();

import { loadMovieAPI } from "./api.js";

//console.log(loadMovieAPI());

const movieLoad = await loadMovieAPI();
//console.log("Movieload: "+movieLoad[0].title);
 //test();

/*
async function test()
{
    const movieLoad2 = await loadMovieAPI();
console.log("Movie load: "+movieLoad2[0].title);
};*/
//export {movieLoad};