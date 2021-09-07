/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n  padding-bottom: 50px;\n}\n\nheader,\nnav,\nfooter {\n  display: flex;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  height: 120px;\n}\n\nnav {\n  width: 90%;\n  margin: 0 auto;\n}\n\nbutton {\n  width: 40%;\n  margin: 15px auto;\n  padding: 7px 10px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #320064;\n  color: white;\n  transform: translateY(-2px);\n  transition: all 300ms ease-in-out;\n}\n\n.page-img {\n  width: 80px;\n}\n\n.page-img img {\n  width: 100%;\n}\n\n.card ul,\n.nav-links {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-links li {\n  margin-right: 10px;\n}\n\n.nav-links li,\n.card ul li {\n  display: inline-block;\n  list-style: none;\n}\n\n.card ul li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin: 0 10px;\n}\n\n/* Cards Section Styling */\n\n#card-section {\n  display: grid;\n  gap: 25px;\n  width: 80%;\n  margin: 40px auto;\n  text-align: center;\n}\n\n.card {\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  border-radius: 7px;\n}\n\n.card img {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.card h1 {\n  font-size: 35px;\n}\n\n/* Footer Styling */\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  height: 50px;\n  left: 10%;\n}\n\nfooter a,\n.nav-links li a {\n  text-decoration: none;\n  color: #333;\n  font-size: 15px;\n  transition: 300ms ease-in-out;\n}\n\nfooter a:hover,\n.nav-links li a:hover {\n  border-bottom: 1px solid #333;\n  opacity: 0.7;\n}\n\n/* Temporary Style for Modals */\n\n.invisible {\n  display: none !important;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333d;\n}\n\n.modal h4 {\n  margin-top: 20px;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  height: 90vh;\n  padding-bottom: 20px;\n  margin: 5vh 20vw;\n  border-radius: 15px;\n  overflow-y: scroll;\n}\n\n.img-frame {\n  position: relative;\n  background-color: #333;\n  width: 100%;\n}\n\n.modal-cross {\n  position: absolute;\n  top: 10%;\n  right: 7.5%;\n  font-size: 40px;\n  color: #fb8825;\n}\n\n.inner-frame {\n  background-color: white;\n  width: 250px;\n  margin: auto;\n  border: 2px solid #333;\n}\n\n.modal-image {\n  display: block;\n  width: 250px;\n  margin: auto;\n}\n\n#pkm-name {\n  font-size: 32px;\n}\n\n#type-list {\n  display: flex;\n  gap: 50px;\n  list-style-type: none;\n}\n\n.add-comment {\n  display: flex;\n  flex-direction: column;\n}\n\n.modal input,\n.modal textarea {\n  margin-top: 20px;\n}\n\n/* -------------------------- */\n\n@media all and (min-width: 768px) {\n  header {\n    height: 180px;\n  }\n\n  nav {\n    width: 80%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 120px;\n  }\n\n  .nav-links li {\n    margin-right: 40px;\n  }\n\n  .nav-links li a {\n    font-size: 18px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer {\n    width: 80%;\n    left: 10%;\n  }\n}\n\n@media all and (min-width: 1025px) {\n  nav {\n    width: 70%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 160px;\n  }\n\n  .nav-links li {\n    margin-right: 60px;\n  }\n\n  .nav-links li a {\n    font-size: 20px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .card img {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  footer {\n    width: 70%;\n    left: 15%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;;;EAGE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;AAChB;;AAEA,0BAA0B;;AAE1B;EACE,aAAa;EACb,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;EAC9C,WAAW;EACX,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA,mBAAmB;;AAEnB;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,SAAS;AACX;;AAEA;;EAEE,qBAAqB;EACrB,WAAW;EACX,eAAe;EACf,6BAA6B;AAC/B;;AAEA;;EAEE,6BAA6B;EAC7B,YAAY;AACd;;AAEA,+BAA+B;;AAE/B;EACE,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA,+BAA+B;;AAE/B;EACE;IACE,aAAa;EACf;;EAEA;IACE,UAAU;IACV,cAAc;IACd,SAAS;EACX;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,UAAU;IACV,SAAS;EACX;AACF;;AAEA;EACE;IACE,UAAU;IACV,cAAc;IACd,SAAS;EACX;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,UAAU;IACV,cAAc;EAChB;;EAEA;IACE,UAAU;IACV,SAAS;EACX;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n  padding-bottom: 50px;\n}\n\nheader,\nnav,\nfooter {\n  display: flex;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  height: 120px;\n}\n\nnav {\n  width: 90%;\n  margin: 0 auto;\n}\n\nbutton {\n  width: 40%;\n  margin: 15px auto;\n  padding: 7px 10px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #320064;\n  color: white;\n  transform: translateY(-2px);\n  transition: all 300ms ease-in-out;\n}\n\n.page-img {\n  width: 80px;\n}\n\n.page-img img {\n  width: 100%;\n}\n\n.card ul,\n.nav-links {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-links li {\n  margin-right: 10px;\n}\n\n.nav-links li,\n.card ul li {\n  display: inline-block;\n  list-style: none;\n}\n\n.card ul li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin: 0 10px;\n}\n\n/* Cards Section Styling */\n\n#card-section {\n  display: grid;\n  gap: 25px;\n  width: 80%;\n  margin: 40px auto;\n  text-align: center;\n}\n\n.card {\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  border-radius: 7px;\n}\n\n.card img {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.card h1 {\n  font-size: 35px;\n}\n\n/* Footer Styling */\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  height: 50px;\n  left: 10%;\n}\n\nfooter a,\n.nav-links li a {\n  text-decoration: none;\n  color: #333;\n  font-size: 15px;\n  transition: 300ms ease-in-out;\n}\n\nfooter a:hover,\n.nav-links li a:hover {\n  border-bottom: 1px solid #333;\n  opacity: 0.7;\n}\n\n/* Temporary Style for Modals */\n\n.invisible {\n  display: none !important;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333d;\n}\n\n.modal h4 {\n  margin-top: 20px;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  height: 90vh;\n  padding-bottom: 20px;\n  margin: 5vh 20vw;\n  border-radius: 15px;\n  overflow-y: scroll;\n}\n\n.img-frame {\n  position: relative;\n  background-color: #333;\n  width: 100%;\n}\n\n.modal-cross {\n  position: absolute;\n  top: 10%;\n  right: 7.5%;\n  font-size: 40px;\n  color: #fb8825;\n}\n\n.inner-frame {\n  background-color: white;\n  width: 250px;\n  margin: auto;\n  border: 2px solid #333;\n}\n\n.modal-image {\n  display: block;\n  width: 250px;\n  margin: auto;\n}\n\n#pkm-name {\n  font-size: 32px;\n}\n\n#type-list {\n  display: flex;\n  gap: 50px;\n  list-style-type: none;\n}\n\n.add-comment {\n  display: flex;\n  flex-direction: column;\n}\n\n.modal input,\n.modal textarea {\n  margin-top: 20px;\n}\n\n/* -------------------------- */\n\n@media all and (min-width: 768px) {\n  header {\n    height: 180px;\n  }\n\n  nav {\n    width: 80%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 120px;\n  }\n\n  .nav-links li {\n    margin-right: 40px;\n  }\n\n  .nav-links li a {\n    font-size: 18px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer {\n    width: 80%;\n    left: 10%;\n  }\n}\n\n@media all and (min-width: 1025px) {\n  nav {\n    width: 70%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 160px;\n  }\n\n  .nav-links li {\n    margin-right: 60px;\n  }\n\n  .nav-links li a {\n    font-size: 20px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .card img {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  footer {\n    width: 70%;\n    left: 15%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayPokes.js":
/*!*****************************!*\
  !*** ./src/displayPokes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayPokemon = (pokemon) => {
  const cardSection = document.getElementById('card-section');
  const pokemonTypes = pokemon.types;
  const pokemonImage = pokemon.sprites.other;

  let displayHTML = `<li class="card">
  <img src="${pokemonImage['official-artwork'].front_default}" alt="Pokemon">
  <h1>${pokemon.name}</h1>
  <ul>`;
  for (let i = 0; i < pokemonTypes.length; i += 1) {
    displayHTML += `<li>${pokemonTypes[i].type.name}</li>`;
  }
  displayHTML += `</ul>
  <button type="submit">Comment</button>
</li>`;

  cardSection.innerHTML += displayHTML;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPokemon);


/***/ }),

/***/ "./src/fetchApi.js":
/*!*************************!*\
  !*** ./src/fetchApi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayPokes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayPokes.js */ "./src/displayPokes.js");
// eslint-disable-next-line import/no-cycle


const fetchEachPoke = (pokemon) => {
  const pokemonUrl = pokemon.url;
  fetch(pokemonUrl)
    .then((response) => response.json())
    .then((pokemonData) => {
      (0,_displayPokes_js__WEBPACK_IMPORTED_MODULE_0__.default)(pokemonData);
    });
};

const fetchApi = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
    .then((response) => response.json())
    .then((Allpokes) => {
      Allpokes.results.forEach((poke) => {
        fetchEachPoke(poke);
      });
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchApi);

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
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _fetchApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchApi.js */ "./src/fetchApi.js");



window.onload = _fetchApi_js__WEBPACK_IMPORTED_MODULE_1__.default;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkI5QjtBQUMrQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQWM7QUFDcEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDdEJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNnQjs7QUFFckMsZ0JBQWdCLGlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvZGlzcGxheVBva2VzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2ZldGNoQXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbn1cXG5cXG5oZWFkZXIsXFxubmF2LFxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XFxuXFxubmF2IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IDE1cHggYXV0bztcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMDA2NDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBhZ2UtaW1nIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4ucGFnZS1pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZCB1bCxcXG4ubmF2LWxpbmtzIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5uYXYtbGlua3MgbGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubmF2LWxpbmtzIGxpLFxcbi5jYXJkIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5jYXJkIHVsIGxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi8qIENhcmRzIFNlY3Rpb24gU3R5bGluZyAqL1xcblxcbiNjYXJkLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMjVweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDQwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQge1xcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5jYXJkIGltZyB7XFxuICB3aWR0aDogNjAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jYXJkIGgxIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxpbmcgKi9cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGxlZnQ6IDEwJTtcXG59XFxuXFxuZm9vdGVyIGEsXFxuLm5hdi1saW5rcyBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyLFxcbi5uYXYtbGlua3MgbGkgYTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLyogVGVtcG9yYXJ5IFN0eWxlIGZvciBNb2RhbHMgKi9cXG5cXG4uaW52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzM2Q7XFxufVxcblxcbi5tb2RhbCBoNCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luOiA1dmggMjB2dztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5pbWctZnJhbWUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kYWwtY3Jvc3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMCU7XFxuICByaWdodDogNy41JTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGNvbG9yOiAjZmI4ODI1O1xcbn1cXG5cXG4uaW5uZXItZnJhbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xcbn1cXG5cXG4ubW9kYWwtaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbiNwa20tbmFtZSB7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbiN0eXBlLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNTBweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmFkZC1jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwgaW5wdXQsXFxuLm1vZGFsIHRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZ2FwOiA0MHB4O1xcbiAgfVxcblxcbiAgLnBhZ2UtaW1nIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyBsaSB7XFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkgYSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG5cXG4gICNjYXJkLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbGVmdDogMTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcXG4gIG5hdiB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBnYXA6IDQwcHg7XFxuICB9XFxuXFxuICAucGFnZS1pbWcge1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyBsaSBhIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcblxcbiAgI2NhcmQtc2VjdGlvbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB9XFxuXFxuICAuY2FyZCBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGxlZnQ6IDE1JTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixX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QUNWLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuXFxuaGVhZGVyLFxcbm5hdixcXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcblxcbm5hdiB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjAwNjQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wYWdlLWltZyB7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuLnBhZ2UtaW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQgdWwsXFxuLm5hdi1saW5rcyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2LWxpbmtzIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLm5hdi1saW5rcyBsaSxcXG4uY2FyZCB1bCBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY2FyZCB1bCBsaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4vKiBDYXJkcyBTZWN0aW9uIFN0eWxpbmcgKi9cXG5cXG4jY2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDI1cHg7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiA0MHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4uY2FyZCBpbWcge1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2FyZCBoMSB7XFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsaW5nICovXFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBsZWZ0OiAxMCU7XFxufVxcblxcbmZvb3RlciBhLFxcbi5uYXYtbGlua3MgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlcixcXG4ubmF2LWxpbmtzIGxpIGE6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi8qIFRlbXBvcmFyeSBTdHlsZSBmb3IgTW9kYWxzICovXFxuXFxuLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzNkO1xcbn1cXG5cXG4ubW9kYWwgaDQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbjogNXZoIDIwdnc7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uaW1nLWZyYW1lIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vZGFsLWNyb3NzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAlO1xcbiAgcmlnaHQ6IDcuNSU7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBjb2xvcjogI2ZiODgyNTtcXG59XFxuXFxuLmlubmVyLWZyYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcXG59XFxuXFxuLm1vZGFsLWltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jcGttLW5hbWUge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4jdHlwZS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUwcHg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5hZGQtY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1vZGFsIGlucHV0LFxcbi5tb2RhbCB0ZXh0YXJlYSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gIC5wYWdlLWltZyB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIGEge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAjY2FyZC1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxuICBuYXYge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZ2FwOiA0MHB4O1xcbiAgfVxcblxcbiAgLnBhZ2UtaW1nIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyBsaSB7XFxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkgYSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gICNjYXJkLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcblxcbiAgLmNhcmQgaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBsZWZ0OiAxNSU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkaXNwbGF5UG9rZW1vbiA9IChwb2tlbW9uKSA9PiB7XG4gIGNvbnN0IGNhcmRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtc2VjdGlvbicpO1xuICBjb25zdCBwb2tlbW9uVHlwZXMgPSBwb2tlbW9uLnR5cGVzO1xuICBjb25zdCBwb2tlbW9uSW1hZ2UgPSBwb2tlbW9uLnNwcml0ZXMub3RoZXI7XG5cbiAgbGV0IGRpc3BsYXlIVE1MID0gYDxsaSBjbGFzcz1cImNhcmRcIj5cbiAgPGltZyBzcmM9XCIke3Bva2Vtb25JbWFnZVsnb2ZmaWNpYWwtYXJ0d29yayddLmZyb250X2RlZmF1bHR9XCIgYWx0PVwiUG9rZW1vblwiPlxuICA8aDE+JHtwb2tlbW9uLm5hbWV9PC9oMT5cbiAgPHVsPmA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9rZW1vblR5cGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZGlzcGxheUhUTUwgKz0gYDxsaT4ke3Bva2Vtb25UeXBlc1tpXS50eXBlLm5hbWV9PC9saT5gO1xuICB9XG4gIGRpc3BsYXlIVE1MICs9IGA8L3VsPlxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db21tZW50PC9idXR0b24+XG48L2xpPmA7XG5cbiAgY2FyZFNlY3Rpb24uaW5uZXJIVE1MICs9IGRpc3BsYXlIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVBva2Vtb247XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgZGlzcGxheVBva2Vtb24gZnJvbSAnLi9kaXNwbGF5UG9rZXMuanMnO1xuXG5jb25zdCBmZXRjaEVhY2hQb2tlID0gKHBva2Vtb24pID0+IHtcbiAgY29uc3QgcG9rZW1vblVybCA9IHBva2Vtb24udXJsO1xuICBmZXRjaChwb2tlbW9uVXJsKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChwb2tlbW9uRGF0YSkgPT4ge1xuICAgICAgZGlzcGxheVBva2Vtb24ocG9rZW1vbkRhdGEpO1xuICAgIH0pO1xufTtcblxuY29uc3QgZmV0Y2hBcGkgPSAoKSA9PiB7XG4gIGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9OSZvZmZzZXQ9MCcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKEFsbHBva2VzKSA9PiB7XG4gICAgICBBbGxwb2tlcy5yZXN1bHRzLmZvckVhY2goKHBva2UpID0+IHtcbiAgICAgICAgZmV0Y2hFYWNoUG9rZShwb2tlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hBcGk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGZldGNoQXBpIGZyb20gJy4vZmV0Y2hBcGkuanMnO1xuXG53aW5kb3cub25sb2FkID0gZmV0Y2hBcGk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=