module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../common/data/employment.ts":
/*!************************************!*\
  !*** ../common/data/employment.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// tslint:disable:max-line-length
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Head of Digital',
  description: 'TODO',
  employer: {
    name: 'Engine Creative',
    url: 'https://www.enginecreative.co.uk/'
  },
  started: '2013',
  ended: '2018',
  projects: [{
    title: 'Reality Engine',
    url: 'https://www.enginecreative.co.uk/ar-products/reality-engine/',
    client: {
      name: 'Engine Creative'
    },
    commendations: [{
      text: 'The commercialisation of their product was leading against other entries and their solution through Tesco showed their ablity to scale and deliver something truly imaginative.',
      attribution: {
        name: 'Paul Heybourne',
        title: 'Global Innovation, Research & Demonstration Lab Manager, Aviva'
      }
    }, {
      text: 'Very clear proposition and ROI for clients.',
      attribution: {
        name: 'Jonny Voon',
        title: 'Lead Technologist, Innovate UK'
      }
    }, {
      text: 'Strong B2B solution which powers some of the most innovative consumer products.',
      attribution: {
        name: 'Professor Mischa Dohler',
        title: 'Chair Professor, Kings College London'
      }
    }],
    technologies: 'Objective C & C++ maintained via private CocoaPods repo. PHP (Laravel) / MySQL, HTML5, SASS, Memcached, Supervisord'
  }, {
    title: 'The National Lottery',
    url: 'https://www.enginecreative.co.uk/portfolio/national-lottery-app-development-ios-android/',
    client: {
      name: 'Camelot UK Lotteries',
      url: 'http://www.camelotgroup.co.uk/'
    },
    description: "Provided technical and UX consultancy to both Camelot's in-house development team and external freelancers. Performance optimisation of The National Lottery hybrid mobile app, development of native iOS and Android plugins to expand functionality.",
    technologies: 'Cordova/Phonegap, AngularJS / Ionic, Objective C, Java'
  }, {
    title: 'Tesco Discover',
    url: 'https://www.enginecreative.co.uk/portfolio/augmented-reality-publishing-retail-strategy/',
    client: {
      name: 'Tesco',
      url: 'https://www.tesco.com/'
    },
    description: "Long term development of augmented publishing strategy and development of consumer facing mobile app/content using RealityEngine. Extensive content partnerships with a wide variety of brands and multiple short lived experiments using new technologies such as iBeacons.",
    technologies: 'Objective C, C++, Javascript'
  }, {
    title: 'Lacoste LCST',
    url: 'https://www.enginecreative.co.uk/portfolio/lacoste-lcst-augmented-reality-retail-campaign/',
    client: {
      name: 'Pentland Chaussures',
      url: 'https://pentlandbrands.com/'
    },
    description: "Development of mobile apps for both iOS and Android as part of a wider marketing campaign which saw floor graphics placed in Lacoste stores worldwide, allowing users to try on shoes from the LCST range in augmented reality.",
    technologies: 'Objective C, Java, Javascript'
  }, {
    title: 'VR Store Design Visualisation',
    url: 'https://www.enginecreative.co.uk/portfolio/built-vr-tour-experience/',
    client: {
      name: 'Built / Travis Perkins',
      url: 'http://not-trading.built.co.uk/'
    },
    description: 'Development of a tool using Samsung GearVR to visualise customer journeys in a retail enviroment. Allowed the business to present potential journeys to both the board and end users and to rapidly iterate without having to incur the cost of altering the physical store.',
    technologies: 'Unity3D, Samsung GearVR / Oculus'
  }]
}]);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Homepage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_data_employment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/data/employment */ "../common/data/employment.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Homepage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Homepage, _React$Component);

  function Homepage() {
    _classCallCheck(this, Homepage);

    return _possibleConstructorReturn(this, _getPrototypeOf(Homepage).apply(this, arguments));
  }

  _createClass(Homepage, [{
    key: "render",
    value: function render() {
      var history = this.props.history;

      if (!history) {
        console.log(this.props);
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, history.map(function (role, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          key: idx
        }, role.title);
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      return Promise.resolve({
        history: _common_data_employment__WEBPACK_IMPORTED_MODULE_1__["default"]
      });
    }
  }]);

  return Homepage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map