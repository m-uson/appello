/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 91:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "js/script.js";

/***/ }),

/***/ 494:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/logo.[contentcash].png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(91);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(494), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(551), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Roboto&display=swap\" rel=\"stylesheet\"/> <title>Appello</title> </head> <body> <header class=\"bg-c-0E absolute w-[100%] left-0 top-0 z-20\"> <div data-aos=\"zoom-in-down\" class=\"container py-[45px]\"> <nav class=\"flex justify-between items-center\"> <a class=\"text-[24px] font-bold leading-8 relative z-50\" href=\"#\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"/> </a> <div id=\"burger\" class=\"hidden sm:block cursor-pointer h-6 relative z-50\"> <span id=\"one\" class=\"block min-w-[30px] min-h-[2px] bg-white mb-1\"></span> <span id=\"two\" class=\"block min-w-[30px] min-h-[2px] bg-white mb-1\"></span> <span id=\"tree\" class=\"block min-w-[30px] min-h-[2px] bg-white\"></span> </div> <ul class=\"flex sm:hidden\"> <li class=\"mr-[40px]\"> <a class=\"text-[13px] text-white\" href=\"#\">Home</a> </li> <li class=\"mr-[40px]\"> <a class=\"text-[13px] text-white\" href=\"#\">Portfolio</a> </li> <li class=\"mr-[40px]\"> <a class=\"text-[13px] text-white\" href=\"#\">Process</a> </li> <li class=\"mr-[40px]\"> <a class=\"text-[13px] text-white\" href=\"#\">Team</a> </li> <li> <a class=\"text-[13px] text-white\" href=\"#\">Resources</a> </li> </ul> </nav> <nav id=\"nav-active\" class=\"active-block bg-c-0E translateO z-30\"> <ul class=\"mt-[105px] ml-[8px] font-bold\"> <li class=\"mb-2 ml-[4px]\"> <a class=\"text-[18px] text-white\" href=\"#\">Home</a> </li> <li class=\"mb-2 ml-[4px]\"> <a class=\"text-[18px] text-white\" href=\"#\">Portfolio</a> </li> <li class=\"mb-2 ml-[4px]\"> <a class=\"text-[18px] text-white\" href=\"#\">Process</a> </li> <li class=\"mb-2 ml-[4px]\"> <a class=\"text-[18px] text-white\" href=\"#\">Team</a> </li> <li class=\"ml-[4px]\"> <a class=\"text-[18px] text-white\" href=\"#\">Resources</a> </li> </ul> </nav> </div> </header> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"><" + "/script> </body> </html> ";
// Exports
/* harmony default export */ const src = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/index.js


})();

/******/ })()
;