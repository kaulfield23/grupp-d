/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMovieAPI\": () => (/* binding */ loadMovieAPI)\n/* harmony export */ });\nconst loadMovieAPI = async () => {\r\n  try {\r\n    const response = await fetch(\"./src/data.json\");\r\n    const data = await response.json();\r\n    return data.movies;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/api.js?");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": () => (/* binding */ carousel)\n/* harmony export */ });\nfunction carousel() {\r\n  let carousel = document.querySelector(\".carousel\");\r\n  let flkty = new Flickity(carousel, {\r\n    imagesLoaded: true,\r\n    percentPosition: false,\r\n    wrapAround: true,\r\n    autoPlay: true,\r\n  });\r\n\r\n  let imgs = carousel.querySelectorAll(\".carousel-cell img\");\r\n  let docStyle = document.documentElement.style;\r\n  let transformProp =\r\n    typeof docStyle.transform == \"string\" ? \"transform\" : \"WebkitTransform\";\r\n\r\n  flkty.on(\"scroll\", function () {\r\n    flkty.slides.forEach(function (slide, i) {\r\n      let img = imgs[i];\r\n      let x = ((slide.target + flkty.x) * -1) / 3;\r\n      img.style[transformProp] = \"translateX(\" + x + \"px)\";\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/carousel.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ \"./src/js/carousel.js\");\n/* harmony import */ var _movieinfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieinfo.js */ \"./src/js/movieinfo.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n\r\n\r\n(0,_carousel__WEBPACK_IMPORTED_MODULE_1__.carousel)();\r\n\r\n(0,_movieinfo_js__WEBPACK_IMPORTED_MODULE_2__.checking2)();\r\n\r\n\r\n\r\n//console.log(loadMovieAPI());\r\n\r\nconst movieLoad = await (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.loadMovieAPI)();\r\n//console.log(\"Movieload: \"+movieLoad[0].title);\r\n //test();\r\n\r\n/*\r\nasync function test()\r\n{\r\n    const movieLoad2 = await loadMovieAPI();\r\nconsole.log(\"Movie load: \"+movieLoad2[0].title);\r\n};*/\r\n//export {movieLoad};\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://grupp-d/./src/js/main.js?");

/***/ }),

/***/ "./src/js/movieCards.js":
/*!******************************!*\
  !*** ./src/js/movieCards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movieCards\": () => (/* binding */ movieCards)\n/* harmony export */ });\nconst movieCards = (data) => {\r\n  const container = document.querySelector(\".movies\");\r\n\r\n  const card = document.createElement(\"div\");\r\n  card.setAttribute(\"class\", \"card\");\r\n  container.append(card);\r\n\r\n  const visuals = document.createElement(\"div\");\r\n  visuals.setAttribute(\"class\", \"visuals\");\r\n  card.append(visuals);\r\n\r\n  const thumbnail = document.createElement(\"img\");\r\n  thumbnail.setAttribute(\"class\", \"thumbnail\");\r\n  thumbnail.src = data.coverImg;\r\n  visuals.append(thumbnail);\r\n\r\n  /*   const trailer = document.createElement(\"a\");\r\n  trailer.setAttribute(\"class\", \"trailer\");\r\n  trailer.setAttribute(\"href\", data.trailer);\r\n  visuals.append(trailer); */\r\n\r\n  const info = document.createElement(\"div\");\r\n  info.setAttribute(\"class\", \"info\");\r\n  card.append(info);\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.setAttribute(\"class\", \"title\");\r\n  title.innerText = data.title;\r\n  info.append(title);\r\n\r\n  const specInfo = document.createElement(\"p\");\r\n  specInfo.setAttribute(\"class\", \"specInfo\");\r\n  specInfo.innerText = `${data.genres} | ${data.length} | ${data.age} år`;\r\n  info.append(specInfo);\r\n\r\n  /*   const rating = document.createElement(\"span\");\r\n  rating.setAttribute(\"class\", \"rating\");\r\n  rating.innerText = data.rating;\r\n  info.append(rating); */\r\n};\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/movieCards.js?");

/***/ }),

/***/ "./src/js/movieinfo.js":
/*!*****************************!*\
  !*** ./src/js/movieinfo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checking2\": () => (/* binding */ checking2)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n\r\n\r\n\r\nconst checking2 =() =>{\r\n    console.log('movie.js is loaded');\r\n} \r\n\r\n\r\nconst movieTarget = document.getElementById(\"movieContainer\");\r\nconst mainContent = document.getElementById(\"movies\");\r\nmovieTarget.addEventListener(\"click\", function(){\r\n            // window.alert(\"its working!\");\r\n           mainContent.innerText =\"\";\r\n           document.getElementById(\"carousel\").innerText= \"\";\r\n          movieInformation();\r\n          \r\n     });\r\n    \r\nfunction movieInformation(titel,description, genres, length, age, rating, coverImg, trailer, date, time) {\r\n\r\nconst movieInfoModal = document.createElement(\"div\");\r\nmovieInfoModal.setAttribute(\"id\", \"movieInfoWrapper\");\r\nmovieInfoModal.textContent =`Information about a movie`;\r\nmovieInfoModal.style.display = \"block\";\r\nmainContent.append(movieInfoModal);\r\n\r\nconst movieTitel = document.createElement(\"h1\");\r\nmovieTitel.setAttribute(\"id\", \"movieTitel\");\r\nmovieTitel.src = `${titel}`;\r\n// movieTitel.innerHTML =`${data.titel}`;\r\nmovieInfoModal.append(movieTitel); \r\n\r\n//nedan rad hämtar in info. Lägg in i renderade tagsen! (25 ex)\r\n(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loadMovieAPI)().then((movieData) => { console.log(\"AAage: \"+movieData[0].age); })\r\n/*hej();\r\nasync function  hej()\r\n{\r\n    //console.log(\"Movieload hej: \"+loadMovieAPI()[0].titel);\r\n    //loadMovieAPI().then(client => { console.log(client); });\r\n    //const h = loadMovieAPI().then(console.log(\"hopp\"));\r\n    //console.log(h[0].title);\r\n    loadMovieAPI().then((movieData) => { console.log(\"Titled: \"+movieData[0].age); });\r\n};*/\r\n\r\n//console.log(\"Movieload: \"+movieLoad[0].titel);\r\n\r\nconst movieCoverInfo = document.createElement(\"img\");\r\nmovieCoverInfo.setAttribute(\"id\", \"movieImgInfo\");\r\nmovieCoverInfo.src =`${coverImg}`;\r\nmovieInfoModal.append(movieCoverInfo);\r\n\r\nconst movieTrailer = document.createElement(\"src\");\r\nmovieTitel.setAttribute(\"id\", \"movieTrailer\");\r\nmovieTitel.textContent =`${trailer}`;\r\nmovieInfoModal.append(movieTrailer);\r\n\r\nconst movieInfoText= document.createElement(\"p1\");\r\nmovieInfoText.setAttribute(\"id\",\"movieInfoText\");\r\nmovieInfoText.textContent= `a most fascinationg text about the movie that Im about to fetch from JSON soon`;\r\nmovieInfoModal.append(movieInfoText);\r\n\r\nconst bookMovie = document.createElement(\"button\");\r\nbookMovie.setAttribute(\"id\", \"movieBooking-cta\");\r\nbookMovie.innerHTML =`Book Tickets`;\r\nmovieInfoModal.append(bookMovie);\r\n};\n\n//# sourceURL=webpack://grupp-d/./src/js/movieinfo.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checking\": () => (/* binding */ checking)\n/* harmony export */ });\n/* harmony import */ var _pages_moviepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/moviepage */ \"./src/js/pages/moviepage.js\");\n\r\n\r\nconst checking = () => {\r\n  console.log(\"navbar.js is loaded\");\r\n};\r\nconst movieBtn = document.querySelector(\".menuMovies\");\r\nmovieBtn.addEventListener(\"click\", () => {\r\n  (0,_pages_moviepage__WEBPACK_IMPORTED_MODULE_0__.loadMoviePage)();\r\n});\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/navbar.js?");

/***/ }),

/***/ "./src/js/pages/moviepage.js":
/*!***********************************!*\
  !*** ./src/js/pages/moviepage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMoviePage\": () => (/* binding */ loadMoviePage)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ \"./src/js/render.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.js */ \"./src/js/api.js\");\n\r\n\r\n\r\nconst loadMoviePage = async () => {\r\n  const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.loadMovieAPI)();\r\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderMovies)(data);\r\n};\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/pages/moviepage.js?");

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMovies\": () => (/* binding */ renderMovies)\n/* harmony export */ });\n/* harmony import */ var _movieCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieCards.js */ \"./src/js/movieCards.js\");\n\r\n\r\nconst renderMovies = (data) => {\r\n  const container = document.querySelector(\".movies\");\r\n  container.innerHTML = \"\";\r\n\r\n  data.forEach((item) => {\r\n    (0,_movieCards_js__WEBPACK_IMPORTED_MODULE_0__.movieCards)(item);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;