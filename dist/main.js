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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n  padding-bottom: 50px;\n}\n\nheader,\nnav,\nfooter {\n  display: flex;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  height: 120px;\n}\n\nnav {\n  width: 90%;\n  margin: 0 auto;\n}\n\nbutton {\n  width: 40%;\n  margin: 15px auto;\n  padding: 7px 10px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #320064;\n  color: white;\n  transform: translateY(-2px);\n  transition: all 300ms ease-in-out;\n}\n\n.page-img {\n  width: 80px;\n}\n\n.page-img img {\n  width: 100%;\n}\n\n.card ul,\n.nav-links {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-links li {\n  margin-right: 10px;\n}\n\n.type-list li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.nav-links li,\n.card ul li {\n  display: inline-block;\n  list-style: none;\n}\n\n.card ul li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin: 0 10px;\n}\n\n/* Cards Section Styling */\n\n#card-section {\n  display: grid;\n  gap: 25px;\n  width: 80%;\n  margin: 40px auto;\n  text-align: center;\n}\n\n.card {\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  border-radius: 7px;\n}\n\n.card img {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.card h1 {\n  font-size: 35px;\n}\n\n/* Footer Styling */\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  height: 50px;\n  left: 10%;\n}\n\nfooter a,\n.nav-links li a {\n  text-decoration: none;\n  color: #333;\n  font-size: 15px;\n  transition: 300ms ease-in-out;\n}\n\nfooter a:hover,\n.nav-links li a:hover {\n  border-bottom: 1px solid #333;\n  opacity: 0.7;\n}\n\n/* Modals */\n\n.centering {\n  justify-content: center !important;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333d;\n}\n\n.modal h4 {\n  font-size: 20px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  height: 95vh;\n  padding-bottom: 20px;\n  margin: 2.5vh 2.5vw;\n  border-radius: 15px;\n  overflow-y: scroll;\n}\n\n.img-frame {\n  position: relative;\n  width: 100%;\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n}\n\n.modal-cross {\n  position: absolute;\n  top: 10%;\n  right: 7.5%;\n  font-size: 40px;\n  color: #320064;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.modal-cross:hover {\n  color: purple;\n}\n\n.inner-frame {\n  background-color: white;\n  width: 250px;\n  margin: auto;\n}\n\n.modal-image {\n  display: block;\n  width: 250px;\n  margin: auto;\n}\n\n.pkm-name {\n  font-size: 32px;\n  margin-top: 50px;\n}\n\n.type-list {\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  width: 50%;\n}\n\n.add-comment {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 90%;\n}\n\n.modal input,\n.modal textarea {\n  margin-top: 15px;\n  width: 100%;\n  padding: 10px;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n/* -------------------------- */\n\n@media all and (min-width: 768px) {\n  header {\n    height: 180px;\n  }\n\n  nav {\n    width: 80%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 120px;\n  }\n\n  .nav-links li {\n    margin-right: 40px;\n  }\n\n  .nav-links li a {\n    font-size: 18px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer {\n    width: 80%;\n    left: 10%;\n  }\n\n  .modal-content {\n    height: 95vh;\n    margin: 2.5vh 10vw;\n  }\n}\n\n@media all and (min-width: 1025px) {\n  nav {\n    width: 70%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 160px;\n  }\n\n  .nav-links li {\n    margin-right: 60px;\n  }\n\n  .nav-links li a {\n    font-size: 20px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .card img {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  footer {\n    width: 70%;\n    left: 15%;\n  }\n\n  .modal {\n    font-size: 18px;\n  }\n\n  .modal-content {\n    height: 90vh;\n    margin: 5vh 20vw;\n  }\n\n  .pkm-name {\n    font-size: 54px;\n  }\n\n  .modal h4 {\n    font-size: 28px;\n  }\n\n  .type-list {\n    width: 30%;\n  }\n\n  .add-comment {\n    width: 65%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n  padding-bottom: 50px;\n}\n\nheader,\nnav,\nfooter {\n  display: flex;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  height: 120px;\n}\n\nnav {\n  width: 90%;\n  margin: 0 auto;\n}\n\nbutton {\n  width: 40%;\n  margin: 15px auto;\n  padding: 7px 10px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #320064;\n  color: white;\n  transform: translateY(-2px);\n  transition: all 300ms ease-in-out;\n}\n\n.page-img {\n  width: 80px;\n}\n\n.page-img img {\n  width: 100%;\n}\n\n.card ul,\n.nav-links {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-links li {\n  margin-right: 10px;\n}\n\n.type-list li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.nav-links li,\n.card ul li {\n  display: inline-block;\n  list-style: none;\n}\n\n.card ul li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin: 0 10px;\n}\n\n/* Cards Section Styling */\n\n#card-section {\n  display: grid;\n  gap: 25px;\n  width: 80%;\n  margin: 40px auto;\n  text-align: center;\n}\n\n.card {\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  border-radius: 7px;\n}\n\n.card img {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.card h1 {\n  font-size: 35px;\n}\n\n/* Footer Styling */\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  height: 50px;\n  left: 10%;\n}\n\nfooter a,\n.nav-links li a {\n  text-decoration: none;\n  color: #333;\n  font-size: 15px;\n  transition: 300ms ease-in-out;\n}\n\nfooter a:hover,\n.nav-links li a:hover {\n  border-bottom: 1px solid #333;\n  opacity: 0.7;\n}\n\n/* Modals */\n\n.centering {\n  justify-content: center !important;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333d;\n}\n\n.modal h4 {\n  font-size: 20px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  height: 95vh;\n  padding-bottom: 20px;\n  margin: 2.5vh 2.5vw;\n  border-radius: 15px;\n  overflow-y: scroll;\n}\n\n.img-frame {\n  position: relative;\n  width: 100%;\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n}\n\n.modal-cross {\n  position: absolute;\n  top: 10%;\n  right: 7.5%;\n  font-size: 40px;\n  color: #320064;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.modal-cross:hover {\n  color: purple;\n}\n\n.inner-frame {\n  background-color: white;\n  width: 250px;\n  margin: auto;\n}\n\n.modal-image {\n  display: block;\n  width: 250px;\n  margin: auto;\n}\n\n.pkm-name {\n  font-size: 32px;\n  margin-top: 50px;\n}\n\n.type-list {\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  width: 50%;\n}\n\n.add-comment {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 90%;\n}\n\n.modal input,\n.modal textarea {\n  margin-top: 15px;\n  width: 100%;\n  padding: 10px;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n/* -------------------------- */\n\n@media all and (min-width: 768px) {\n  header {\n    height: 180px;\n  }\n\n  nav {\n    width: 80%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 120px;\n  }\n\n  .nav-links li {\n    margin-right: 40px;\n  }\n\n  .nav-links li a {\n    font-size: 18px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer {\n    width: 80%;\n    left: 10%;\n  }\n\n  .modal-content {\n    height: 95vh;\n    margin: 2.5vh 10vw;\n  }\n}\n\n@media all and (min-width: 1025px) {\n  nav {\n    width: 70%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 160px;\n  }\n\n  .nav-links li {\n    margin-right: 60px;\n  }\n\n  .nav-links li a {\n    font-size: 20px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .card img {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  footer {\n    width: 70%;\n    left: 15%;\n  }\n\n  .modal {\n    font-size: 18px;\n  }\n\n  .modal-content {\n    height: 90vh;\n    margin: 5vh 20vw;\n  }\n\n  .pkm-name {\n    font-size: 54px;\n  }\n\n  .modal h4 {\n    font-size: 28px;\n  }\n\n  .type-list {\n    width: 30%;\n  }\n\n  .add-comment {\n    width: 65%;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/comment.js":
/*!************************!*\
  !*** ./src/comment.js ***!
  \************************/
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


const displayPokemon = (pokemon) => {
  pokemon.forEach((pkm) => {
    fetch(pkm.url)
      .then((response) => response.json())
      .then((pkmData) => {
        const cardSection = document.getElementById('card-section');
        const pokemonTypes = pkmData.types;
        const pokemonImage = pkmData.sprites.other;

        const outerLi = document.createElement('li');
        outerLi.classList.add('card');

        let displayHTML = `
        <img src="${pokemonImage['official-artwork'].front_default}" alt="Pokemon">
        <h1>${pkmData.name}</h1>
        <ul>`;
        for (let i = 0; i < pokemonTypes.length; i += 1) {
          displayHTML += `<li>${pokemonTypes[i].type.name}</li>`;
        }
        displayHTML += '</ul>';

        outerLi.innerHTML = displayHTML;

        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.classList.add(pkmData.name, 'btn');
        btn.innerHTML = 'Comment';
        btn.addEventListener('click', () => {
          (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_0__.default)(pkmData);
        });

        outerLi.appendChild(btn);

        cardSection.appendChild(outerLi);
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
/* harmony import */ var _displayPokes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayPokes.js */ "./src/displayPokes.js");
// eslint-disable-next-line import/no-cycle


const fetchApi = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
    .then((response) => response.json())
    .then((Allpokes) => (0,_displayPokes_js__WEBPACK_IMPORTED_MODULE_0__.default)(Allpokes.results));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchApi);

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
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ "./src/comment.js");


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
  (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.default)(pokemon.name).then((pkmComments) => {
    pkmComments.forEach((pkmComment) => {
      const comment = document.createElement('li');
      comment.innerHTML = `
        ${pkmComment.creation_date} 
        ${pkmComment.username}: 
        ${pkmComment.comment}
        `;
      comments.appendChild(comment);
    });
  });
  // comments.innerHTML = '<li>test comment</li>';

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

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('id', 'submit-btn');
  submitBtn.innerHTML = 'Submit';

  innerFrame.appendChild(img);

  imgFrame.appendChild(modalCross);
  imgFrame.appendChild(innerFrame);

  typeList.appendChild(type1);
  if (type2) {
    typeList.appendChild(type2);
  }

  addComment.appendChild(nameInput);
  addComment.appendChild(textArea);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxL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QUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNnQjs7QUFFckMsZ0JBQWdCLGlEQUFRLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9jb21tZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2Rpc3BsYXlQb2tlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9mZXRjaEFwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9wb3BfdXAuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbmhlYWRlcixcXG5uYXYsXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIwMDY0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGFnZS1pbWcge1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5wYWdlLWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkIHVsLFxcbi5uYXYtbGlua3Mge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm5hdi1saW5rcyBsaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50eXBlLWxpc3QgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uYXYtbGlua3MgbGksXFxuLmNhcmQgdWwgbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNhcmQgdWwgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLyogQ2FyZHMgU2VjdGlvbiBTdHlsaW5nICovXFxuXFxuI2NhcmQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyNXB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmNhcmQgaW1nIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNhcmQgaDEge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4vKiBGb290ZXIgU3R5bGluZyAqL1xcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbGVmdDogMTAlO1xcbn1cXG5cXG5mb290ZXIgYSxcXG4ubmF2LWxpbmtzIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIsXFxuLm5hdi1saW5rcyBsaSBhOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4vKiBNb2RhbHMgKi9cXG5cXG4uY2VudGVyaW5nIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzNkO1xcbn1cXG5cXG4ubW9kYWwgaDQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgaGVpZ2h0OiA5NXZoO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBtYXJnaW46IDIuNXZoIDIuNXZ3O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmltZy1mcmFtZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5tb2RhbC1jcm9zcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwJTtcXG4gIHJpZ2h0OiA3LjUlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6ICMzMjAwNjQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtY3Jvc3M6aG92ZXIge1xcbiAgY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuLmlubmVyLWZyYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwtaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wa20tbmFtZSB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4udHlwZS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ubW9kYWwgaW5wdXQsXFxuLm1vZGFsIHRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tb2RhbCB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gIC5wYWdlLWltZyB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIGEge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAjY2FyZC1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5NXZoO1xcbiAgICBtYXJnaW46IDIuNXZoIDEwdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gIC5wYWdlLWltZyB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIGEge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAjY2FyZC1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG5cXG4gIC5jYXJkIGltZyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbGVmdDogMTUlO1xcbiAgfVxcblxcbiAgLm1vZGFsIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcblxcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIG1hcmdpbjogNXZoIDIwdnc7XFxuICB9XFxuXFxuICAucGttLW5hbWUge1xcbiAgICBmb250LXNpemU6IDU0cHg7XFxuICB9XFxuXFxuICAubW9kYWwgaDQge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICB9XFxuXFxuICAudHlwZS1saXN0IHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gIH1cXG5cXG4gIC5hZGQtY29tbWVudCB7XFxuICAgIHdpZHRoOiA2NSU7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxVQUFV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bEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbmhlYWRlcixcXG5uYXYsXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIwMDY0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGFnZS1pbWcge1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5wYWdlLWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkIHVsLFxcbi5uYXYtbGlua3Mge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm5hdi1saW5rcyBsaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50eXBlLWxpc3QgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uYXYtbGlua3MgbGksXFxuLmNhcmQgdWwgbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNhcmQgdWwgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLyogQ2FyZHMgU2VjdGlvbiBTdHlsaW5nICovXFxuXFxuI2NhcmQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyNXB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmNhcmQgaW1nIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNhcmQgaDEge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4vKiBGb290ZXIgU3R5bGluZyAqL1xcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbGVmdDogMTAlO1xcbn1cXG5cXG5mb290ZXIgYSxcXG4ubmF2LWxpbmtzIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIsXFxuLm5hdi1saW5rcyBsaSBhOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4vKiBNb2RhbHMgKi9cXG5cXG4uY2VudGVyaW5nIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzNkO1xcbn1cXG5cXG4ubW9kYWwgaDQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgaGVpZ2h0OiA5NXZoO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBtYXJnaW46IDIuNXZoIDIuNXZ3O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmltZy1mcmFtZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5tb2RhbC1jcm9zcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwJTtcXG4gIHJpZ2h0OiA3LjUlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6ICMzMjAwNjQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtY3Jvc3M6aG92ZXIge1xcbiAgY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuLmlubmVyLWZyYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwtaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wa20tbmFtZSB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4udHlwZS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ubW9kYWwgaW5wdXQsXFxuLm1vZGFsIHRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tb2RhbCB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gIC5wYWdlLWltZyB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIGEge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAjY2FyZC1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5NXZoO1xcbiAgICBtYXJnaW46IDIuNXZoIDEwdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gIC5wYWdlLWltZyB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIGEge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAjY2FyZC1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG5cXG4gIC5jYXJkIGltZyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbGVmdDogMTUlO1xcbiAgfVxcblxcbiAgLm1vZGFsIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcblxcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIG1hcmdpbjogNXZoIDIwdnc7XFxuICB9XFxuXFxuICAucGttLW5hbWUge1xcbiAgICBmb250LXNpemU6IDU0cHg7XFxuICB9XFxuXFxuICAubW9kYWwgaDQge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICB9XFxuXFxuICAudHlwZS1saXN0IHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gIH1cXG5cXG4gIC5hZGQtY29tbWVudCB7XFxuICAgIHdpZHRoOiA2NSU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBpbnZvbHZlbWVudFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ld1dLajd6UmZNMDVwWVFSY0E0ci9jb21tZW50cyc7XG5cbmNvbnN0IGdldENvbW1lbnRzID0gKGl0ZW1JRCkgPT4gZmV0Y2goYCR7aW52b2x2ZW1lbnRVUkx9P2l0ZW1faWQ9JHtpdGVtSUR9YClcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb21tZW50czsiLCJpbXBvcnQgcG9wVXAgZnJvbSAnLi9wb3BfdXAuanMnO1xuXG5jb25zdCBkaXNwbGF5UG9rZW1vbiA9IChwb2tlbW9uKSA9PiB7XG4gIHBva2Vtb24uZm9yRWFjaCgocGttKSA9PiB7XG4gICAgZmV0Y2gocGttLnVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHBrbURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1zZWN0aW9uJyk7XG4gICAgICAgIGNvbnN0IHBva2Vtb25UeXBlcyA9IHBrbURhdGEudHlwZXM7XG4gICAgICAgIGNvbnN0IHBva2Vtb25JbWFnZSA9IHBrbURhdGEuc3ByaXRlcy5vdGhlcjtcblxuICAgICAgICBjb25zdCBvdXRlckxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgb3V0ZXJMaS5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICAgICAgbGV0IGRpc3BsYXlIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz1cIiR7cG9rZW1vbkltYWdlWydvZmZpY2lhbC1hcnR3b3JrJ10uZnJvbnRfZGVmYXVsdH1cIiBhbHQ9XCJQb2tlbW9uXCI+XG4gICAgICAgIDxoMT4ke3BrbURhdGEubmFtZX08L2gxPlxuICAgICAgICA8dWw+YDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2tlbW9uVHlwZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBkaXNwbGF5SFRNTCArPSBgPGxpPiR7cG9rZW1vblR5cGVzW2ldLnR5cGUubmFtZX08L2xpPmA7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUhUTUwgKz0gJzwvdWw+JztcblxuICAgICAgICBvdXRlckxpLmlubmVySFRNTCA9IGRpc3BsYXlIVE1MO1xuXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChwa21EYXRhLm5hbWUsICdidG4nKTtcbiAgICAgICAgYnRuLmlubmVySFRNTCA9ICdDb21tZW50JztcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHBvcFVwKHBrbURhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBvdXRlckxpLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAgICAgY2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQob3V0ZXJMaSk7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVBva2Vtb247IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IGRpc3BsYXlQb2tlbW9uIGZyb20gJy4vZGlzcGxheVBva2VzLmpzJztcblxuY29uc3QgZmV0Y2hBcGkgPSAoKSA9PiB7XG4gIGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9OSZvZmZzZXQ9MCcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKEFsbHBva2VzKSA9PiBkaXNwbGF5UG9rZW1vbihBbGxwb2tlcy5yZXN1bHRzKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEFwaTsiLCJpbXBvcnQgZ2V0Q29tbWVudHMgZnJvbSAnLi9jb21tZW50LmpzJztcblxuY29uc3QgcG9wVXAgPSAocG9rZW1vbikgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuICBjb25zdCBpbWdGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWdGcmFtZS5jbGFzc0xpc3QuYWRkKCdpbWctZnJhbWUnKTtcblxuICBjb25zdCBtb2RhbENyb3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBtb2RhbENyb3NzLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS10aW1lcycsICdtb2RhbC1jcm9zcycpO1xuICBtb2RhbENyb3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwucmVtb3ZlKCkpO1xuXG4gIGNvbnN0IGlubmVyRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5uZXJGcmFtZS5jbGFzc0xpc3QuYWRkKCdpbm5lci1mcmFtZScpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBwb2tlbW9uLnNwcml0ZXMub3RoZXJbJ29mZmljaWFsLWFydHdvcmsnXS5mcm9udF9kZWZhdWx0KTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYCR7cG9rZW1vbi5uYW1lfSBvZmZpY2lhbCBhcnR3b3JrYCk7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1pbWFnZScpO1xuXG4gIGNvbnN0IHBrbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBwa21OYW1lLmNsYXNzTGlzdC5hZGQoJ3BrbS1uYW1lJyk7XG4gIHBrbU5hbWUuaW5uZXJIVE1MID0gcG9rZW1vbi5uYW1lO1xuXG4gIGNvbnN0IHBrbVR5cGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgcGttVHlwZXMuaW5uZXJIVE1MID0gJ1R5cGUnO1xuXG4gIGNvbnN0IHR5cGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdHlwZUxpc3QuY2xhc3NMaXN0LmFkZCgndHlwZS1saXN0Jyk7XG5cbiAgY29uc3QgdHlwZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0eXBlMS5pbm5lckhUTUwgPSBwb2tlbW9uLnR5cGVzWzBdLnR5cGUubmFtZTtcblxuICBsZXQgdHlwZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBpZiAocG9rZW1vbi50eXBlcy5sZW5ndGggPT09IDIpIHtcbiAgICB0eXBlMi5pbm5lckhUTUwgPSBwb2tlbW9uLnR5cGVzWzFdLnR5cGUubmFtZTtcbiAgfSBlbHNlIHtcbiAgICB0eXBlTGlzdC5jbGFzc0xpc3QuYWRkKCdjZW50ZXJpbmcnKTtcbiAgICB0eXBlMiA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGxvY2F0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ0xvY2F0aW9uJztcblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZmV0Y2gocG9rZW1vbi5sb2NhdGlvbl9hcmVhX2VuY291bnRlcnMpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGxvY2F0aW9ucykgPT4ge1xuICAgICAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IGxvY2F0aW9uc1swXS5sb2NhdGlvbl9hcmVhLm5hbWUgfHwgJ0V2b2x1dGlvbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSAnRXZvbHV0aW9uJztcbiAgICAgIH1cbiAgICB9KTtcblxuICBjb25zdCBjb21tZW50c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29tbWVudHNUaXRsZS5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuXG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29tbWVudHMuY2xhc3NMaXN0LmFkZCgnY29tbWVudHMnKTtcbiAgZ2V0Q29tbWVudHMocG9rZW1vbi5uYW1lKS50aGVuKChwa21Db21tZW50cykgPT4ge1xuICAgIHBrbUNvbW1lbnRzLmZvckVhY2goKHBrbUNvbW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29tbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICR7cGttQ29tbWVudC5jcmVhdGlvbl9kYXRlfSBcbiAgICAgICAgJHtwa21Db21tZW50LnVzZXJuYW1lfTogXG4gICAgICAgICR7cGttQ29tbWVudC5jb21tZW50fVxuICAgICAgICBgO1xuICAgICAgY29tbWVudHMuYXBwZW5kQ2hpbGQoY29tbWVudCk7XG4gICAgfSk7XG4gIH0pO1xuICAvLyBjb21tZW50cy5pbm5lckhUTUwgPSAnPGxpPnRlc3QgY29tbWVudDwvbGk+JztcblxuICBjb25zdCBhZGRDb21tZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBhZGRDb21tZW50VGl0bGUuaW5uZXJIVE1MID0gJ0FkZCBhIGNvbW1lbnQnO1xuXG4gIGNvbnN0IGFkZENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGFkZENvbW1lbnQuY2xhc3NMaXN0LmFkZCgnYWRkLWNvbW1lbnQnKTtcblxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbmFtZScpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG5cbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY29tbWVudCcpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbW1lbnQnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIENvbW1lbnQnKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ0bicpO1xuICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ1N1Ym1pdCc7XG5cbiAgaW5uZXJGcmFtZS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGltZ0ZyYW1lLmFwcGVuZENoaWxkKG1vZGFsQ3Jvc3MpO1xuICBpbWdGcmFtZS5hcHBlbmRDaGlsZChpbm5lckZyYW1lKTtcblxuICB0eXBlTGlzdC5hcHBlbmRDaGlsZCh0eXBlMSk7XG4gIGlmICh0eXBlMikge1xuICAgIHR5cGVMaXN0LmFwcGVuZENoaWxkKHR5cGUyKTtcbiAgfVxuXG4gIGFkZENvbW1lbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgYWRkQ29tbWVudC5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gIGFkZENvbW1lbnQuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nRnJhbWUpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocGttTmFtZSk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwa21UeXBlcyk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0eXBlTGlzdCk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvblRpdGxlKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbW1lbnRzVGl0bGUpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29tbWVudHMpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkQ29tbWVudFRpdGxlKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGFkZENvbW1lbnQpO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3BVcDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZmV0Y2hBcGkgZnJvbSAnLi9mZXRjaEFwaS5qcyc7XG5cbndpbmRvdy5vbmxvYWQgPSBmZXRjaEFwaTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=