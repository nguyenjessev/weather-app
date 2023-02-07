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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherFetcher */ \"./src/weatherFetcher.js\");\n\n\n(async () => {\n  const locationSearch = document.querySelector('#location-search');\n\n  const loadWeatherData = async () => {\n    try {\n      const query = locationSearch.value || 'Fort Wayne';\n      const locationData = await _weatherFetcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchLocationData(query);\n      const weatherData = await _weatherFetcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchWeatherData(locationData);\n\n      weatherData.name = locationData.name;\n\n      return weatherData;\n    } catch (error) {\n      throw new Error(error);\n    }\n  };\n\n  const updateWeatherDisplay = (weatherData) => {\n    try {\n      const currentLocation = weatherData.name;\n      const currentTemp = weatherData.main.temp;\n      const currentFeelsLikeTemp = weatherData.main.feels_like;\n\n      document.querySelector('.current-location').textContent = currentLocation;\n      document.querySelector('.current-temperature').textContent =\n        Math.round(currentTemp);\n      document.querySelector('.feels-like-temperature').textContent =\n        Math.round(currentFeelsLikeTemp);\n\n      return true;\n    } catch (error) {\n      throw new Error(error);\n    }\n  };\n\n  let currentWeather = await loadWeatherData();\n\n  updateWeatherDisplay(currentWeather);\n\n  document\n    .querySelector('.search-controls')\n    .addEventListener('submit', async (event) => {\n      event.preventDefault();\n      currentWeather = await loadWeatherData();\n      updateWeatherDisplay(currentWeather);\n    });\n})();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherFetcher.js":
/*!*******************************!*\
  !*** ./src/weatherFetcher.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiKey = '505a95affb4abe534b67ce3708d862f1';\n\nconst fetchLocationData = async (query) => {\n  try {\n    const requestURL = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${apiKey}`;\n    const response = await fetch(requestURL);\n    const data = (await response.json())[0];\n    const latitude = data.lat;\n    const longitude = data.lon;\n    let { name } = data;\n\n    if (data.state) {\n      name += `, ${data.state}`;\n    }\n\n    return {\n      latitude,\n      longitude,\n      name,\n    };\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\nconst fetchWeatherData = async (locationData) => {\n  try {\n    const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.latitude}&lon=${locationData.longitude}&units=imperial&appid=${apiKey}`;\n    const response = await fetch(requestURL);\n\n    return await response.json();\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  fetchLocationData,\n  fetchWeatherData,\n});\n\n\n//# sourceURL=webpack://weather-app/./src/weatherFetcher.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;