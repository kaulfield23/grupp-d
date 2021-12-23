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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMovieAPI\": () => (/* binding */ loadMovieAPI)\n/* harmony export */ });\nconst loadMovieAPI = async () => {\n  try {\n    const response = await fetch(\"./src/data.json\");\n    const data = await response.json();\n    return data.movies;\n  } catch (error) {\n    console.log(error);\n  }\n};\n\n\n//# sourceURL=webpack://grupp-d/./src/js/api.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/js/navbar.js\");\n\nconsole.log((0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.checking)());\n\n\n//# sourceURL=webpack://grupp-d/./src/js/main.js?");

/***/ }),

/***/ "./src/js/movieCards.js":
/*!******************************!*\
  !*** ./src/js/movieCards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movieCards\": () => (/* binding */ movieCards)\n/* harmony export */ });\nconst movieCards = (data) => {\n  const container = document.querySelector(\".movies\");\n\n  const card = document.createElement(\"div\");\n  card.setAttribute(\"class\", \"card\");\n  container.append(card);\n\n  const visuals = document.createElement(\"div\");\n  visuals.setAttribute(\"class\", \"visuals\");\n  card.append(visuals);\n\n  const thumbnail = document.createElement(\"img\");\n  thumbnail.setAttribute(\"class\", \"thumbnail\");\n  thumbnail.src = data.coverImg;\n  visuals.append(thumbnail);\n\n  /*   const trailer = document.createElement(\"a\");\n  trailer.setAttribute(\"class\", \"trailer\");\n  trailer.setAttribute(\"href\", data.trailer);\n  visuals.append(trailer); */\n\n  const info = document.createElement(\"div\");\n  info.setAttribute(\"class\", \"info\");\n  card.append(info);\n\n  const title = document.createElement(\"h1\");\n  title.setAttribute(\"class\", \"title\");\n  title.innerText = data.title;\n  info.append(title);\n\n  const specInfo = document.createElement(\"p\");\n  specInfo.setAttribute(\"class\", \"specInfo\");\n  specInfo.innerText = `${data.genres} | ${data.length} | ${data.age} år`;\n  info.append(specInfo);\n\n  /*   const rating = document.createElement(\"span\");\n  rating.setAttribute(\"class\", \"rating\");\n  rating.innerText = data.rating;\n  info.append(rating); */\n};\n\n\n//# sourceURL=webpack://grupp-d/./src/js/movieCards.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checking\": () => (/* binding */ checking)\n/* harmony export */ });\n/* harmony import */ var _pages_moviepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/moviepage.js */ \"./src/js/pages/moviepage.js\");\n\n\nconst checking = () => {\n  console.log(\"navbar.js is loaded\");\n};\nconst filmerBtn = document.querySelector(\".menuMovies\");\nfilmerBtn.addEventListener(\"click\", () => {\n  (0,_pages_moviepage_js__WEBPACK_IMPORTED_MODULE_0__.loadMoviePage)();\n});\n\n\n//# sourceURL=webpack://grupp-d/./src/js/navbar.js?");

/***/ }),

/***/ "./src/js/pages/moviepage.js":
/*!***********************************!*\
  !*** ./src/js/pages/moviepage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMoviePage\": () => (/* binding */ loadMoviePage)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ \"./src/js/render.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.js */ \"./src/js/api.js\");\n\n\n\nconst loadMoviePage = async () => {\n  const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.loadMovieAPI)();\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderMovies)(data);\n};\n\n\n//# sourceURL=webpack://grupp-d/./src/js/pages/moviepage.js?");

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMovies\": () => (/* binding */ renderMovies)\n/* harmony export */ });\n/* harmony import */ var _movieCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieCards.js */ \"./src/js/movieCards.js\");\n\n\nconst renderMovies = (data) => {\n  const container = document.querySelector(\".movies\");\n  container.innerHTML = \"\";\n\n  data.forEach((item) => {\n    (0,_movieCards_js__WEBPACK_IMPORTED_MODULE_0__.movieCards)(item);\n  });\n};\n\n\n//# sourceURL=webpack://grupp-d/./src/js/render.js?");

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