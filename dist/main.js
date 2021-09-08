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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n  padding-bottom: 50px;\n}\n\nheader,\nnav,\nfooter {\n  display: flex;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  height: 120px;\n}\n\nnav {\n  width: 90%;\n  margin: 0 auto;\n}\n\nbutton {\n  width: 40%;\n  margin: 15px auto;\n  padding: 7px 10px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #320064;\n  color: white;\n  transform: translateY(-2px);\n  transition: all 300ms ease-in-out;\n}\n\n.page-img {\n  width: 80px;\n}\n\n.page-img img {\n  width: 100%;\n}\n\n.card ul,\n.nav-links {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-links li {\n  margin-right: 10px;\n}\n\n.type-list li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.nav-links li,\n.card ul li {\n  display: inline-block;\n  list-style: none;\n}\n\n.card ul li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin: 0 10px;\n}\n\n/* Cards Section Styling */\n\n#card-section {\n  display: grid;\n  gap: 25px;\n  width: 80%;\n  margin: 40px auto;\n  text-align: center;\n}\n\n.card {\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  border-radius: 7px;\n}\n\n.card:hover {\n  border: 3px solid #333;\n  transform: scale(1.06);\n  transition: 500ms ease-in-out;\n}\n\n.card img {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.card h1 {\n  font-size: 35px;\n}\n\n/* Footer Styling */\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  height: 50px;\n  left: 10%;\n}\n\nfooter a,\n.nav-links li a {\n  text-decoration: none;\n  color: #333;\n  font-size: 15px;\n  transition: 300ms ease-in-out;\n}\n\nfooter a:hover,\n.nav-links li a:hover {\n  border-bottom: 1px solid #333;\n  opacity: 0.7;\n}\n\n/* Modals */\n\n.centering {\n  justify-content: center !important;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333d;\n}\n\n.modal h4 {\n  font-size: 20px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  height: 95vh;\n  padding-bottom: 20px;\n  margin: 2.5vh 2.5vw;\n  border-radius: 15px;\n  overflow-y: scroll;\n}\n\n.img-frame {\n  position: relative;\n  width: 100%;\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n}\n\n.modal-cross {\n  position: absolute;\n  top: 10%;\n  right: 7.5%;\n  font-size: 40px;\n  color: #320064;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.modal-cross:hover {\n  color: purple;\n}\n\n.inner-frame {\n  background-color: white;\n  width: 250px;\n  margin: auto;\n}\n\n.modal-image {\n  display: block;\n  width: 250px;\n  margin: auto;\n}\n\n.pkm-name {\n  font-size: 32px;\n  margin-top: 50px;\n}\n\n.type-list {\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  width: 50%;\n}\n\n.add-comment {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 90%;\n}\n\n.modal input,\n.modal textarea {\n  margin-top: 15px;\n  width: 100%;\n  padding: 10px;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.red {\n  border-color: red;\n}\n\n.error {\n  text-align: center;\n  color: maroon;\n  width: 80%;\n  height: 40px;\n  margin: auto;\n  margin-top: 20px;\n}\n\n/* -------------------------- */\n\n@media all and (min-width: 768px) {\n  header {\n    height: 180px;\n  }\n\n  nav {\n    width: 80%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 120px;\n  }\n\n  .nav-links li {\n    margin-right: 40px;\n  }\n\n  .nav-links li a {\n    font-size: 18px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer {\n    width: 80%;\n    left: 10%;\n  }\n\n  .modal-content {\n    height: 95vh;\n    margin: 2.5vh 10vw;\n  }\n}\n\n@media all and (min-width: 1025px) {\n  nav {\n    width: 70%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 160px;\n  }\n\n  .nav-links li {\n    margin-right: 60px;\n  }\n\n  .nav-links li a {\n    font-size: 20px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .card:hover {\n    transform: scale(1.1);\n  }\n\n  .card img {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  footer {\n    width: 70%;\n    left: 15%;\n  }\n\n  .modal {\n    font-size: 18px;\n  }\n\n  .modal-content {\n    height: 90vh;\n    margin: 5vh 20vw;\n  }\n\n  .pkm-name {\n    font-size: 54px;\n  }\n\n  .modal h4 {\n    font-size: 28px;\n  }\n\n  .type-list {\n    width: 30%;\n  }\n\n  .add-comment {\n    width: 65%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n  padding-bottom: 50px;\n}\n\nheader,\nnav,\nfooter {\n  display: flex;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  height: 120px;\n}\n\nnav {\n  width: 90%;\n  margin: 0 auto;\n}\n\nbutton {\n  width: 40%;\n  margin: 15px auto;\n  padding: 7px 10px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #320064;\n  color: white;\n  transform: translateY(-2px);\n  transition: all 300ms ease-in-out;\n}\n\n.page-img {\n  width: 80px;\n}\n\n.page-img img {\n  width: 100%;\n}\n\n.card ul,\n.nav-links {\n  padding: 0;\n  margin: 0;\n}\n\n.nav-links li {\n  margin-right: 10px;\n}\n\n.type-list li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n.nav-links li,\n.card ul li {\n  display: inline-block;\n  list-style: none;\n}\n\n.card ul li {\n  background-color: lightgray;\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin: 0 10px;\n}\n\n/* Cards Section Styling */\n\n#card-section {\n  display: grid;\n  gap: 25px;\n  width: 80%;\n  margin: 40px auto;\n  text-align: center;\n}\n\n.card {\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  border-radius: 7px;\n}\n\n.card:hover {\n  border: 3px solid #333;\n  transform: scale(1.06);\n  transition: 500ms ease-in-out;\n}\n\n.card img {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.card h1 {\n  font-size: 35px;\n}\n\n/* Footer Styling */\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  height: 50px;\n  left: 10%;\n}\n\nfooter a,\n.nav-links li a {\n  text-decoration: none;\n  color: #333;\n  font-size: 15px;\n  transition: 300ms ease-in-out;\n}\n\nfooter a:hover,\n.nav-links li a:hover {\n  border-bottom: 1px solid #333;\n  opacity: 0.7;\n}\n\n/* Modals */\n\n.centering {\n  justify-content: center !important;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333d;\n}\n\n.modal h4 {\n  font-size: 20px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  height: 95vh;\n  padding-bottom: 20px;\n  margin: 2.5vh 2.5vw;\n  border-radius: 15px;\n  overflow-y: scroll;\n}\n\n.img-frame {\n  position: relative;\n  width: 100%;\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\n}\n\n.modal-cross {\n  position: absolute;\n  top: 10%;\n  right: 7.5%;\n  font-size: 40px;\n  color: #320064;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.modal-cross:hover {\n  color: purple;\n}\n\n.inner-frame {\n  background-color: white;\n  width: 250px;\n  margin: auto;\n}\n\n.modal-image {\n  display: block;\n  width: 250px;\n  margin: auto;\n}\n\n.pkm-name {\n  font-size: 32px;\n  margin-top: 50px;\n}\n\n.type-list {\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  width: 50%;\n}\n\n.add-comment {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 90%;\n}\n\n.modal input,\n.modal textarea {\n  margin-top: 15px;\n  width: 100%;\n  padding: 10px;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.red {\n  border-color: red;\n}\n\n.error {\n  text-align: center;\n  color: maroon;\n  width: 80%;\n  height: 40px;\n  margin: auto;\n  margin-top: 20px;\n}\n\n/* -------------------------- */\n\n@media all and (min-width: 768px) {\n  header {\n    height: 180px;\n  }\n\n  nav {\n    width: 80%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 120px;\n  }\n\n  .nav-links li {\n    margin-right: 40px;\n  }\n\n  .nav-links li a {\n    font-size: 18px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer {\n    width: 80%;\n    left: 10%;\n  }\n\n  .modal-content {\n    height: 95vh;\n    margin: 2.5vh 10vw;\n  }\n}\n\n@media all and (min-width: 1025px) {\n  nav {\n    width: 70%;\n    margin: 0 auto;\n    gap: 40px;\n  }\n\n  .page-img {\n    width: 160px;\n  }\n\n  .nav-links li {\n    margin-right: 60px;\n  }\n\n  .nav-links li a {\n    font-size: 20px;\n  }\n\n  #card-section {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .card:hover {\n    transform: scale(1.1);\n  }\n\n  .card img {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n  footer {\n    width: 70%;\n    left: 15%;\n  }\n\n  .modal {\n    font-size: 18px;\n  }\n\n  .modal-content {\n    height: 90vh;\n    margin: 5vh 20vw;\n  }\n\n  .pkm-name {\n    font-size: 54px;\n  }\n\n  .modal h4 {\n    font-size: 28px;\n  }\n\n  .type-list {\n    width: 30%;\n  }\n\n  .add-comment {\n    width: 65%;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop_up.js */ "./src/pop_up.js");
/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchLikes.js */ "./src/fetchLikes.js");



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

        const pokeImg = document.createElement('img');
        pokeImg.setAttribute('src', `${pokemonImage['official-artwork'].front_default}`);
        pokeImg.setAttribute('alt', 'Pokemon');

        const h1 = document.createElement('h1');
        h1.innerHTML = `${pkmData.name}`;

        const likesDiv = document.createElement('div');
        likesDiv.className = 'likes-div';

        const span = document.createElement('span');
        span.setAttribute('id', 'like');

        (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__.default)().then((likes) => {
          likes.forEach((like) => {
            if (like.item_id === pkmData.name) {
              span.innerHTML = `${like.likes}`;
            }
          });
        });

        const ul = document.createElement('ul');
        pokemonTypes.forEach((pokemon) => {
          ul.innerHTML += `<li>${pokemon.type.name}</li>`;
        });

        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.classList.add(pkmData.name, 'btn');
        btn.innerHTML = 'Comment';
        btn.addEventListener('click', () => {
          (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_0__.default)(pkmData);
        });

        outerLi.appendChild(pokeImg);
        outerLi.appendChild(h1);
        likesDiv.appendChild(span);
        outerLi.appendChild(likesDiv);
        outerLi.appendChild(ul);
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

const fetchLikes = () => fetch(url)
  .then((response) => response.json());

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
/* harmony import */ var _get_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_comment.js */ "./src/get_comment.js");
/* harmony import */ var _post_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post_comments.js */ "./src/post_comments.js");



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
    (0,_get_comment_js__WEBPACK_IMPORTED_MODULE_0__.default)(pokemon.name).then((pkmComments) => {
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
      (0,_post_comments_js__WEBPACK_IMPORTED_MODULE_1__.default)(nameInput.value, textArea.value, pokemon.name)
        .then(() => ((0,_get_comment_js__WEBPACK_IMPORTED_MODULE_0__.default)(pokemon.name)).then(() => showComments()));
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



window.onload = _fetchApi_js__WEBPACK_IMPORTED_MODULE_1__.default;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUIsc0JBQXNCLEtBQUssa0JBQWtCLGlCQUFpQixLQUFLLG9CQUFvQixpQkFBaUIsS0FBSyxHQUFHLFNBQVMsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtB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V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZ0I7O0FBRXJDLGdCQUFnQixpREFBUSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvZGlzcGxheVBva2VzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2ZldGNoQXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2ZldGNoTGlrZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvZ2V0X2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvcG9wX3VwLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3Bvc3RfY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbmhlYWRlcixcXG5uYXYsXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIwMDY0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGFnZS1pbWcge1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5wYWdlLWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkIHVsLFxcbi5uYXYtbGlua3Mge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm5hdi1saW5rcyBsaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50eXBlLWxpc3QgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uYXYtbGlua3MgbGksXFxuLmNhcmQgdWwgbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNhcmQgdWwgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLyogQ2FyZHMgU2VjdGlvbiBTdHlsaW5nICovXFxuXFxuI2NhcmQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyNXB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzMzMztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XFxuICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNhcmQgaW1nIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNhcmQgaDEge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4vKiBGb290ZXIgU3R5bGluZyAqL1xcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbGVmdDogMTAlO1xcbn1cXG5cXG5mb290ZXIgYSxcXG4ubmF2LWxpbmtzIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIsXFxuLm5hdi1saW5rcyBsaSBhOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4vKiBNb2RhbHMgKi9cXG5cXG4uY2VudGVyaW5nIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzNkO1xcbn1cXG5cXG4ubW9kYWwgaDQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgaGVpZ2h0OiA5NXZoO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBtYXJnaW46IDIuNXZoIDIuNXZ3O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmltZy1mcmFtZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5tb2RhbC1jcm9zcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwJTtcXG4gIHJpZ2h0OiA3LjUlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6ICMzMjAwNjQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtY3Jvc3M6aG92ZXIge1xcbiAgY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuLmlubmVyLWZyYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwtaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wa20tbmFtZSB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4udHlwZS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ubW9kYWwgaW5wdXQsXFxuLm1vZGFsIHRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tb2RhbCB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ucmVkIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IG1hcm9vbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gIC5wYWdlLWltZyB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIGEge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAjY2FyZC1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5NXZoO1xcbiAgICBtYXJnaW46IDIuNXZoIDEwdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gIC5wYWdlLWltZyB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIGEge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAjY2FyZC1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG5cXG4gIC5jYXJkOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcblxcbiAgLmNhcmQgaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBsZWZ0OiAxNSU7XFxuICB9XFxuXFxuICAubW9kYWwge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgbWFyZ2luOiA1dmggMjB2dztcXG4gIH1cXG5cXG4gIC5wa20tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogNTRweDtcXG4gIH1cXG5cXG4gIC5tb2RhbCBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gIH1cXG5cXG4gIC50eXBlLWxpc3Qge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgfVxcblxcbiAgLmFkZC1jb21tZW50IHtcXG4gICAgd2lkdGg6IDY1JTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFD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QUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbmhlYWRlcixcXG5uYXYsXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIwMDY0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGFnZS1pbWcge1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5wYWdlLWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkIHVsLFxcbi5uYXYtbGlua3Mge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm5hdi1saW5rcyBsaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50eXBlLWxpc3QgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uYXYtbGlua3MgbGksXFxuLmNhcmQgdWwgbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNhcmQgdWwgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLyogQ2FyZHMgU2VjdGlvbiBTdHlsaW5nICovXFxuXFxuI2NhcmQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyNXB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzMzMztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XFxuICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNhcmQgaW1nIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNhcmQgaDEge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4vKiBGb290ZXIgU3R5bGluZyAqL1xcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbGVmdDogMTAlO1xcbn1cXG5cXG5mb290ZXIgYSxcXG4ubmF2LWxpbmtzIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIsXFxuLm5hdi1saW5rcyBsaSBhOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4vKiBNb2RhbHMgKi9cXG5cXG4uY2VudGVyaW5nIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzNkO1xcbn1cXG5cXG4ubW9kYWwgaDQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgaGVpZ2h0OiA5NXZoO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBtYXJnaW46IDIuNXZoIDIuNXZ3O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmltZy1mcmFtZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5tb2RhbC1jcm9zcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwJTtcXG4gIHJpZ2h0OiA3LjUlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6ICMzMjAwNjQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtY3Jvc3M6aG92ZXIge1xcbiAgY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuLmlubmVyLWZyYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwtaW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wa20tbmFtZSB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4udHlwZS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ubW9kYWwgaW5wdXQsXFxuLm1vZGFsIHRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tb2RhbCB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ucmVkIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IG1hcm9vbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gIC5wYWdlLWltZyB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIGEge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAjY2FyZC1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5NXZoO1xcbiAgICBtYXJnaW46IDIuNXZoIDEwdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gIC5wYWdlLWltZyB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3MgbGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIGxpIGEge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAjY2FyZC1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG5cXG4gIC5jYXJkOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcblxcbiAgLmNhcmQgaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBsZWZ0OiAxNSU7XFxuICB9XFxuXFxuICAubW9kYWwge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgbWFyZ2luOiA1dmggMjB2dztcXG4gIH1cXG5cXG4gIC5wa20tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogNTRweDtcXG4gIH1cXG5cXG4gIC5tb2RhbCBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gIH1cXG5cXG4gIC50eXBlLWxpc3Qge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgfVxcblxcbiAgLmFkZC1jb21tZW50IHtcXG4gICAgd2lkdGg6IDY1JTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwb3BVcCBmcm9tICcuL3BvcF91cC5qcyc7XG5pbXBvcnQgZmV0Y2hMaWtlcyBmcm9tICcuL2ZldGNoTGlrZXMuanMnO1xuXG5jb25zdCBkaXNwbGF5UG9rZW1vbiA9IChwb2tlbW9uKSA9PiB7XG4gIHBva2Vtb24uZm9yRWFjaCgocGttKSA9PiB7XG4gICAgZmV0Y2gocGttLnVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHBrbURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1zZWN0aW9uJyk7XG4gICAgICAgIGNvbnN0IHBva2Vtb25UeXBlcyA9IHBrbURhdGEudHlwZXM7XG4gICAgICAgIGNvbnN0IHBva2Vtb25JbWFnZSA9IHBrbURhdGEuc3ByaXRlcy5vdGhlcjtcblxuICAgICAgICBjb25zdCBvdXRlckxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgb3V0ZXJMaS5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICAgICAgY29uc3QgcG9rZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwb2tlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7cG9rZW1vbkltYWdlWydvZmZpY2lhbC1hcnR3b3JrJ10uZnJvbnRfZGVmYXVsdH1gKTtcbiAgICAgICAgcG9rZUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdQb2tlbW9uJyk7XG5cbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoMS5pbm5lckhUTUwgPSBgJHtwa21EYXRhLm5hbWV9YDtcblxuICAgICAgICBjb25zdCBsaWtlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaWtlc0Rpdi5jbGFzc05hbWUgPSAnbGlrZXMtZGl2JztcblxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlrZScpO1xuXG4gICAgICAgIGZldGNoTGlrZXMoKS50aGVuKChsaWtlcykgPT4ge1xuICAgICAgICAgIGxpa2VzLmZvckVhY2goKGxpa2UpID0+IHtcbiAgICAgICAgICAgIGlmIChsaWtlLml0ZW1faWQgPT09IHBrbURhdGEubmFtZSkge1xuICAgICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IGAke2xpa2UubGlrZXN9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBwb2tlbW9uVHlwZXMuZm9yRWFjaCgocG9rZW1vbikgPT4ge1xuICAgICAgICAgIHVsLmlubmVySFRNTCArPSBgPGxpPiR7cG9rZW1vbi50eXBlLm5hbWV9PC9saT5gO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQocGttRGF0YS5uYW1lLCAnYnRuJyk7XG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudCc7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBwb3BVcChwa21EYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3V0ZXJMaS5hcHBlbmRDaGlsZChwb2tlSW1nKTtcbiAgICAgICAgb3V0ZXJMaS5hcHBlbmRDaGlsZChoMSk7XG4gICAgICAgIGxpa2VzRGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBvdXRlckxpLmFwcGVuZENoaWxkKGxpa2VzRGl2KTtcbiAgICAgICAgb3V0ZXJMaS5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIG91dGVyTGkuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgICAgICBjYXJkU2VjdGlvbi5hcHBlbmRDaGlsZChvdXRlckxpKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQb2tlbW9uOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBkaXNwbGF5UG9rZW1vbiBmcm9tICcuL2Rpc3BsYXlQb2tlcy5qcyc7XG5cbmNvbnN0IGZldGNoQXBpID0gKCkgPT4ge1xuICBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTkmb2Zmc2V0PTAnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChBbGxwb2tlcykgPT4gZGlzcGxheVBva2Vtb24oQWxscG9rZXMucmVzdWx0cykpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hBcGk7IiwiY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2V3V0tqN3pSZk0wNXBZUVJjQTRyL2xpa2VzLyc7XG5cbmNvbnN0IGZldGNoTGlrZXMgPSAoKSA9PiBmZXRjaCh1cmwpXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hMaWtlczsiLCJjb25zdCBpbnZvbHZlbWVudFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ld1dLajd6UmZNMDVwWVFSY0E0ci9jb21tZW50cyc7XG5cbmNvbnN0IGdldENvbW1lbnRzID0gKGl0ZW1JRCkgPT4gZmV0Y2goYCR7aW52b2x2ZW1lbnRVUkx9P2l0ZW1faWQ9JHtpdGVtSUR9YClcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb21tZW50czsiLCJpbXBvcnQgZ2V0Q29tbWVudHMgZnJvbSAnLi9nZXRfY29tbWVudC5qcyc7XG5pbXBvcnQgcG9zdENvbW1lbnRzIGZyb20gJy4vcG9zdF9jb21tZW50cy5qcyc7XG5cbmNvbnN0IHBvcFVwID0gKHBva2Vtb24pID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgY29uc3QgaW1nRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nRnJhbWUuY2xhc3NMaXN0LmFkZCgnaW1nLWZyYW1lJyk7XG5cbiAgY29uc3QgbW9kYWxDcm9zcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbW9kYWxDcm9zcy5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtdGltZXMnLCAnbW9kYWwtY3Jvc3MnKTtcbiAgbW9kYWxDcm9zcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsLnJlbW92ZSgpKTtcblxuICBjb25zdCBpbm5lckZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlubmVyRnJhbWUuY2xhc3NMaXN0LmFkZCgnaW5uZXItZnJhbWUnKTtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcG9rZW1vbi5zcHJpdGVzLm90aGVyWydvZmZpY2lhbC1hcnR3b3JrJ10uZnJvbnRfZGVmYXVsdCk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGAke3Bva2Vtb24ubmFtZX0gb2ZmaWNpYWwgYXJ0d29ya2ApO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaW1hZ2UnKTtcblxuICBjb25zdCBwa21OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgcGttTmFtZS5jbGFzc0xpc3QuYWRkKCdwa20tbmFtZScpO1xuICBwa21OYW1lLmlubmVySFRNTCA9IHBva2Vtb24ubmFtZTtcblxuICBjb25zdCBwa21UeXBlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIHBrbVR5cGVzLmlubmVySFRNTCA9ICdUeXBlJztcblxuICBjb25zdCB0eXBlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHR5cGVMaXN0LmNsYXNzTGlzdC5hZGQoJ3R5cGUtbGlzdCcpO1xuXG4gIGNvbnN0IHR5cGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdHlwZTEuaW5uZXJIVE1MID0gcG9rZW1vbi50eXBlc1swXS50eXBlLm5hbWU7XG5cbiAgbGV0IHR5cGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaWYgKHBva2Vtb24udHlwZXMubGVuZ3RoID09PSAyKSB7XG4gICAgdHlwZTIuaW5uZXJIVE1MID0gcG9rZW1vbi50eXBlc1sxXS50eXBlLm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgdHlwZUxpc3QuY2xhc3NMaXN0LmFkZCgnY2VudGVyaW5nJyk7XG4gICAgdHlwZTIgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBsb2NhdGlvblRpdGxlLmlubmVySFRNTCA9ICdMb2NhdGlvbic7XG5cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZldGNoKHBva2Vtb24ubG9jYXRpb25fYXJlYV9lbmNvdW50ZXJzKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChsb2NhdGlvbnMpID0+IHtcbiAgICAgIGlmIChsb2NhdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSBsb2NhdGlvbnNbMF0ubG9jYXRpb25fYXJlYS5uYW1lIHx8ICdFdm9sdXRpb24nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24uaW5uZXJIVE1MID0gJ0V2b2x1dGlvbic7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgY29uc3QgY29tbWVudHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGNvbW1lbnRzVGl0bGUuaW5uZXJIVE1MID0gJ0NvbW1lbnRzJztcblxuICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRzJyk7XG5cbiAgY29uc3Qgc2hvd0NvbW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbW1lbnRzLmlubmVySFRNTCA9ICcnO1xuICAgIGdldENvbW1lbnRzKHBva2Vtb24ubmFtZSkudGhlbigocGttQ29tbWVudHMpID0+IHtcbiAgICAgIHBrbUNvbW1lbnRzLmZvckVhY2goKHBrbUNvbW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICR7cGttQ29tbWVudC5jcmVhdGlvbl9kYXRlfSBcbiAgICAgICAgICAke3BrbUNvbW1lbnQudXNlcm5hbWV9OiBcbiAgICAgICAgICAke3BrbUNvbW1lbnQuY29tbWVudH1cbiAgICAgICAgICBgO1xuICAgICAgICBjb21tZW50cy5hcHBlbmRDaGlsZChjb21tZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNob3dDb21tZW50cygpO1xuXG4gIGNvbnN0IGFkZENvbW1lbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGFkZENvbW1lbnRUaXRsZS5pbm5lckhUTUwgPSAnQWRkIGEgY29tbWVudCc7XG5cbiAgY29uc3QgYWRkQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgYWRkQ29tbWVudC5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudCcpO1xuXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBuYW1lJyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcblxuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdjb21tZW50Jyk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tbWVudCcpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgQ29tbWVudCcpO1xuXG4gIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyk7XG4gIG1zZy5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICBtc2cuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC1idG4nKTtcbiAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdTdWJtaXQnO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG5hbWVJbnB1dC52YWx1ZS5sZW5ndGggPCAxIHx8IG5hbWVJbnB1dC52YWx1ZS5sZW5ndGggPiA4KSB7XG4gICAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgncmVkJyk7XG4gICAgICB0ZXh0QXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdyZWQnKTtcbiAgICAgIG1zZy5pbm5lckhUTUwgPSAnKllvdXIgbmFtZSBzaG91bGQgaGF2ZSBiZXR3ZWVuIDEgYW5kIDggY2hhcmFjdGVycyonO1xuICAgIH0gZWxzZSBpZiAodGV4dEFyZWEudmFsdWUubGVuZ3RoIDwgNSB8fCB0ZXh0QXJlYS52YWx1ZS5sZW5ndGggPiAxMDApIHtcbiAgICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdyZWQnKTtcbiAgICAgIHRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICAgICAgbXNnLmlubmVySFRNTCA9ICdDb21tZW50IHNob3VsZCBoYXZlIGJldHdlZW4gNSBhbmQgMTAwIGNoYXJhY3RlcnMnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3N0Q29tbWVudHMobmFtZUlucHV0LnZhbHVlLCB0ZXh0QXJlYS52YWx1ZSwgcG9rZW1vbi5uYW1lKVxuICAgICAgICAudGhlbigoKSA9PiAoZ2V0Q29tbWVudHMocG9rZW1vbi5uYW1lKSkudGhlbigoKSA9PiBzaG93Q29tbWVudHMoKSkpO1xuICAgICAgbmFtZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZCcpO1xuICAgICAgdGV4dEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4gICAgICBhZGRDb21tZW50LnJlc2V0KCk7XG4gICAgfVxuICB9KTtcblxuICBpbm5lckZyYW1lLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgaW1nRnJhbWUuYXBwZW5kQ2hpbGQobW9kYWxDcm9zcyk7XG4gIGltZ0ZyYW1lLmFwcGVuZENoaWxkKGlubmVyRnJhbWUpO1xuXG4gIHR5cGVMaXN0LmFwcGVuZENoaWxkKHR5cGUxKTtcbiAgaWYgKHR5cGUyKSB7XG4gICAgdHlwZUxpc3QuYXBwZW5kQ2hpbGQodHlwZTIpO1xuICB9XG5cbiAgYWRkQ29tbWVudC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICBhZGRDb21tZW50LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgYWRkQ29tbWVudC5hcHBlbmRDaGlsZChtc2cpO1xuICBhZGRDb21tZW50LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGltZ0ZyYW1lKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHBrbU5hbWUpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocGttVHlwZXMpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodHlwZUxpc3QpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25UaXRsZSk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb21tZW50c1RpdGxlKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbW1lbnRzKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGFkZENvbW1lbnRUaXRsZSk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChhZGRDb21tZW50KTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9wVXA7IiwiY29uc3QgaW52b2x2ZW1lbnRVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZXdXS2o3elJmTTA1cFlRUmNBNHIvY29tbWVudHMnO1xuXG5jb25zdCBwb3N0Q29tbWVudHMgPSAobmFtZSwgY29tbWVudDEsIHBva2Vtb24pID0+IGZldGNoKGludm9sdmVtZW50VVJMLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgaXRlbV9pZDogcG9rZW1vbixcbiAgICB1c2VybmFtZTogbmFtZSxcbiAgICBjb21tZW50OiBjb21tZW50MSxcbiAgfSksXG4gIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCBwb3N0Q29tbWVudHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGZldGNoQXBpIGZyb20gJy4vZmV0Y2hBcGkuanMnO1xuXG53aW5kb3cub25sb2FkID0gZmV0Y2hBcGk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9