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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n  padding-bottom: 50px;\n}\n\nheader,\nnav,\nfooter {\n  display: flex;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  height: 120px;\n}\n\nnav {\n  width: 90%;\n  margin: 0 auto;\n}\n\nbutton,\n.heart,\n.modal-cross {\n  cursor: pointer;\n}\n\nbutton {\n  width: 40%;\n  margin: 15px auto;\n  padding: 7px 10px;\n}\n\nbutton:hover {\n  background-color: #320064;\n  color: white;\n  transform: translateY(-2px);\n  transition: all 300ms ease-in-out;\n}\n\n.page-img {\n  width: 80px;\n}\n\n.page-img img {\n  width: 100%;\n}\n\n.card ul,\n.nav-links {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-links li {\n  margin-right: 10px;\n}\n\n.type-list li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.nav-links li,\n.card ul li {\n  display: inline-block;\n  list-style: none;\n}\n\n.card ul li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin: 0 10px;\n}\n\n/* Cards Section Styling */\n\n#card-section {\n  display: grid;\n  gap: 25px;\n  width: 80%;\n  margin: 40px auto;\n  text-align: center;\n}\n\n.card {\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  border-radius: 7px;\n}\n\n.card:hover {\n  border: 3px solid #333;\n  transform: scale(1.06);\n  transition: 500ms ease-in-out;\n}\n\n.card img {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.card h1 {\n  font-size: 35px;\n}\n\n.likes-div {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  align-items: baseline;\n}\n\n.heart,\n#like {\n  font-size: 20px;\n}\n\n.heart {\n  color: rgb(189, 187, 187);\n}\n\n.heart:active {\n  color: red;\n  transition: 200ms;\n}\n\n/* Footer Styling */\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  height: 50px;\n  left: 10%;\n}\n\nfooter a,\n.nav-links li a {\n  text-decoration: none;\n  color: #333;\n  font-size: 15px;\n  transition: 300ms ease-in-out;\n}\n\nfooter a:hover,\n.nav-links li a:hover {\n  border-bottom: 1px solid #333;\n  opacity: 0.7;\n}\n\n/* Modals */\n\n.centering {\n  justify-content: center !important;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333d;\n}\n\n.modal h4 {\n  font-size: 20px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  height: 95vh;\n  padding-bottom: 20px;\n  margin: 2.5vh 2.5vw;\n  border-radius: 15px;\n  overflow-y: scroll;\n}\n\n.img-frame {\n  position: relative;\n  width: 100%;\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n}\n\n.modal-cross {\n  position: fixed;\n  top: 4%;\n  right: 7.5%;\n  font-size: 40px;\n  color: #320064;\n  transition: 0.3s;\n}\n\n.modal-cross:hover {\n  color: purple;\n}\n\n.inner-frame {\n  background-color: white;\n  width: 250px;\n  margin: auto;\n}\n\n.modal-image {\n  display: block;\n  width: 250px;\n  margin: auto;\n}\n\n.pkm-name {\n  font-size: 32px;\n  margin-top: 50px;\n}\n\n.type-list {\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  width: 50%;\n}\n\n.add-comment {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 90%;\n}\n\n.modal input,\n.modal textarea {\n  margin-top: 15px;\n  width: 100%;\n  padding: 10px;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.red {\n  border-color: red;\n}\n\n.error {\n  text-align: center;\n  color: maroon;\n  width: 80%;\n  height: 40px;\n  margin: auto;\n  margin-top: 20px;\n}\n\n/* -------------------------- */\n\n@media all and (min-width: 768px) {\n  header {\n    height: 180px;\n  }\n\n  nav {\n    width: 80%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 120px;\n  }\n\n  .nav-links li {\n    margin-right: 40px;\n  }\n\n  .nav-links li a {\n    font-size: 18px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer {\n    width: 80%;\n    left: 10%;\n  }\n\n  .modal-content {\n    height: 95vh;\n    margin: 2.5vh 10vw;\n  }\n\n  .modal-cross {\n    top: 5%;\n    right: 15%;\n  }\n}\n\n@media all and (min-width: 1025px) {\n  nav {\n    width: 70%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 160px;\n  }\n\n  .nav-links li {\n    margin-right: 60px;\n  }\n\n  .nav-links li a {\n    font-size: 20px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .card:hover {\n    transform: scale(1.1);\n  }\n\n  .card img {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  footer {\n    width: 70%;\n    left: 15%;\n  }\n\n  .modal {\n    font-size: 18px;\n  }\n\n  .modal-content {\n    height: 90vh;\n    margin: 5vh 20vw;\n  }\n\n  .modal-cross {\n    top: 7.5%;\n    right: 23%;\n  }\n\n  .pkm-name {\n    font-size: 54px;\n  }\n\n  .modal h4 {\n    font-size: 28px;\n  }\n\n  .type-list {\n    width: 30%;\n  }\n\n  .add-comment {\n    width: 65%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n  padding-bottom: 50px;\n}\n\nheader,\nnav,\nfooter {\n  display: flex;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  height: 120px;\n}\n\nnav {\n  width: 90%;\n  margin: 0 auto;\n}\n\nbutton,\n.heart,\n.modal-cross {\n  cursor: pointer;\n}\n\nbutton {\n  width: 40%;\n  margin: 15px auto;\n  padding: 7px 10px;\n}\n\nbutton:hover {\n  background-color: #320064;\n  color: white;\n  transform: translateY(-2px);\n  transition: all 300ms ease-in-out;\n}\n\n.page-img {\n  width: 80px;\n}\n\n.page-img img {\n  width: 100%;\n}\n\n.card ul,\n.nav-links {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-links li {\n  margin-right: 10px;\n}\n\n.type-list li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.nav-links li,\n.card ul li {\n  display: inline-block;\n  list-style: none;\n}\n\n.card ul li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin: 0 10px;\n}\n\n/* Cards Section Styling */\n\n#card-section {\n  display: grid;\n  gap: 25px;\n  width: 80%;\n  margin: 40px auto;\n  text-align: center;\n}\n\n.card {\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  border-radius: 7px;\n}\n\n.card:hover {\n  border: 3px solid #333;\n  transform: scale(1.06);\n  transition: 500ms ease-in-out;\n}\n\n.card img {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.card h1 {\n  font-size: 35px;\n}\n\n.likes-div {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  align-items: baseline;\n}\n\n.heart,\n#like {\n  font-size: 20px;\n}\n\n.heart {\n  color: rgb(189, 187, 187);\n}\n\n.heart:active {\n  color: red;\n  transition: 200ms;\n}\n\n/* Footer Styling */\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  height: 50px;\n  left: 10%;\n}\n\nfooter a,\n.nav-links li a {\n  text-decoration: none;\n  color: #333;\n  font-size: 15px;\n  transition: 300ms ease-in-out;\n}\n\nfooter a:hover,\n.nav-links li a:hover {\n  border-bottom: 1px solid #333;\n  opacity: 0.7;\n}\n\n/* Modals */\n\n.centering {\n  justify-content: center !important;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333d;\n}\n\n.modal h4 {\n  font-size: 20px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  height: 95vh;\n  padding-bottom: 20px;\n  margin: 2.5vh 2.5vw;\n  border-radius: 15px;\n  overflow-y: scroll;\n}\n\n.img-frame {\n  position: relative;\n  width: 100%;\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n}\n\n.modal-cross {\n  position: fixed;\n  top: 4%;\n  right: 7.5%;\n  font-size: 40px;\n  color: #320064;\n  transition: 0.3s;\n}\n\n.modal-cross:hover {\n  color: purple;\n}\n\n.inner-frame {\n  background-color: white;\n  width: 250px;\n  margin: auto;\n}\n\n.modal-image {\n  display: block;\n  width: 250px;\n  margin: auto;\n}\n\n.pkm-name {\n  font-size: 32px;\n  margin-top: 50px;\n}\n\n.type-list {\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  width: 50%;\n}\n\n.add-comment {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 90%;\n}\n\n.modal input,\n.modal textarea {\n  margin-top: 15px;\n  width: 100%;\n  padding: 10px;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.red {\n  border-color: red;\n}\n\n.error {\n  text-align: center;\n  color: maroon;\n  width: 80%;\n  height: 40px;\n  margin: auto;\n  margin-top: 20px;\n}\n\n/* -------------------------- */\n\n@media all and (min-width: 768px) {\n  header {\n    height: 180px;\n  }\n\n  nav {\n    width: 80%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 120px;\n  }\n\n  .nav-links li {\n    margin-right: 40px;\n  }\n\n  .nav-links li a {\n    font-size: 18px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer {\n    width: 80%;\n    left: 10%;\n  }\n\n  .modal-content {\n    height: 95vh;\n    margin: 2.5vh 10vw;\n  }\n\n  .modal-cross {\n    top: 5%;\n    right: 15%;\n  }\n}\n\n@media all and (min-width: 1025px) {\n  nav {\n    width: 70%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 160px;\n  }\n\n  .nav-links li {\n    margin-right: 60px;\n  }\n\n  .nav-links li a {\n    font-size: 20px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .card:hover {\n    transform: scale(1.1);\n  }\n\n  .card img {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  footer {\n    width: 70%;\n    left: 15%;\n  }\n\n  .modal {\n    font-size: 18px;\n  }\n\n  .modal-content {\n    height: 90vh;\n    margin: 5vh 20vw;\n  }\n\n  .modal-cross {\n    top: 7.5%;\n    right: 23%;\n  }\n\n  .pkm-name {\n    font-size: 54px;\n  }\n\n  .modal h4 {\n    font-size: 28px;\n  }\n\n  .type-list {\n    width: 30%;\n  }\n\n  .add-comment {\n    width: 65%;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/counters.js":
/*!*************************!*\
  !*** ./src/counters.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemCounter": () => (/* binding */ itemCounter),
/* harmony export */   "commentCounter": () => (/* binding */ commentCounter)
/* harmony export */ });
const itemCounter = (allPokemon) => allPokemon.length;

const commentCounter = (comments, title, list) => {
  if (comments.length >= 1) {
    title.innerHTML = `Comments (${comments.length})`;
  } else {
    title.innerHTML = 'Comments (0)';
    list.innerHTML = 'No comments... yet!';
  }
};



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
/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop_up.js */ "./src/pop_up.js");
/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchLikes.js */ "./src/fetchLikes.js");
/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLikes.js */ "./src/postLikes.js");




const displayPokemon = async (pokemon) => {
  pokemon.forEach((pkm) => {
    fetch(pkm.url)
      .then((response) => response.json())
      .then(async (pkmData) => {
        const cardSection = document.getElementById('card-section');
        const pokemonTypes = pkmData.types;
        const pokemonImage = pkmData.sprites.other;

        const outerLi = document.createElement('li');
        outerLi.classList.add('card');

        const pokeImg = document.createElement('img'); // Creates pokemon image element
        pokeImg.setAttribute('src', `${pokemonImage['official-artwork'].front_default}`);
        pokeImg.setAttribute('alt', 'Pokemon');

        const h1 = document.createElement('h1'); // Creates Pokemon name element
        h1.innerHTML = `${pkmData.name}`;

        const likesDiv = document.createElement('div'); // Creates div to hold heart icon and likes count element
        likesDiv.className = 'likes-div';

        const likeImg = document.createElement('i'); // Creates heart icon
        likeImg.classList.add('fas', 'fa-heart', 'heart');
        likeImg.setAttribute('id', `${pkmData.name}`);

        const span = document.createElement('span'); // Creates likes count element
        span.setAttribute('id', 'like');

        const ul = document.createElement('ul'); // Creates types list element
        pokemonTypes.forEach((pokemon) => {
          ul.innerHTML += `<li>${pokemon.type.name}</li>`;
        });

        const btn = document.createElement('button'); // Creates button element
        btn.setAttribute('type', 'button');
        btn.classList.add(pkmData.name, 'btn');
        btn.innerHTML = 'Comment';
        btn.addEventListener('click', () => {
          (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_0__.default)(pkmData);
        });

        outerLi.appendChild(pokeImg); // Append Image To Li
        outerLi.appendChild(h1); // Append Pokemon Name To Li
        likesDiv.appendChild(likeImg); // Append Heart Icon To Parent Div
        likesDiv.appendChild(span); // Append Likes Count To Parent Div
        outerLi.appendChild(likesDiv); // Append Pokemon Name To Li
        outerLi.appendChild(ul); // Append Types List To Li
        outerLi.appendChild(btn); // Append Comment Button To Li

        cardSection.appendChild(outerLi); // Append Li To Parent Element

        await (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__.default)(pkmData, span); // Displays number of likes in UI

        // EventListener To Increment Likes Count On Click
        likeImg.addEventListener('click', async () => {
          await (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_2__.default)(likeImg.id);
          await (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__.default)(pkmData, span);
        });
      });
  });
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
const fetchApi = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=18&offset=0');
  return response.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchApi);

/***/ }),

/***/ "./src/fetchLikes.js":
/*!***************************!*\
  !*** ./src/fetchLikes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/likes/';

const fetchLikes = (pokemon, item) => fetch(url)
  .then((response) => response.json())
  .then((likes) => {
    likes.forEach((pkLike) => {
      if (pkLike.item_id === pokemon.name) {
        item.innerHTML = `${pkLike.likes} likes`;
      }
    });
  });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);

/***/ }),

/***/ "./src/get_comment.js":
/*!****************************!*\
  !*** ./src/get_comment.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/comments';

const getComments = (itemID) => fetch(`${involvementURL}?item_id=${itemID}`)
  .then((response) => response.json());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);

/***/ }),

/***/ "./src/pop_up.js":
/*!***********************!*\
  !*** ./src/pop_up.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counters.js */ "./src/counters.js");
/* harmony import */ var _get_comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_comment.js */ "./src/get_comment.js");
/* harmony import */ var _post_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post_comments.js */ "./src/post_comments.js");




const popUp = (pokemon) => {
  const modal = document.createElement('article');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const imgFrame = document.createElement('div');
  imgFrame.classList.add('img-frame');

  const modalCross = document.createElement('i');
  modalCross.classList.add('fas', 'fa-times', 'modal-cross');
  modalCross.addEventListener('click', () => modal.remove());

  const innerFrame = document.createElement('div');
  innerFrame.classList.add('inner-frame');

  const img = document.createElement('img');
  img.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default);
  img.setAttribute('alt', `${pokemon.name} official artwork`);
  img.classList.add('modal-image');

  const pkmName = document.createElement('h3');
  pkmName.classList.add('pkm-name');
  pkmName.innerHTML = pokemon.name;

  const pkmTypes = document.createElement('h4');
  pkmTypes.innerHTML = 'Type';

  const typeList = document.createElement('ul');
  typeList.classList.add('type-list');

  const type1 = document.createElement('li');
  type1.innerHTML = pokemon.types[0].type.name;

  let type2 = document.createElement('li');
  if (pokemon.types.length === 2) {
    type2.innerHTML = pokemon.types[1].type.name;
  } else {
    typeList.classList.add('centering');
    type2 = false;
  }

  const locationTitle = document.createElement('h4');
  locationTitle.innerHTML = 'Location';

  const location = document.createElement('p');
  fetch(pokemon.location_area_encounters)
    .then((response) => response.json())
    .then((locations) => {
      if (locations.length > 1) {
        location.innerHTML = locations[0].location_area.name || 'Evolution';
      } else {
        location.innerHTML = 'Evolution';
      }
    });

  const commentsTitle = document.createElement('h4');
  commentsTitle.innerHTML = 'Comments';

  const comments = document.createElement('ul');
  comments.classList.add('comments');

  const showComments = () => {
    comments.innerHTML = '';
    (0,_get_comment_js__WEBPACK_IMPORTED_MODULE_1__.default)(pokemon.name).then((pkmComments) => {
      for (let i = 0; i < pkmComments.length; i += 1) {
        const comment = document.createElement('li');
        const pkmComment = pkmComments[i];
        comment.innerHTML = `
          ${pkmComment.creation_date} 
          ${pkmComment.username}: 
          ${pkmComment.comment}
          `;
        comments.appendChild(comment);
      }
      (0,_counters_js__WEBPACK_IMPORTED_MODULE_0__.commentCounter)(pkmComments, commentsTitle, comments);
    });
  };

  showComments();

  const addCommentTitle = document.createElement('h4');
  addCommentTitle.innerHTML = 'Add a comment';

  const addComment = document.createElement('form');
  addComment.classList.add('add-comment');

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Your name');
  nameInput.setAttribute('id', 'name');

  const textArea = document.createElement('textarea');
  textArea.setAttribute('name', 'comment');
  textArea.setAttribute('id', 'comment');
  textArea.setAttribute('placeholder', 'Your Comment');

  const msg = document.createElement('small');
  msg.classList.add('error');
  msg.innerHTML = '';

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('id', 'submit-btn');
  submitBtn.innerHTML = 'Submit';
  submitBtn.addEventListener('click', () => {
    if (nameInput.value.length < 1 || nameInput.value.length > 8) {
      nameInput.classList.add('red');
      textArea.classList.remove('red');
      msg.innerHTML = '*Your name should have between 1 and 8 characters*';
    } else if (textArea.value.length < 5 || textArea.value.length > 100) {
      nameInput.classList.remove('red');
      textArea.classList.add('red');
      msg.innerHTML = 'Comment should have between 5 and 100 characters';
    } else {
      (0,_post_comments_js__WEBPACK_IMPORTED_MODULE_2__.default)(nameInput.value, textArea.value, pokemon.name)
        .then(() => ((0,_get_comment_js__WEBPACK_IMPORTED_MODULE_1__.default)(pokemon.name)).then(() => showComments()));
      nameInput.classList.remove('red');
      textArea.classList.remove('red');
      addComment.reset();
    }
  });

  innerFrame.appendChild(img);

  imgFrame.appendChild(modalCross);
  imgFrame.appendChild(innerFrame);

  typeList.appendChild(type1);
  if (type2) {
    typeList.appendChild(type2);
  }

  addComment.appendChild(nameInput);
  addComment.appendChild(textArea);
  addComment.appendChild(msg);
  addComment.appendChild(submitBtn);

  modalContent.appendChild(imgFrame);
  modalContent.appendChild(pkmName);
  modalContent.appendChild(pkmTypes);
  modalContent.appendChild(typeList);
  modalContent.appendChild(locationTitle);
  modalContent.appendChild(location);
  modalContent.appendChild(commentsTitle);
  modalContent.appendChild(comments);
  modalContent.appendChild(addCommentTitle);
  modalContent.appendChild(addComment);

  modal.appendChild(modalContent);

  document.body.appendChild(modal);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);

/***/ }),

/***/ "./src/postLikes.js":
/*!**************************!*\
  !*** ./src/postLikes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/likes/';

const postLikes = async (item1) => {
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: item1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return result.text();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);

/***/ }),

/***/ "./src/post_comments.js":
/*!******************************!*\
  !*** ./src/post_comments.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/comments';

const postComments = (name, comment1, pokemon) => fetch(involvementURL, {
  method: 'POST',
  body: JSON.stringify({
    item_id: pokemon,
    username: name,
    comment: comment1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComments);

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
/* harmony import */ var _displayPokes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayPokes.js */ "./src/displayPokes.js");
/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counters.js */ "./src/counters.js");





const pokeTitle = document.querySelector('.poke-title');

window.addEventListener('load', async () => {
  const res = await (0,_fetchApi_js__WEBPACK_IMPORTED_MODULE_1__.default)();
  pokeTitle.innerHTML = `Pokemon(${(0,_counters_js__WEBPACK_IMPORTED_MODULE_3__.itemCounter)(res.results)})`;
  await (0,_displayPokes_js__WEBPACK_IMPORTED_MODULE_2__.default)(res.results);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssNEJBQTRCLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxVQUFVLHVCQUF1QixvQkFBb0IsZ0JBQWdC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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2dCO0FBQ1U7QUFDSDs7QUFFNUM7O0FBRUE7QUFDQSxvQkFBb0IscURBQVE7QUFDNUIsbUNBQW1DLHlEQUFXLGNBQWM7QUFDNUQsUUFBUSx5REFBYztBQUN0QixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9jb3VudGVycy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9kaXNwbGF5UG9rZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvZmV0Y2hBcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvZmV0Y2hMaWtlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9nZXRfY29tbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9wb3BfdXAuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvcG9zdExpa2VzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3Bvc3RfY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbmhlYWRlcixcXG5uYXYsXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5idXR0b24sXFxuLmhlYXJ0LFxcbi5tb2RhbC1jcm9zcyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjAwNjQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wYWdlLWltZyB7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuLnBhZ2UtaW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQgdWwsXFxuLm5hdi1saW5rcyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2LWxpbmtzIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnR5cGUtbGlzdCBsaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5hdi1saW5rcyBsaSxcXG4uY2FyZCB1bCBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY2FyZCB1bCBsaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4vKiBDYXJkcyBTZWN0aW9uIFN0eWxpbmcgKi9cXG5cXG4jY2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDI1cHg7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiA0MHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMzMzO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcXG4gIHRyYW5zaXRpb246IDUwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2FyZCBpbWcge1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2FyZCBoMSB7XFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbi5saWtlcy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4uaGVhcnQsXFxuI2xpa2Uge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uaGVhcnQge1xcbiAgY29sb3I6IHJnYigxODksIDE4NywgMTg3KTtcXG59XFxuXFxuLmhlYXJ0OmFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsaW5nICovXFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBsZWZ0OiAxMCU7XFxufVxcblxcbmZvb3RlciBhLFxcbi5uYXYtbGlua3MgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlcixcXG4ubmF2LWxpbmtzIGxpIGE6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi8qIE1vZGFscyAqL1xcblxcbi5jZW50ZXJpbmcge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzM2Q7XFxufVxcblxcbi5tb2RhbCBoNCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBoZWlnaHQ6IDk1dmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbjogMi41dmggMi41dnc7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uaW1nLWZyYW1lIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLm1vZGFsLWNyb3NzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNCU7XFxuICByaWdodDogNy41JTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGNvbG9yOiAjMzIwMDY0O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLm1vZGFsLWNyb3NzOmhvdmVyIHtcXG4gIGNvbG9yOiBwdXJwbGU7XFxufVxcblxcbi5pbm5lci1mcmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm1vZGFsLWltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ucGttLW5hbWUge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLnR5cGUtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmFkZC1jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLm1vZGFsIGlucHV0LFxcbi5tb2RhbCB0ZXh0YXJlYSB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwgdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnJlZCB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuLmVycm9yIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBtYXJvb247XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBnYXA6IDQwcHg7XFxuICB9XFxuXFxuICAucGFnZS1pbWcge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyBsaSBhIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcblxcbiAgI2NhcmQtc2VjdGlvbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBsZWZ0OiAxMCU7XFxuICB9XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGhlaWdodDogOTV2aDtcXG4gICAgbWFyZ2luOiAyLjV2aCAxMHZ3O1xcbiAgfVxcblxcbiAgLm1vZGFsLWNyb3NzIHtcXG4gICAgdG9wOiA1JTtcXG4gICAgcmlnaHQ6IDE1JTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxuICBuYXYge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZ2FwOiA0MHB4O1xcbiAgfVxcblxcbiAgLnBhZ2UtaW1nIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyBsaSB7XFxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkgYSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gICNjYXJkLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcblxcbiAgLmNhcmQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuXFxuICAuY2FyZCBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGxlZnQ6IDE1JTtcXG4gIH1cXG5cXG4gIC5tb2RhbCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG5cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBtYXJnaW46IDV2aCAyMHZ3O1xcbiAgfVxcblxcbiAgLm1vZGFsLWNyb3NzIHtcXG4gICAgdG9wOiA3LjUlO1xcbiAgICByaWdodDogMjMlO1xcbiAgfVxcblxcbiAgLnBrbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiA1NHB4O1xcbiAgfVxcblxcbiAgLm1vZGFsIGg0IHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgfVxcblxcbiAgLnR5cGUtbGlzdCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxuXFxuICAuYWRkLWNvbW1lbnQge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FB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QUVBO0lBQ0UsT0FBTztJQUNQLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbmhlYWRlcixcXG5uYXYsXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5idXR0b24sXFxuLmhlYXJ0LFxcbi5tb2RhbC1jcm9zcyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjAwNjQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wYWdlLWltZyB7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuLnBhZ2UtaW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQgdWwsXFxuLm5hdi1saW5rcyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2LWxpbmtzIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnR5cGUtbGlzdCBsaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5hdi1saW5rcyBsaSxcXG4uY2FyZCB1bCBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY2FyZCB1bCBsaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4vKiBDYXJkcyBTZWN0aW9uIFN0eWxpbmcgKi9cXG5cXG4jY2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDI1cHg7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiA0MHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMzMzO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcXG4gIHRyYW5zaXRpb246IDUwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2FyZCBpbWcge1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2FyZCBoMSB7XFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbi5saWtlcy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4uaGVhcnQsXFxuI2xpa2Uge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uaGVhcnQge1xcbiAgY29sb3I6IHJnYigxODksIDE4NywgMTg3KTtcXG59XFxuXFxuLmhlYXJ0OmFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcblxcbi8qIEZvb3RlciBTdHlsaW5nICovXFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBsZWZ0OiAxMCU7XFxufVxcblxcbmZvb3RlciBhLFxcbi5uYXYtbGlua3MgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlcixcXG4ubmF2LWxpbmtzIGxpIGE6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi8qIE1vZGFscyAqL1xcblxcbi5jZW50ZXJpbmcge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzM2Q7XFxufVxcblxcbi5tb2RhbCBoNCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBoZWlnaHQ6IDk1dmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbjogMi41dmggMi41dnc7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uaW1nLWZyYW1lIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLm1vZGFsLWNyb3NzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNCU7XFxuICByaWdodDogNy41JTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGNvbG9yOiAjMzIwMDY0O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLm1vZGFsLWNyb3NzOmhvdmVyIHtcXG4gIGNvbG9yOiBwdXJwbGU7XFxufVxcblxcbi5pbm5lci1mcmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm1vZGFsLWltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ucGttLW5hbWUge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLnR5cGUtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmFkZC1jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLm1vZGFsIGlucHV0LFxcbi5tb2RhbCB0ZXh0YXJlYSB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwgdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnJlZCB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuLmVycm9yIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBtYXJvb247XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBnYXA6IDQwcHg7XFxuICB9XFxuXFxuICAucGFnZS1pbWcge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyBsaSBhIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcblxcbiAgI2NhcmQtc2VjdGlvbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBsZWZ0OiAxMCU7XFxuICB9XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGhlaWdodDogOTV2aDtcXG4gICAgbWFyZ2luOiAyLjV2aCAxMHZ3O1xcbiAgfVxcblxcbiAgLm1vZGFsLWNyb3NzIHtcXG4gICAgdG9wOiA1JTtcXG4gICAgcmlnaHQ6IDE1JTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxuICBuYXYge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZ2FwOiA0MHB4O1xcbiAgfVxcblxcbiAgLnBhZ2UtaW1nIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyBsaSB7XFxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkgYSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gICNjYXJkLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcblxcbiAgLmNhcmQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuXFxuICAuY2FyZCBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGxlZnQ6IDE1JTtcXG4gIH1cXG5cXG4gIC5tb2RhbCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG5cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBtYXJnaW46IDV2aCAyMHZ3O1xcbiAgfVxcblxcbiAgLm1vZGFsLWNyb3NzIHtcXG4gICAgdG9wOiA3LjUlO1xcbiAgICByaWdodDogMjMlO1xcbiAgfVxcblxcbiAgLnBrbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiA1NHB4O1xcbiAgfVxcblxcbiAgLm1vZGFsIGg0IHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgfVxcblxcbiAgLnR5cGUtbGlzdCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxuXFxuICAuYWRkLWNvbW1lbnQge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgaXRlbUNvdW50ZXIgPSAoYWxsUG9rZW1vbikgPT4gYWxsUG9rZW1vbi5sZW5ndGg7XG5cbmNvbnN0IGNvbW1lbnRDb3VudGVyID0gKGNvbW1lbnRzLCB0aXRsZSwgbGlzdCkgPT4ge1xuICBpZiAoY29tbWVudHMubGVuZ3RoID49IDEpIHtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y29tbWVudHMubGVuZ3RofSlgO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlLmlubmVySFRNTCA9ICdDb21tZW50cyAoMCknO1xuICAgIGxpc3QuaW5uZXJIVE1MID0gJ05vIGNvbW1lbnRzLi4uIHlldCEnO1xuICB9XG59O1xuXG5leHBvcnQgeyBpdGVtQ291bnRlciwgY29tbWVudENvdW50ZXIgfTsiLCJpbXBvcnQgcG9wVXAgZnJvbSAnLi9wb3BfdXAuanMnO1xuaW1wb3J0IGZldGNoTGlrZXMgZnJvbSAnLi9mZXRjaExpa2VzLmpzJztcbmltcG9ydCBwb3N0TGlrZXMgZnJvbSAnLi9wb3N0TGlrZXMuanMnO1xuXG5jb25zdCBkaXNwbGF5UG9rZW1vbiA9IGFzeW5jIChwb2tlbW9uKSA9PiB7XG4gIHBva2Vtb24uZm9yRWFjaCgocGttKSA9PiB7XG4gICAgZmV0Y2gocGttLnVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oYXN5bmMgKHBrbURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1zZWN0aW9uJyk7XG4gICAgICAgIGNvbnN0IHBva2Vtb25UeXBlcyA9IHBrbURhdGEudHlwZXM7XG4gICAgICAgIGNvbnN0IHBva2Vtb25JbWFnZSA9IHBrbURhdGEuc3ByaXRlcy5vdGhlcjtcblxuICAgICAgICBjb25zdCBvdXRlckxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgb3V0ZXJMaS5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICAgICAgY29uc3QgcG9rZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyAvLyBDcmVhdGVzIHBva2Vtb24gaW1hZ2UgZWxlbWVudFxuICAgICAgICBwb2tlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7cG9rZW1vbkltYWdlWydvZmZpY2lhbC1hcnR3b3JrJ10uZnJvbnRfZGVmYXVsdH1gKTtcbiAgICAgICAgcG9rZUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdQb2tlbW9uJyk7XG5cbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpOyAvLyBDcmVhdGVzIFBva2Vtb24gbmFtZSBlbGVtZW50XG4gICAgICAgIGgxLmlubmVySFRNTCA9IGAke3BrbURhdGEubmFtZX1gO1xuXG4gICAgICAgIGNvbnN0IGxpa2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIENyZWF0ZXMgZGl2IHRvIGhvbGQgaGVhcnQgaWNvbiBhbmQgbGlrZXMgY291bnQgZWxlbWVudFxuICAgICAgICBsaWtlc0Rpdi5jbGFzc05hbWUgPSAnbGlrZXMtZGl2JztcblxuICAgICAgICBjb25zdCBsaWtlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpOyAvLyBDcmVhdGVzIGhlYXJ0IGljb25cbiAgICAgICAgbGlrZUltZy5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtaGVhcnQnLCAnaGVhcnQnKTtcbiAgICAgICAgbGlrZUltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7cGttRGF0YS5uYW1lfWApO1xuXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7IC8vIENyZWF0ZXMgbGlrZXMgY291bnQgZWxlbWVudFxuICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlrZScpO1xuXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTsgLy8gQ3JlYXRlcyB0eXBlcyBsaXN0IGVsZW1lbnRcbiAgICAgICAgcG9rZW1vblR5cGVzLmZvckVhY2goKHBva2Vtb24pID0+IHtcbiAgICAgICAgICB1bC5pbm5lckhUTUwgKz0gYDxsaT4ke3Bva2Vtb24udHlwZS5uYW1lfTwvbGk+YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vIENyZWF0ZXMgYnV0dG9uIGVsZW1lbnRcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQocGttRGF0YS5uYW1lLCAnYnRuJyk7XG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudCc7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBwb3BVcChwa21EYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3V0ZXJMaS5hcHBlbmRDaGlsZChwb2tlSW1nKTsgLy8gQXBwZW5kIEltYWdlIFRvIExpXG4gICAgICAgIG91dGVyTGkuYXBwZW5kQ2hpbGQoaDEpOyAvLyBBcHBlbmQgUG9rZW1vbiBOYW1lIFRvIExpXG4gICAgICAgIGxpa2VzRGl2LmFwcGVuZENoaWxkKGxpa2VJbWcpOyAvLyBBcHBlbmQgSGVhcnQgSWNvbiBUbyBQYXJlbnQgRGl2XG4gICAgICAgIGxpa2VzRGl2LmFwcGVuZENoaWxkKHNwYW4pOyAvLyBBcHBlbmQgTGlrZXMgQ291bnQgVG8gUGFyZW50IERpdlxuICAgICAgICBvdXRlckxpLmFwcGVuZENoaWxkKGxpa2VzRGl2KTsgLy8gQXBwZW5kIFBva2Vtb24gTmFtZSBUbyBMaVxuICAgICAgICBvdXRlckxpLmFwcGVuZENoaWxkKHVsKTsgLy8gQXBwZW5kIFR5cGVzIExpc3QgVG8gTGlcbiAgICAgICAgb3V0ZXJMaS5hcHBlbmRDaGlsZChidG4pOyAvLyBBcHBlbmQgQ29tbWVudCBCdXR0b24gVG8gTGlcblxuICAgICAgICBjYXJkU2VjdGlvbi5hcHBlbmRDaGlsZChvdXRlckxpKTsgLy8gQXBwZW5kIExpIFRvIFBhcmVudCBFbGVtZW50XG5cbiAgICAgICAgYXdhaXQgZmV0Y2hMaWtlcyhwa21EYXRhLCBzcGFuKTsgLy8gRGlzcGxheXMgbnVtYmVyIG9mIGxpa2VzIGluIFVJXG5cbiAgICAgICAgLy8gRXZlbnRMaXN0ZW5lciBUbyBJbmNyZW1lbnQgTGlrZXMgQ291bnQgT24gQ2xpY2tcbiAgICAgICAgbGlrZUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBwb3N0TGlrZXMobGlrZUltZy5pZCk7XG4gICAgICAgICAgYXdhaXQgZmV0Y2hMaWtlcyhwa21EYXRhLCBzcGFuKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UG9rZW1vbjsiLCJjb25zdCBmZXRjaEFwaSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTE4Jm9mZnNldD0wJyk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEFwaTsiLCJjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZXdXS2o3elJmTTA1cFlRUmNBNHIvbGlrZXMvJztcblxuY29uc3QgZmV0Y2hMaWtlcyA9IChwb2tlbW9uLCBpdGVtKSA9PiBmZXRjaCh1cmwpXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigobGlrZXMpID0+IHtcbiAgICBsaWtlcy5mb3JFYWNoKChwa0xpa2UpID0+IHtcbiAgICAgIGlmIChwa0xpa2UuaXRlbV9pZCA9PT0gcG9rZW1vbi5uYW1lKSB7XG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYCR7cGtMaWtlLmxpa2VzfSBsaWtlc2A7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaExpa2VzOyIsImNvbnN0IGludm9sdmVtZW50VVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2V3V0tqN3pSZk0wNXBZUVJjQTRyL2NvbW1lbnRzJztcblxuY29uc3QgZ2V0Q29tbWVudHMgPSAoaXRlbUlEKSA9PiBmZXRjaChgJHtpbnZvbHZlbWVudFVSTH0/aXRlbV9pZD0ke2l0ZW1JRH1gKVxuICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbW1lbnRzOyIsImltcG9ydCB7IGNvbW1lbnRDb3VudGVyIH0gZnJvbSAnLi9jb3VudGVycy5qcyc7XG5pbXBvcnQgZ2V0Q29tbWVudHMgZnJvbSAnLi9nZXRfY29tbWVudC5qcyc7XG5pbXBvcnQgcG9zdENvbW1lbnRzIGZyb20gJy4vcG9zdF9jb21tZW50cy5qcyc7XG5cbmNvbnN0IHBvcFVwID0gKHBva2Vtb24pID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgY29uc3QgaW1nRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nRnJhbWUuY2xhc3NMaXN0LmFkZCgnaW1nLWZyYW1lJyk7XG5cbiAgY29uc3QgbW9kYWxDcm9zcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbW9kYWxDcm9zcy5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtdGltZXMnLCAnbW9kYWwtY3Jvc3MnKTtcbiAgbW9kYWxDcm9zcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsLnJlbW92ZSgpKTtcblxuICBjb25zdCBpbm5lckZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlubmVyRnJhbWUuY2xhc3NMaXN0LmFkZCgnaW5uZXItZnJhbWUnKTtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcG9rZW1vbi5zcHJpdGVzLm90aGVyWydvZmZpY2lhbC1hcnR3b3JrJ10uZnJvbnRfZGVmYXVsdCk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGAke3Bva2Vtb24ubmFtZX0gb2ZmaWNpYWwgYXJ0d29ya2ApO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaW1hZ2UnKTtcblxuICBjb25zdCBwa21OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgcGttTmFtZS5jbGFzc0xpc3QuYWRkKCdwa20tbmFtZScpO1xuICBwa21OYW1lLmlubmVySFRNTCA9IHBva2Vtb24ubmFtZTtcblxuICBjb25zdCBwa21UeXBlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIHBrbVR5cGVzLmlubmVySFRNTCA9ICdUeXBlJztcblxuICBjb25zdCB0eXBlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHR5cGVMaXN0LmNsYXNzTGlzdC5hZGQoJ3R5cGUtbGlzdCcpO1xuXG4gIGNvbnN0IHR5cGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdHlwZTEuaW5uZXJIVE1MID0gcG9rZW1vbi50eXBlc1swXS50eXBlLm5hbWU7XG5cbiAgbGV0IHR5cGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaWYgKHBva2Vtb24udHlwZXMubGVuZ3RoID09PSAyKSB7XG4gICAgdHlwZTIuaW5uZXJIVE1MID0gcG9rZW1vbi50eXBlc1sxXS50eXBlLm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgdHlwZUxpc3QuY2xhc3NMaXN0LmFkZCgnY2VudGVyaW5nJyk7XG4gICAgdHlwZTIgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBsb2NhdGlvblRpdGxlLmlubmVySFRNTCA9ICdMb2NhdGlvbic7XG5cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZldGNoKHBva2Vtb24ubG9jYXRpb25fYXJlYV9lbmNvdW50ZXJzKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChsb2NhdGlvbnMpID0+IHtcbiAgICAgIGlmIChsb2NhdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSBsb2NhdGlvbnNbMF0ubG9jYXRpb25fYXJlYS5uYW1lIHx8ICdFdm9sdXRpb24nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24uaW5uZXJIVE1MID0gJ0V2b2x1dGlvbic7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgY29uc3QgY29tbWVudHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGNvbW1lbnRzVGl0bGUuaW5uZXJIVE1MID0gJ0NvbW1lbnRzJztcblxuICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRzJyk7XG5cbiAgY29uc3Qgc2hvd0NvbW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbW1lbnRzLmlubmVySFRNTCA9ICcnO1xuICAgIGdldENvbW1lbnRzKHBva2Vtb24ubmFtZSkudGhlbigocGttQ29tbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGttQ29tbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHBrbUNvbW1lbnQgPSBwa21Db21tZW50c1tpXTtcbiAgICAgICAgY29tbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgJHtwa21Db21tZW50LmNyZWF0aW9uX2RhdGV9IFxuICAgICAgICAgICR7cGttQ29tbWVudC51c2VybmFtZX06IFxuICAgICAgICAgICR7cGttQ29tbWVudC5jb21tZW50fVxuICAgICAgICAgIGA7XG4gICAgICAgIGNvbW1lbnRzLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xuICAgICAgfVxuICAgICAgY29tbWVudENvdW50ZXIocGttQ29tbWVudHMsIGNvbW1lbnRzVGl0bGUsIGNvbW1lbnRzKTtcbiAgICB9KTtcbiAgfTtcblxuICBzaG93Q29tbWVudHMoKTtcblxuICBjb25zdCBhZGRDb21tZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBhZGRDb21tZW50VGl0bGUuaW5uZXJIVE1MID0gJ0FkZCBhIGNvbW1lbnQnO1xuXG4gIGNvbnN0IGFkZENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGFkZENvbW1lbnQuY2xhc3NMaXN0LmFkZCgnYWRkLWNvbW1lbnQnKTtcblxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbmFtZScpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG5cbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY29tbWVudCcpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbW1lbnQnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIENvbW1lbnQnKTtcblxuICBjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xuICBtc2cuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgbXNnLmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnRuJyk7XG4gIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnU3VibWl0JztcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChuYW1lSW5wdXQudmFsdWUubGVuZ3RoIDwgMSB8fCBuYW1lSW5wdXQudmFsdWUubGVuZ3RoID4gOCkge1xuICAgICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICAgICAgdGV4dEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4gICAgICBtc2cuaW5uZXJIVE1MID0gJypZb3VyIG5hbWUgc2hvdWxkIGhhdmUgYmV0d2VlbiAxIGFuZCA4IGNoYXJhY3RlcnMqJztcbiAgICB9IGVsc2UgaWYgKHRleHRBcmVhLnZhbHVlLmxlbmd0aCA8IDUgfHwgdGV4dEFyZWEudmFsdWUubGVuZ3RoID4gMTAwKSB7XG4gICAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4gICAgICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgICAgIG1zZy5pbm5lckhUTUwgPSAnQ29tbWVudCBzaG91bGQgaGF2ZSBiZXR3ZWVuIDUgYW5kIDEwMCBjaGFyYWN0ZXJzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zdENvbW1lbnRzKG5hbWVJbnB1dC52YWx1ZSwgdGV4dEFyZWEudmFsdWUsIHBva2Vtb24ubmFtZSlcbiAgICAgICAgLnRoZW4oKCkgPT4gKGdldENvbW1lbnRzKHBva2Vtb24ubmFtZSkpLnRoZW4oKCkgPT4gc2hvd0NvbW1lbnRzKCkpKTtcbiAgICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdyZWQnKTtcbiAgICAgIHRleHRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZCcpO1xuICAgICAgYWRkQ29tbWVudC5yZXNldCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5uZXJGcmFtZS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGltZ0ZyYW1lLmFwcGVuZENoaWxkKG1vZGFsQ3Jvc3MpO1xuICBpbWdGcmFtZS5hcHBlbmRDaGlsZChpbm5lckZyYW1lKTtcblxuICB0eXBlTGlzdC5hcHBlbmRDaGlsZCh0eXBlMSk7XG4gIGlmICh0eXBlMikge1xuICAgIHR5cGVMaXN0LmFwcGVuZENoaWxkKHR5cGUyKTtcbiAgfVxuXG4gIGFkZENvbW1lbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgYWRkQ29tbWVudC5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gIGFkZENvbW1lbnQuYXBwZW5kQ2hpbGQobXNnKTtcbiAgYWRkQ29tbWVudC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbWdGcmFtZSk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwa21OYW1lKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHBrbVR5cGVzKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHR5cGVMaXN0KTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29tbWVudHNUaXRsZSk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb21tZW50cyk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChhZGRDb21tZW50VGl0bGUpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkQ29tbWVudCk7XG5cbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvcFVwOyIsImNvbnN0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ld1dLajd6UmZNMDVwWVFSY0E0ci9saWtlcy8nO1xuXG5jb25zdCBwb3N0TGlrZXMgPSBhc3luYyAoaXRlbTEpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaXRlbTEsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdC50ZXh0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0TGlrZXM7IiwiY29uc3QgaW52b2x2ZW1lbnRVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZXdXS2o3elJmTTA1cFlRUmNBNHIvY29tbWVudHMnO1xuXG5jb25zdCBwb3N0Q29tbWVudHMgPSAobmFtZSwgY29tbWVudDEsIHBva2Vtb24pID0+IGZldGNoKGludm9sdmVtZW50VVJMLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgaXRlbV9pZDogcG9rZW1vbixcbiAgICB1c2VybmFtZTogbmFtZSxcbiAgICBjb21tZW50OiBjb21tZW50MSxcbiAgfSksXG4gIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCBwb3N0Q29tbWVudHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGZldGNoQXBpIGZyb20gJy4vZmV0Y2hBcGkuanMnO1xuaW1wb3J0IGRpc3BsYXlQb2tlbW9uIGZyb20gJy4vZGlzcGxheVBva2VzLmpzJztcbmltcG9ydCB7IGl0ZW1Db3VudGVyIH0gZnJvbSAnLi9jb3VudGVycy5qcyc7XG5cbmNvbnN0IHBva2VUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2tlLXRpdGxlJyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEFwaSgpO1xuICBwb2tlVGl0bGUuaW5uZXJIVE1MID0gYFBva2Vtb24oJHtpdGVtQ291bnRlcihyZXMucmVzdWx0cyl9KWA7XG4gIGF3YWl0IGRpc3BsYXlQb2tlbW9uKHJlcy5yZXN1bHRzKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==