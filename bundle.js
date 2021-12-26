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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ \"./src/js/carousel.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.onload = function() {\r\n    (0,_carousel__WEBPACK_IMPORTED_MODULE_0__.carousel)();\r\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.navbarResponsive)();\r\n};\n\n//# sourceURL=webpack://grupp-d/./src/js/main.js?");

/***/ }),

/***/ "./src/js/movieCards.js":
/*!******************************!*\
  !*** ./src/js/movieCards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movieCards\": () => (/* binding */ movieCards)\n/* harmony export */ });\nconst movieCards = (data) => {\r\n  const container = document.querySelector(\".movies\");\r\n\r\n  const card = document.createElement(\"div\");\r\n  card.setAttribute(\"class\", \"card\");\r\n  container.append(card);\r\n\r\n  const visuals = document.createElement(\"div\");\r\n  visuals.setAttribute(\"class\", \"visuals\");\r\n  card.append(visuals);\r\n\r\n  const thumbnail = document.createElement(\"img\");\r\n  thumbnail.setAttribute(\"class\", \"thumbnail\");\r\n  thumbnail.src = data.coverImg;\r\n  visuals.append(thumbnail);\r\n\r\n  /*   const trailer = document.createElement(\"a\");\r\n  trailer.setAttribute(\"class\", \"trailer\");\r\n  trailer.setAttribute(\"href\", data.trailer);\r\n  visuals.append(trailer); */\r\n\r\n  const info = document.createElement(\"div\");\r\n  info.setAttribute(\"class\", \"info\");\r\n  card.append(info);\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.setAttribute(\"class\", \"title\");\r\n  title.innerText = data.title;\r\n  info.append(title);\r\n\r\n  const specInfo = document.createElement(\"p\");\r\n  specInfo.setAttribute(\"class\", \"specInfo\");\r\n  specInfo.innerText = `${data.genres} | ${data.length} | ${data.age} år`;\r\n  info.append(specInfo);\r\n\r\n  /*   const rating = document.createElement(\"span\");\r\n  rating.setAttribute(\"class\", \"rating\");\r\n  rating.innerText = data.rating;\r\n  info.append(rating); */\r\n};\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/movieCards.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checking\": () => (/* binding */ checking),\n/* harmony export */   \"navbarResponsive\": () => (/* binding */ navbarResponsive)\n/* harmony export */ });\n/* harmony import */ var _pages_moviepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/moviepage */ \"./src/js/pages/moviepage.js\");\n\r\n\r\nconst checking = () => {\r\n    console.log(\"navbar.js is loaded\");\r\n};\r\nconst movieBtn = document.querySelector(\".menuMovies\");\r\nmovieBtn.addEventListener(\"click\", () => {\r\n    (0,_pages_moviepage__WEBPACK_IMPORTED_MODULE_0__.loadMoviePage)();\r\n});\r\n\r\nconst navbarResponsive = () => {\r\n    const hamburger = document.querySelector('.hamburger');\r\n    hamburger.addEventListener('click', () => {\r\n        let navbar = document.querySelector('#navbar');\r\n        if (navbar.className === \"topnav\") {\r\n            navbar.className += \" responsive\";\r\n        } else {\r\n            navbar.className = \"topnav\"\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://grupp-d/./src/js/navbar.js?");

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