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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: monospace;\r\n  padding-bottom: 50px;\r\n}\r\n\r\nheader,\r\nnav,\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 120px;\r\n}\r\n\r\nnav {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton,\r\n.heart,\r\n.modal-cross {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  width: 40%;\r\n  margin: 15px auto;\r\n  padding: 7px 10px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #320064;\r\n  color: white;\r\n  transform: translateY(-2px);\r\n  transition: all 300ms ease-in-out;\r\n}\r\n\r\n.page-img {\r\n  width: 80px;\r\n}\r\n\r\n.page-img img {\r\n  width: 100%;\r\n}\r\n\r\n.card ul,\r\n.nav-links {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.nav-links li {\r\n  margin-right: 10px;\r\n}\r\n\r\n.type-list li {\r\n  background-color: lightgray;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.nav-links li,\r\n.card ul li {\r\n  display: inline-block;\r\n  list-style: none;\r\n}\r\n\r\n.card ul li {\r\n  background-color: lightgray;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  margin: 0 10px;\r\n}\r\n\r\n/* Cards Section Styling */\r\n\r\n#card-section {\r\n  display: grid;\r\n  gap: 25px;\r\n  width: 80%;\r\n  margin: 40px auto;\r\n  text-align: center;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\r\n  width: 100%;\r\n  padding: 0 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  border-radius: 7px;\r\n}\r\n\r\n.card:hover {\r\n  border: 3px solid #333;\r\n  transform: scale(1.06);\r\n  transition: 500ms ease-in-out;\r\n}\r\n\r\n.card img {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.card h1 {\r\n  font-size: 35px;\r\n}\r\n\r\n.likes-div {\r\n  display: flex;\r\n  gap: 15px;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n}\r\n\r\n.heart,\r\n#like {\r\n  font-size: 20px;\r\n}\r\n\r\n.heart {\r\n  color: rgb(189, 187, 187);\r\n}\r\n\r\n.heart:active {\r\n  color: red;\r\n  transition: 200ms;\r\n}\r\n\r\n/* Footer Styling */\r\n\r\nfooter {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 90%;\r\n  height: 50px;\r\n  left: 10%;\r\n}\r\n\r\nfooter a,\r\n.nav-links li a {\r\n  text-decoration: none;\r\n  color: #333;\r\n  font-size: 15px;\r\n  transition: 300ms ease-in-out;\r\n}\r\n\r\nfooter a:hover,\r\n.nav-links li a:hover {\r\n  border-bottom: 1px solid #333;\r\n  opacity: 0.7;\r\n}\r\n\r\n/* Modals */\r\n\r\n.centering {\r\n  justify-content: center !important;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #333d;\r\n}\r\n\r\n.modal h4 {\r\n  font-size: 20px;\r\n  margin-top: 15px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.modal-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: white;\r\n  height: 95vh;\r\n  padding-bottom: 20px;\r\n  margin: 2.5vh 2.5vw;\r\n  border-radius: 15px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.img-frame {\r\n  position: relative;\r\n  width: 100%;\r\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.modal-cross {\r\n  position: fixed;\r\n  top: 4%;\r\n  right: 7.5%;\r\n  font-size: 40px;\r\n  color: #320064;\r\n  transition: 0.3s;\r\n}\r\n\r\n.modal-cross:hover {\r\n  color: purple;\r\n}\r\n\r\n.inner-frame {\r\n  background-color: white;\r\n  width: 250px;\r\n  margin: auto;\r\n}\r\n\r\n.modal-image {\r\n  display: block;\r\n  width: 250px;\r\n  margin: auto;\r\n}\r\n\r\n.pkm-name {\r\n  font-size: 32px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.type-list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  list-style-type: none;\r\n  width: 50%;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  width: 90%;\r\n}\r\n\r\n.modal input,\r\n.modal textarea {\r\n  margin-top: 15px;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.modal textarea {\r\n  height: 100px;\r\n}\r\n\r\n.red {\r\n  border-color: red;\r\n}\r\n\r\n.error {\r\n  text-align: center;\r\n  color: maroon;\r\n  width: 80%;\r\n  height: 40px;\r\n  margin: auto;\r\n  margin-top: 20px;\r\n}\r\n\r\n/* -------------------------- */\r\n\r\n@media all and (min-width: 768px) {\r\n  header {\r\n    height: 180px;\r\n  }\r\n\r\n  nav {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    gap: 40px;\r\n  }\r\n\r\n  .page-img {\r\n    width: 120px;\r\n  }\r\n\r\n  .nav-links li {\r\n    margin-right: 40px;\r\n  }\r\n\r\n  .nav-links li a {\r\n    font-size: 18px;\r\n  }\r\n\r\n  #card-section {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  footer {\r\n    width: 80%;\r\n    left: 10%;\r\n  }\r\n\r\n  .modal-content {\r\n    height: 95vh;\r\n    margin: 2.5vh 10vw;\r\n  }\r\n\r\n  .modal-cross {\r\n    top: 5%;\r\n    right: 15%;\r\n  }\r\n}\r\n\r\n@media all and (min-width: 1025px) {\r\n  nav {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    gap: 40px;\r\n  }\r\n\r\n  .page-img {\r\n    width: 160px;\r\n  }\r\n\r\n  .nav-links li {\r\n    margin-right: 60px;\r\n  }\r\n\r\n  .nav-links li a {\r\n    font-size: 20px;\r\n  }\r\n\r\n  #card-section {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .card:hover {\r\n    transform: scale(1.1);\r\n  }\r\n\r\n  .card img {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  footer {\r\n    width: 70%;\r\n    left: 15%;\r\n  }\r\n\r\n  .modal {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .modal-content {\r\n    height: 90vh;\r\n    margin: 5vh 20vw;\r\n  }\r\n\r\n  .modal-cross {\r\n    top: 7.5%;\r\n    right: 23%;\r\n  }\r\n\r\n  .pkm-name {\r\n    font-size: 54px;\r\n  }\r\n\r\n  .modal h4 {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .type-list {\r\n    width: 30%;\r\n  }\r\n\r\n  .add-comment {\r\n    width: 65%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: monospace;\r\n  padding-bottom: 50px;\r\n}\r\n\r\nheader,\r\nnav,\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 120px;\r\n}\r\n\r\nnav {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton,\r\n.heart,\r\n.modal-cross {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  width: 40%;\r\n  margin: 15px auto;\r\n  padding: 7px 10px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #320064;\r\n  color: white;\r\n  transform: translateY(-2px);\r\n  transition: all 300ms ease-in-out;\r\n}\r\n\r\n.page-img {\r\n  width: 80px;\r\n}\r\n\r\n.page-img img {\r\n  width: 100%;\r\n}\r\n\r\n.card ul,\r\n.nav-links {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.nav-links li {\r\n  margin-right: 10px;\r\n}\r\n\r\n.type-list li {\r\n  background-color: lightgray;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.nav-links li,\r\n.card ul li {\r\n  display: inline-block;\r\n  list-style: none;\r\n}\r\n\r\n.card ul li {\r\n  background-color: lightgray;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  margin: 0 10px;\r\n}\r\n\r\n/* Cards Section Styling */\r\n\r\n#card-section {\r\n  display: grid;\r\n  gap: 25px;\r\n  width: 80%;\r\n  margin: 40px auto;\r\n  text-align: center;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\r\n  width: 100%;\r\n  padding: 0 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  border-radius: 7px;\r\n}\r\n\r\n.card:hover {\r\n  border: 3px solid #333;\r\n  transform: scale(1.06);\r\n  transition: 500ms ease-in-out;\r\n}\r\n\r\n.card img {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.card h1 {\r\n  font-size: 35px;\r\n}\r\n\r\n.likes-div {\r\n  display: flex;\r\n  gap: 15px;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n}\r\n\r\n.heart,\r\n#like {\r\n  font-size: 20px;\r\n}\r\n\r\n.heart {\r\n  color: rgb(189, 187, 187);\r\n}\r\n\r\n.heart:active {\r\n  color: red;\r\n  transition: 200ms;\r\n}\r\n\r\n/* Footer Styling */\r\n\r\nfooter {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 90%;\r\n  height: 50px;\r\n  left: 10%;\r\n}\r\n\r\nfooter a,\r\n.nav-links li a {\r\n  text-decoration: none;\r\n  color: #333;\r\n  font-size: 15px;\r\n  transition: 300ms ease-in-out;\r\n}\r\n\r\nfooter a:hover,\r\n.nav-links li a:hover {\r\n  border-bottom: 1px solid #333;\r\n  opacity: 0.7;\r\n}\r\n\r\n/* Modals */\r\n\r\n.centering {\r\n  justify-content: center !important;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #333d;\r\n}\r\n\r\n.modal h4 {\r\n  font-size: 20px;\r\n  margin-top: 15px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.modal-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: white;\r\n  height: 95vh;\r\n  padding-bottom: 20px;\r\n  margin: 2.5vh 2.5vw;\r\n  border-radius: 15px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.img-frame {\r\n  position: relative;\r\n  width: 100%;\r\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.modal-cross {\r\n  position: fixed;\r\n  top: 4%;\r\n  right: 7.5%;\r\n  font-size: 40px;\r\n  color: #320064;\r\n  transition: 0.3s;\r\n}\r\n\r\n.modal-cross:hover {\r\n  color: purple;\r\n}\r\n\r\n.inner-frame {\r\n  background-color: white;\r\n  width: 250px;\r\n  margin: auto;\r\n}\r\n\r\n.modal-image {\r\n  display: block;\r\n  width: 250px;\r\n  margin: auto;\r\n}\r\n\r\n.pkm-name {\r\n  font-size: 32px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.type-list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  list-style-type: none;\r\n  width: 50%;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  width: 90%;\r\n}\r\n\r\n.modal input,\r\n.modal textarea {\r\n  margin-top: 15px;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.modal textarea {\r\n  height: 100px;\r\n}\r\n\r\n.red {\r\n  border-color: red;\r\n}\r\n\r\n.error {\r\n  text-align: center;\r\n  color: maroon;\r\n  width: 80%;\r\n  height: 40px;\r\n  margin: auto;\r\n  margin-top: 20px;\r\n}\r\n\r\n/* -------------------------- */\r\n\r\n@media all and (min-width: 768px) {\r\n  header {\r\n    height: 180px;\r\n  }\r\n\r\n  nav {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    gap: 40px;\r\n  }\r\n\r\n  .page-img {\r\n    width: 120px;\r\n  }\r\n\r\n  .nav-links li {\r\n    margin-right: 40px;\r\n  }\r\n\r\n  .nav-links li a {\r\n    font-size: 18px;\r\n  }\r\n\r\n  #card-section {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  footer {\r\n    width: 80%;\r\n    left: 10%;\r\n  }\r\n\r\n  .modal-content {\r\n    height: 95vh;\r\n    margin: 2.5vh 10vw;\r\n  }\r\n\r\n  .modal-cross {\r\n    top: 5%;\r\n    right: 15%;\r\n  }\r\n}\r\n\r\n@media all and (min-width: 1025px) {\r\n  nav {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    gap: 40px;\r\n  }\r\n\r\n  .page-img {\r\n    width: 160px;\r\n  }\r\n\r\n  .nav-links li {\r\n    margin-right: 60px;\r\n  }\r\n\r\n  .nav-links li a {\r\n    font-size: 20px;\r\n  }\r\n\r\n  #card-section {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .card:hover {\r\n    transform: scale(1.1);\r\n  }\r\n\r\n  .card img {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  footer {\r\n    width: 70%;\r\n    left: 15%;\r\n  }\r\n\r\n  .modal {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .modal-content {\r\n    height: 90vh;\r\n    margin: 5vh 20vw;\r\n  }\r\n\r\n  .modal-cross {\r\n    top: 7.5%;\r\n    right: 23%;\r\n  }\r\n\r\n  .pkm-name {\r\n    font-size: 54px;\r\n  }\r\n\r\n  .modal h4 {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .type-list {\r\n    width: 30%;\r\n  }\r\n\r\n  .add-comment {\r\n    width: 65%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsNkJBQTZCLEtBQUssY0FBYyx5QkFBeUIsc0JBQXNCLGtCQUFrQixtQkFBbUIsNkJBQTZCLDJCQUEyQixLQUFLLG1DQUFtQyxvQkFBb0IsMEJBQTBCLEtBQUssZ0JBQWdCLGtCQUFrQixvQkFBb0IsS0FBSyxhQUFhLGlCQUFpQixxQkFBcUIsS0FBSyw0Q0FBNEMsc0JBQXNCLEtBQUssZ0JBQWdCLGlCQUFpQix3QkFBd0Isd0JBQXdCLEtBQUssc0JBQXNCLGdDQUFnQyxtQkFBbUIsa0NBQWtDLHdDQUF3QyxLQUFLLG1CQUFtQixrQkFBa0IsS0FBSyx1QkFBdUIsa0JBQWtCLEtBQUssaUNBQWlDLGlCQUFpQixnQkFBZ0IsS0FBSyx1QkFBdUIseUJBQXlCLEtBQUssdUJBQXVCLGtDQUFrQyx3QkFBd0IseUJBQXlCLEtBQUssdUNBQXVDLDRCQUE0Qix1QkFBdUIsS0FBSyxxQkFBcUIsa0NBQWtDLHdCQUF3Qix5QkFBeUIscUJBQXFCLEtBQUssMERBQTBELG9CQUFvQixnQkFBZ0IsaUJBQWlCLHdCQUF3Qix5QkFBeUIsS0FBSyxlQUFlLHFEQUFxRCxrQkFBa0Isc0JBQXNCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLHlCQUF5QixLQUFLLHFCQUFxQiw2QkFBNkIsNkJBQTZCLG9DQUFvQyxLQUFLLG1CQUFtQixpQkFBaUIscUJBQXFCLEtBQUssa0JBQWtCLHNCQUFzQixLQUFLLG9CQUFvQixvQkFBb0IsZ0JBQWdCLDhCQUE4Qiw0QkFBNEIsS0FBSywwQkFBMEIsc0JBQXNCLEtBQUssZ0JBQWdCLGdDQUFnQyxLQUFLLHVCQUF1QixpQkFBaUIsd0JBQXdCLEtBQUssNENBQTRDLHlCQUF5QixnQkFBZ0IsaUJBQWlCLG1CQUFtQixnQkFBZ0IsS0FBSyxzQ0FBc0MsNEJBQTRCLGtCQUFrQixzQkFBc0Isb0NBQW9DLEtBQUssa0RBQWtELG9DQUFvQyxtQkFBbUIsS0FBSyx3Q0FBd0MseUNBQXlDLEtBQUssZ0JBQWdCLHNCQUFzQixhQUFhLGtCQUFrQixtQkFBbUIsOEJBQThCLEtBQUssbUJBQW1CLHNCQUFzQix1QkFBdUIsMEJBQTBCLEtBQUssd0JBQXdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHdCQUF3QixtQkFBbUIsMkJBQTJCLDBCQUEwQiwwQkFBMEIseUJBQXlCLEtBQUssb0JBQW9CLHlCQUF5QixrQkFBa0IscURBQXFELEtBQUssc0JBQXNCLHNCQUFzQixjQUFjLGtCQUFrQixzQkFBc0IscUJBQXFCLHVCQUF1QixLQUFLLDRCQUE0QixvQkFBb0IsS0FBSyxzQkFBc0IsOEJBQThCLG1CQUFtQixtQkFBbUIsS0FBSyxzQkFBc0IscUJBQXFCLG1CQUFtQixtQkFBbUIsS0FBSyxtQkFBbUIsc0JBQXNCLHVCQUF1QixLQUFLLG9CQUFvQixvQkFBb0IscUNBQXFDLDRCQUE0QixpQkFBaUIsS0FBSyxzQkFBc0Isb0JBQW9CLDZCQUE2QixtQkFBbUIsaUJBQWlCLEtBQUssMENBQTBDLHVCQUF1QixrQkFBa0Isb0JBQW9CLEtBQUsseUJBQXlCLG9CQUFvQixLQUFLLGNBQWMsd0JBQXdCLEtBQUssZ0JBQWdCLHlCQUF5QixvQkFBb0IsaUJBQWlCLG1CQUFtQixtQkFBbUIsdUJBQXVCLEtBQUssbUZBQW1GLGNBQWMsc0JBQXNCLE9BQU8sZUFBZSxtQkFBbUIsdUJBQXVCLGtCQUFrQixPQUFPLHFCQUFxQixxQkFBcUIsT0FBTyx5QkFBeUIsMkJBQTJCLE9BQU8sMkJBQTJCLHdCQUF3QixPQUFPLHlCQUF5Qiw4Q0FBOEMsT0FBTyxrQkFBa0IsbUJBQW1CLGtCQUFrQixPQUFPLDBCQUEwQixxQkFBcUIsMkJBQTJCLE9BQU8sd0JBQXdCLGdCQUFnQixtQkFBbUIsT0FBTyxLQUFLLDRDQUE0QyxXQUFXLG1CQUFtQix1QkFBdUIsa0JBQWtCLE9BQU8scUJBQXFCLHFCQUFxQixPQUFPLHlCQUF5QiwyQkFBMkIsT0FBTywyQkFBMkIsd0JBQXdCLE9BQU8seUJBQXlCLDhDQUE4QyxPQUFPLHVCQUF1Qiw4QkFBOEIsT0FBTyxxQkFBcUIsbUJBQW1CLHVCQUF1QixPQUFPLGtCQUFrQixtQkFBbUIsa0JBQWtCLE9BQU8sa0JBQWtCLHdCQUF3QixPQUFPLDBCQUEwQixxQkFBcUIseUJBQXlCLE9BQU8sd0JBQXdCLGtCQUFrQixtQkFBbUIsT0FBTyxxQkFBcUIsd0JBQXdCLE9BQU8scUJBQXFCLHdCQUF3QixPQUFPLHNCQUFzQixtQkFBbUIsT0FBTyx3QkFBd0IsbUJBQW1CLE9BQU8sS0FBSyxXQUFXLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUss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V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZ0I7QUFDVTtBQUNIOztBQUU1Qzs7QUFFQTtBQUNBLG9CQUFvQixxREFBUTtBQUM1QixtQ0FBbUMseURBQVcsY0FBYztBQUM1RCxRQUFRLHlEQUFjO0FBQ3RCLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2NvdW50ZXJzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2Rpc3BsYXlQb2tlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9mZXRjaEFwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9mZXRjaExpa2VzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2dldF9jb21tZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3BvcF91cC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9wb3N0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvcG9zdF9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLFxcclxcbm5hdixcXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG4uaGVhcnQsXFxyXFxuLm1vZGFsLWNyb3NzIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDE1cHggYXV0bztcXHJcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMDA2NDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtaW1nIHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB1bCxcXHJcXG4ubmF2LWxpbmtzIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGkge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1saXN0IGxpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGxpLFxcclxcbi5jYXJkIHVsIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHVsIGxpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIENhcmRzIFNlY3Rpb24gU3R5bGluZyAqL1xcclxcblxcclxcbiNjYXJkLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzMzM7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xcclxcbiAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCxcXHJcXG4jbGlrZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCB7XFxyXFxuICBjb2xvcjogcmdiKDE4OSwgMTg3LCAxODcpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQ6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyIFN0eWxpbmcgKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGxlZnQ6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGEsXFxyXFxuLm5hdi1saW5rcyBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhOmhvdmVyLFxcclxcbi5uYXYtbGlua3MgbGkgYTpob3ZlciB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWxzICovXFxyXFxuXFxyXFxuLmNlbnRlcmluZyB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogOTV2aDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAyLjV2aCAyLjV2dztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5pbWctZnJhbWUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY3Jvc3Mge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA0JTtcXHJcXG4gIHJpZ2h0OiA3LjUlO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgY29sb3I6ICMzMjAwNjQ7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY3Jvc3M6aG92ZXIge1xcclxcbiAgY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyLWZyYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wa20tbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW5wdXQsXFxyXFxuLm1vZGFsIHRleHRhcmVhIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB0ZXh0YXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3Ige1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IG1hcm9vbjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2IHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wYWdlLWltZyB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlua3MgbGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmtzIGxpIGEge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2FyZC1zZWN0aW9uIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGxlZnQ6IDEwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiA5NXZoO1xcclxcbiAgICBtYXJnaW46IDIuNXZoIDEwdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwtY3Jvc3Mge1xcclxcbiAgICB0b3A6IDUlO1xcclxcbiAgICByaWdodDogMTUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcXHJcXG4gIG5hdiB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGFnZS1pbWcge1xcclxcbiAgICB3aWR0aDogMTYwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmtzIGxpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcyBsaSBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NhcmQtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkIGltZyB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgbGVmdDogMTUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIG1hcmdpbjogNXZoIDIwdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwtY3Jvc3Mge1xcclxcbiAgICB0b3A6IDcuNSU7XFxyXFxuICAgIHJpZ2h0OiAyMyU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGttLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDU0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwgaDQge1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudHlwZS1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQtY29tbWVudCB7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7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QUNoQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUEsK0JBQStCOztBQUUvQjtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLFxcclxcbm5hdixcXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG4uaGVhcnQsXFxyXFxuLm1vZGFsLWNyb3NzIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDE1cHggYXV0bztcXHJcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMDA2NDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtaW1nIHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB1bCxcXHJcXG4ubmF2LWxpbmtzIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua3MgbGkge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1saXN0IGxpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmtzIGxpLFxcclxcbi5jYXJkIHVsIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHVsIGxpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIENhcmRzIFNlY3Rpb24gU3R5bGluZyAqL1xcclxcblxcclxcbiNjYXJkLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzMzM7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xcclxcbiAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCxcXHJcXG4jbGlrZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCB7XFxyXFxuICBjb2xvcjogcmdiKDE4OSwgMTg3LCAxODcpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQ6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyIFN0eWxpbmcgKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGxlZnQ6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGEsXFxyXFxuLm5hdi1saW5rcyBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhOmhvdmVyLFxcclxcbi5uYXYtbGlua3MgbGkgYTpob3ZlciB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWxzICovXFxyXFxuXFxyXFxuLmNlbnRlcmluZyB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogOTV2aDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAyLjV2aCAyLjV2dztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5pbWctZnJhbWUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY3Jvc3Mge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA0JTtcXHJcXG4gIHJpZ2h0OiA3LjUlO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgY29sb3I6ICMzMjAwNjQ7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY3Jvc3M6aG92ZXIge1xcclxcbiAgY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyLWZyYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wa20tbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW5wdXQsXFxyXFxuLm1vZGFsIHRleHRhcmVhIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB0ZXh0YXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3Ige1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IG1hcm9vbjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2IHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wYWdlLWltZyB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlua3MgbGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmtzIGxpIGEge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2FyZC1zZWN0aW9uIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGxlZnQ6IDEwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiA5NXZoO1xcclxcbiAgICBtYXJnaW46IDIuNXZoIDEwdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwtY3Jvc3Mge1xcclxcbiAgICB0b3A6IDUlO1xcclxcbiAgICByaWdodDogMTUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcXHJcXG4gIG5hdiB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGFnZS1pbWcge1xcclxcbiAgICB3aWR0aDogMTYwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmtzIGxpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rcyBsaSBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NhcmQtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkIGltZyB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgbGVmdDogMTUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIG1hcmdpbjogNXZoIDIwdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwtY3Jvc3Mge1xcclxcbiAgICB0b3A6IDcuNSU7XFxyXFxuICAgIHJpZ2h0OiAyMyU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGttLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDU0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwgaDQge1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudHlwZS1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQtY29tbWVudCB7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBpdGVtQ291bnRlciA9IChhbGxQb2tlbW9uKSA9PiBhbGxQb2tlbW9uLmxlbmd0aDtcblxuY29uc3QgY29tbWVudENvdW50ZXIgPSAoY29tbWVudHMsIHRpdGxlLCBsaXN0KSA9PiB7XG4gIGlmIChjb21tZW50cy5sZW5ndGggPj0gMSkge1xuICAgIHRpdGxlLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtjb21tZW50cy5sZW5ndGh9KWA7XG4gIH0gZWxzZSB7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ0NvbW1lbnRzICgwKSc7XG4gICAgbGlzdC5pbm5lckhUTUwgPSAnTm8gY29tbWVudHMuLi4geWV0ISc7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGl0ZW1Db3VudGVyLCBjb21tZW50Q291bnRlciB9OyIsImltcG9ydCBwb3BVcCBmcm9tICcuL3BvcF91cC5qcyc7XG5pbXBvcnQgZmV0Y2hMaWtlcyBmcm9tICcuL2ZldGNoTGlrZXMuanMnO1xuaW1wb3J0IHBvc3RMaWtlcyBmcm9tICcuL3Bvc3RMaWtlcy5qcyc7XG5cbmNvbnN0IGRpc3BsYXlQb2tlbW9uID0gYXN5bmMgKHBva2Vtb24pID0+IHtcbiAgcG9rZW1vbi5mb3JFYWNoKChwa20pID0+IHtcbiAgICBmZXRjaChwa20udXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihhc3luYyAocGttRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBjYXJkU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXNlY3Rpb24nKTtcbiAgICAgICAgY29uc3QgcG9rZW1vblR5cGVzID0gcGttRGF0YS50eXBlcztcbiAgICAgICAgY29uc3QgcG9rZW1vbkltYWdlID0gcGttRGF0YS5zcHJpdGVzLm90aGVyO1xuXG4gICAgICAgIGNvbnN0IG91dGVyTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBvdXRlckxpLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgICAgICBjb25zdCBwb2tlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IC8vIENyZWF0ZXMgcG9rZW1vbiBpbWFnZSBlbGVtZW50XG4gICAgICAgIHBva2VJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtwb2tlbW9uSW1hZ2VbJ29mZmljaWFsLWFydHdvcmsnXS5mcm9udF9kZWZhdWx0fWApO1xuICAgICAgICBwb2tlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1Bva2Vtb24nKTtcblxuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7IC8vIENyZWF0ZXMgUG9rZW1vbiBuYW1lIGVsZW1lbnRcbiAgICAgICAgaDEuaW5uZXJIVE1MID0gYCR7cGttRGF0YS5uYW1lfWA7XG5cbiAgICAgICAgY29uc3QgbGlrZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gQ3JlYXRlcyBkaXYgdG8gaG9sZCBoZWFydCBpY29uIGFuZCBsaWtlcyBjb3VudCBlbGVtZW50XG4gICAgICAgIGxpa2VzRGl2LmNsYXNzTmFtZSA9ICdsaWtlcy1kaXYnO1xuXG4gICAgICAgIGNvbnN0IGxpa2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7IC8vIENyZWF0ZXMgaGVhcnQgaWNvblxuICAgICAgICBsaWtlSW1nLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1oZWFydCcsICdoZWFydCcpO1xuICAgICAgICBsaWtlSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtwa21EYXRhLm5hbWV9YCk7XG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgLy8gQ3JlYXRlcyBsaWtlcyBjb3VudCBlbGVtZW50XG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdpZCcsICdsaWtlJyk7XG5cbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpOyAvLyBDcmVhdGVzIHR5cGVzIGxpc3QgZWxlbWVudFxuICAgICAgICBwb2tlbW9uVHlwZXMuZm9yRWFjaCgocG9rZW1vbikgPT4ge1xuICAgICAgICAgIHVsLmlubmVySFRNTCArPSBgPGxpPiR7cG9rZW1vbi50eXBlLm5hbWV9PC9saT5gO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgLy8gQ3JlYXRlcyBidXR0b24gZWxlbWVudFxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChwa21EYXRhLm5hbWUsICdidG4nKTtcbiAgICAgICAgYnRuLmlubmVySFRNTCA9ICdDb21tZW50JztcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHBvcFVwKHBrbURhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBvdXRlckxpLmFwcGVuZENoaWxkKHBva2VJbWcpOyAvLyBBcHBlbmQgSW1hZ2UgVG8gTGlcbiAgICAgICAgb3V0ZXJMaS5hcHBlbmRDaGlsZChoMSk7IC8vIEFwcGVuZCBQb2tlbW9uIE5hbWUgVG8gTGlcbiAgICAgICAgbGlrZXNEaXYuYXBwZW5kQ2hpbGQobGlrZUltZyk7IC8vIEFwcGVuZCBIZWFydCBJY29uIFRvIFBhcmVudCBEaXZcbiAgICAgICAgbGlrZXNEaXYuYXBwZW5kQ2hpbGQoc3Bhbik7IC8vIEFwcGVuZCBMaWtlcyBDb3VudCBUbyBQYXJlbnQgRGl2XG4gICAgICAgIG91dGVyTGkuYXBwZW5kQ2hpbGQobGlrZXNEaXYpOyAvLyBBcHBlbmQgUG9rZW1vbiBOYW1lIFRvIExpXG4gICAgICAgIG91dGVyTGkuYXBwZW5kQ2hpbGQodWwpOyAvLyBBcHBlbmQgVHlwZXMgTGlzdCBUbyBMaVxuICAgICAgICBvdXRlckxpLmFwcGVuZENoaWxkKGJ0bik7IC8vIEFwcGVuZCBDb21tZW50IEJ1dHRvbiBUbyBMaVxuXG4gICAgICAgIGNhcmRTZWN0aW9uLmFwcGVuZENoaWxkKG91dGVyTGkpOyAvLyBBcHBlbmQgTGkgVG8gUGFyZW50IEVsZW1lbnRcblxuICAgICAgICBhd2FpdCBmZXRjaExpa2VzKHBrbURhdGEsIHNwYW4pOyAvLyBEaXNwbGF5cyBudW1iZXIgb2YgbGlrZXMgaW4gVUlcblxuICAgICAgICAvLyBFdmVudExpc3RlbmVyIFRvIEluY3JlbWVudCBMaWtlcyBDb3VudCBPbiBDbGlja1xuICAgICAgICBsaWtlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IHBvc3RMaWtlcyhsaWtlSW1nLmlkKTtcbiAgICAgICAgICBhd2FpdCBmZXRjaExpa2VzKHBrbURhdGEsIHNwYW4pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQb2tlbW9uOyIsImNvbnN0IGZldGNoQXBpID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MTgmb2Zmc2V0PTAnKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQXBpOyIsImNvbnN0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ld1dLajd6UmZNMDVwWVFSY0E0ci9saWtlcy8nO1xuXG5jb25zdCBmZXRjaExpa2VzID0gKHBva2Vtb24sIGl0ZW0pID0+IGZldGNoKHVybClcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKChsaWtlcykgPT4ge1xuICAgIGxpa2VzLmZvckVhY2goKHBrTGlrZSkgPT4ge1xuICAgICAgaWYgKHBrTGlrZS5pdGVtX2lkID09PSBwb2tlbW9uLm5hbWUpIHtcbiAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgJHtwa0xpa2UubGlrZXN9IGxpa2VzYDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoTGlrZXM7IiwiY29uc3QgaW52b2x2ZW1lbnRVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZXdXS2o3elJmTTA1cFlRUmNBNHIvY29tbWVudHMnO1xuXG5jb25zdCBnZXRDb21tZW50cyA9IChpdGVtSUQpID0+IGZldGNoKGAke2ludm9sdmVtZW50VVJMfT9pdGVtX2lkPSR7aXRlbUlEfWApXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29tbWVudHM7IiwiaW1wb3J0IHsgY29tbWVudENvdW50ZXIgfSBmcm9tICcuL2NvdW50ZXJzLmpzJztcbmltcG9ydCBnZXRDb21tZW50cyBmcm9tICcuL2dldF9jb21tZW50LmpzJztcbmltcG9ydCBwb3N0Q29tbWVudHMgZnJvbSAnLi9wb3N0X2NvbW1lbnRzLmpzJztcblxuY29uc3QgcG9wVXAgPSAocG9rZW1vbikgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuICBjb25zdCBpbWdGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWdGcmFtZS5jbGFzc0xpc3QuYWRkKCdpbWctZnJhbWUnKTtcblxuICBjb25zdCBtb2RhbENyb3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBtb2RhbENyb3NzLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS10aW1lcycsICdtb2RhbC1jcm9zcycpO1xuICBtb2RhbENyb3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwucmVtb3ZlKCkpO1xuXG4gIGNvbnN0IGlubmVyRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5uZXJGcmFtZS5jbGFzc0xpc3QuYWRkKCdpbm5lci1mcmFtZScpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBwb2tlbW9uLnNwcml0ZXMub3RoZXJbJ29mZmljaWFsLWFydHdvcmsnXS5mcm9udF9kZWZhdWx0KTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYCR7cG9rZW1vbi5uYW1lfSBvZmZpY2lhbCBhcnR3b3JrYCk7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1pbWFnZScpO1xuXG4gIGNvbnN0IHBrbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBwa21OYW1lLmNsYXNzTGlzdC5hZGQoJ3BrbS1uYW1lJyk7XG4gIHBrbU5hbWUuaW5uZXJIVE1MID0gcG9rZW1vbi5uYW1lO1xuXG4gIGNvbnN0IHBrbVR5cGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgcGttVHlwZXMuaW5uZXJIVE1MID0gJ1R5cGUnO1xuXG4gIGNvbnN0IHR5cGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdHlwZUxpc3QuY2xhc3NMaXN0LmFkZCgndHlwZS1saXN0Jyk7XG5cbiAgY29uc3QgdHlwZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0eXBlMS5pbm5lckhUTUwgPSBwb2tlbW9uLnR5cGVzWzBdLnR5cGUubmFtZTtcblxuICBsZXQgdHlwZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBpZiAocG9rZW1vbi50eXBlcy5sZW5ndGggPT09IDIpIHtcbiAgICB0eXBlMi5pbm5lckhUTUwgPSBwb2tlbW9uLnR5cGVzWzFdLnR5cGUubmFtZTtcbiAgfSBlbHNlIHtcbiAgICB0eXBlTGlzdC5jbGFzc0xpc3QuYWRkKCdjZW50ZXJpbmcnKTtcbiAgICB0eXBlMiA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGxvY2F0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ0xvY2F0aW9uJztcblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZmV0Y2gocG9rZW1vbi5sb2NhdGlvbl9hcmVhX2VuY291bnRlcnMpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGxvY2F0aW9ucykgPT4ge1xuICAgICAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IGxvY2F0aW9uc1swXS5sb2NhdGlvbl9hcmVhLm5hbWUgfHwgJ0V2b2x1dGlvbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSAnRXZvbHV0aW9uJztcbiAgICAgIH1cbiAgICB9KTtcblxuICBjb25zdCBjb21tZW50c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29tbWVudHNUaXRsZS5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuXG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29tbWVudHMuY2xhc3NMaXN0LmFkZCgnY29tbWVudHMnKTtcblxuICBjb25zdCBzaG93Q29tbWVudHMgPSAoKSA9PiB7XG4gICAgY29tbWVudHMuaW5uZXJIVE1MID0gJyc7XG4gICAgZ2V0Q29tbWVudHMocG9rZW1vbi5uYW1lKS50aGVuKChwa21Db21tZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwa21Db21tZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgcGttQ29tbWVudCA9IHBrbUNvbW1lbnRzW2ldO1xuICAgICAgICBjb21tZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAke3BrbUNvbW1lbnQuY3JlYXRpb25fZGF0ZX0gXG4gICAgICAgICAgJHtwa21Db21tZW50LnVzZXJuYW1lfTogXG4gICAgICAgICAgJHtwa21Db21tZW50LmNvbW1lbnR9XG4gICAgICAgICAgYDtcbiAgICAgICAgY29tbWVudHMuYXBwZW5kQ2hpbGQoY29tbWVudCk7XG4gICAgICB9XG4gICAgICBjb21tZW50Q291bnRlcihwa21Db21tZW50cywgY29tbWVudHNUaXRsZSwgY29tbWVudHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIHNob3dDb21tZW50cygpO1xuXG4gIGNvbnN0IGFkZENvbW1lbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGFkZENvbW1lbnRUaXRsZS5pbm5lckhUTUwgPSAnQWRkIGEgY29tbWVudCc7XG5cbiAgY29uc3QgYWRkQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgYWRkQ29tbWVudC5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudCcpO1xuXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBuYW1lJyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcblxuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdjb21tZW50Jyk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tbWVudCcpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgQ29tbWVudCcpO1xuXG4gIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyk7XG4gIG1zZy5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICBtc2cuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC1idG4nKTtcbiAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdTdWJtaXQnO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG5hbWVJbnB1dC52YWx1ZS5sZW5ndGggPCAxIHx8IG5hbWVJbnB1dC52YWx1ZS5sZW5ndGggPiA4KSB7XG4gICAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgncmVkJyk7XG4gICAgICB0ZXh0QXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdyZWQnKTtcbiAgICAgIG1zZy5pbm5lckhUTUwgPSAnKllvdXIgbmFtZSBzaG91bGQgaGF2ZSBiZXR3ZWVuIDEgYW5kIDggY2hhcmFjdGVycyonO1xuICAgIH0gZWxzZSBpZiAodGV4dEFyZWEudmFsdWUubGVuZ3RoIDwgNSB8fCB0ZXh0QXJlYS52YWx1ZS5sZW5ndGggPiAxMDApIHtcbiAgICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdyZWQnKTtcbiAgICAgIHRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICAgICAgbXNnLmlubmVySFRNTCA9ICdDb21tZW50IHNob3VsZCBoYXZlIGJldHdlZW4gNSBhbmQgMTAwIGNoYXJhY3RlcnMnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3N0Q29tbWVudHMobmFtZUlucHV0LnZhbHVlLCB0ZXh0QXJlYS52YWx1ZSwgcG9rZW1vbi5uYW1lKVxuICAgICAgICAudGhlbigoKSA9PiAoZ2V0Q29tbWVudHMocG9rZW1vbi5uYW1lKSkudGhlbigoKSA9PiBzaG93Q29tbWVudHMoKSkpO1xuICAgICAgbmFtZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZCcpO1xuICAgICAgdGV4dEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4gICAgICBhZGRDb21tZW50LnJlc2V0KCk7XG4gICAgfVxuICB9KTtcblxuICBpbm5lckZyYW1lLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgaW1nRnJhbWUuYXBwZW5kQ2hpbGQobW9kYWxDcm9zcyk7XG4gIGltZ0ZyYW1lLmFwcGVuZENoaWxkKGlubmVyRnJhbWUpO1xuXG4gIHR5cGVMaXN0LmFwcGVuZENoaWxkKHR5cGUxKTtcbiAgaWYgKHR5cGUyKSB7XG4gICAgdHlwZUxpc3QuYXBwZW5kQ2hpbGQodHlwZTIpO1xuICB9XG5cbiAgYWRkQ29tbWVudC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICBhZGRDb21tZW50LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgYWRkQ29tbWVudC5hcHBlbmRDaGlsZChtc2cpO1xuICBhZGRDb21tZW50LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGltZ0ZyYW1lKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHBrbU5hbWUpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocGttVHlwZXMpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodHlwZUxpc3QpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25UaXRsZSk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb21tZW50c1RpdGxlKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbW1lbnRzKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGFkZENvbW1lbnRUaXRsZSk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChhZGRDb21tZW50KTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9wVXA7IiwiY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2V3V0tqN3pSZk0wNXBZUVJjQTRyL2xpa2VzLyc7XG5cbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChpdGVtMSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpdGVtMSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzdWx0LnRleHQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RMaWtlczsiLCJjb25zdCBpbnZvbHZlbWVudFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ld1dLajd6UmZNMDVwWVFSY0E0ci9jb21tZW50cyc7XG5cbmNvbnN0IHBvc3RDb21tZW50cyA9IChuYW1lLCBjb21tZW50MSwgcG9rZW1vbikgPT4gZmV0Y2goaW52b2x2ZW1lbnRVUkwsIHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICBpdGVtX2lkOiBwb2tlbW9uLFxuICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgIGNvbW1lbnQ6IGNvbW1lbnQxLFxuICB9KSxcbiAgaGVhZGVyczoge1xuICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHBvc3RDb21tZW50czsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZmV0Y2hBcGkgZnJvbSAnLi9mZXRjaEFwaS5qcyc7XG5pbXBvcnQgZGlzcGxheVBva2Vtb24gZnJvbSAnLi9kaXNwbGF5UG9rZXMuanMnO1xuaW1wb3J0IHsgaXRlbUNvdW50ZXIgfSBmcm9tICcuL2NvdW50ZXJzLmpzJztcblxuY29uc3QgcG9rZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBva2UtdGl0bGUnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoQXBpKCk7XG4gIHBva2VUaXRsZS5pbm5lckhUTUwgPSBgUG9rZW1vbigke2l0ZW1Db3VudGVyKHJlcy5yZXN1bHRzKX0pYDtcbiAgYXdhaXQgZGlzcGxheVBva2Vtb24ocmVzLnJlc3VsdHMpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9