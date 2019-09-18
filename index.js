/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./src/db/index.js");
/* harmony import */ var _cron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cron */ "./src/cron/index.js");
/* harmony import */ var _controllers_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/search */ "./src/controllers/search.js");




var createError = __webpack_require__(/*! http-errors */ "http-errors");

var express = __webpack_require__(/*! express */ "express");

var cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");

var logger = __webpack_require__(/*! morgan */ "morgan");

var port = process.env.PORT || 3000;
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.get('/api', _controllers_search__WEBPACK_IMPORTED_MODULE_2__["apiAllData"]);
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
  next();
});
app.listen(port, function () {
  console.log("Server rodando em http:localhost:".concat(port));
});

/***/ }),

/***/ "./src/controllers/search.js":
/*!***********************************!*\
  !*** ./src/controllers/search.js ***!
  \***********************************/
/*! exports provided: apiAllData, saveAllChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiAllData", function() { return apiAllData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAllChars", function() { return saveAllChars; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _schema_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schema/dimensions */ "./src/schema/dimensions.js");
/* harmony import */ var _factory_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory/search */ "./src/factory/search.js");






var saveCharacter =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(charName) {
    var dimensions, charCount, filter, update;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dimensions = mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.model('dimensions', _schema_dimensions__WEBPACK_IMPORTED_MODULE_3__["default"]);
            _context.next = 3;
            return _factory_search__WEBPACK_IMPORTED_MODULE_4__["default"].getCharByName(charName);

          case 3:
            charCount = _context.sent;
            filter = {
              character: charName
            };
            update = {
              dimensions_count: charCount
            };
            return _context.abrupt("return", dimensions.findOneAndUpdate(filter, update, {
              "new": true,
              upsert: true
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function saveCharacter(_x) {
    return _ref.apply(this, arguments);
  };
}();

var saveAllChars =
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var chars, saveCharsPromise, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            chars = ['rick', 'morty'];
            saveCharsPromise = chars.map(function (_char) {
              var save = saveCharacter(_char);
              console.log(save);
              return save;
            });
            _context2.next = 4;
            return Promise.all(saveCharsPromise);

          case 4:
            response = _context2.sent;
            if (response) console.log('Busca feita e salva');

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function saveAllChars() {
    return _ref2.apply(this, arguments);
  };
}();

var apiAllData = function apiAllData(req, res) {
  var dimensions = mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.model('dimensions', _schema_dimensions__WEBPACK_IMPORTED_MODULE_3__["default"]);
  dimensions.find({}, function (err, dim) {
    res.send(dim);
  });
};



/***/ }),

/***/ "./src/cron/index.js":
/*!***************************!*\
  !*** ./src/cron/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-cron */ "node-cron");
/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_cron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/search */ "./src/controllers/search.js");


var task = node_cron__WEBPACK_IMPORTED_MODULE_0___default.a.schedule('* * */8 * *', function () {
  Object(_controllers_search__WEBPACK_IMPORTED_MODULE_1__["saveAllChars"])();
  console.log('Cron rodoue fez a rotina');
}, {
  scheduled: true
});
task.start();

/***/ }),

/***/ "./src/db/index.js":
/*!*************************!*\
  !*** ./src/db/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var uri = 'mongodb://localhost:27017';
mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(uri, function (err, db) {
  if (err) return new Error(err);
  if (db) console.log('Conexão com banco ok!');
  return true;
});
mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('useNewUrlParser', true);
mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('useFindAndModify', false);
mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('useCreateIndex', true);
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection);

/***/ }),

/***/ "./src/factory/search.js":
/*!*******************************!*\
  !*** ./src/factory/search.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http */ "./src/http/index.js");







var GetCharDimension =
/*#__PURE__*/
function () {
  function GetCharDimension() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, GetCharDimension);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(GetCharDimension, [{
    key: "getCharByName",
    value: function () {
      var _getCharByName = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(name) {
        var response, _ref, results;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _http__WEBPACK_IMPORTED_MODULE_5__["default"].get("character/?name=".concat(name));

              case 2:
                response = _context.sent;
                _ref = response || {}, results = _ref.data.results;
                return _context.abrupt("return", this.getLocationChar(results));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCharByName(_x) {
        return _getCharByName.apply(this, arguments);
      }

      return getCharByName;
    }()
  }, {
    key: "getLocationChar",
    value: function getLocationChar(data) {
      // eslint-disable-line class-methods-use-this
      var names = data.map(function (itemLocation) {
        var name = itemLocation.location.name;
        return name;
      });
      return GetCharDimension.filterDimensionsCount(names);
    }
  }], [{
    key: "filterDimensionsCount",
    value: function filterDimensionsCount() {
      var names = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var filterDuplicateValues = new Set(names);
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(filterDuplicateValues).length;
    }
  }]);

  return GetCharDimension;
}();

/* harmony default export */ __webpack_exports__["default"] = (new GetCharDimension());

/***/ }),

/***/ "./src/http/config.js":
/*!****************************!*\
  !*** ./src/http/config.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = {
  baseURL: 'https://rickandmortyapi.com/api/'
};
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, config));

/***/ }),

/***/ "./src/http/index.js":
/*!***************************!*\
  !*** ./src/http/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./src/http/config.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var HTTP =
/*#__PURE__*/
function () {
  function HTTP() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, HTTP);

    this.axios = null;
    this.config = _config__WEBPACK_IMPORTED_MODULE_6__["default"];
    this.setAxiosConfig();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(HTTP, [{
    key: "setAxiosConfig",
    value: function setAxiosConfig() {
      this.axios = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create(_objectSpread({}, this.config));
    }
  }, {
    key: "get",
    value: function () {
      var _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.axios.get(url);

              case 2:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }]);

  return HTTP;
}();

/* harmony default export */ __webpack_exports__["default"] = (new HTTP());

/***/ }),

/***/ "./src/schema/dimensions.js":
/*!**********************************!*\
  !*** ./src/schema/dimensions.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
var Dimensions = new Schema({
  character: String,
  image: String,
  dimensions_count: Number
});
/* harmony default export */ __webpack_exports__["default"] = (Dimensions);

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "node-cron":
/*!****************************!*\
  !*** external "node-cron" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-cron");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jcm9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yeS9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0dHAvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9odHRwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWEvZGltZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cC1lcnJvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtY3JvblwiIl0sIm5hbWVzIjpbImNyZWF0ZUVycm9yIiwicmVxdWlyZSIsImV4cHJlc3MiLCJjb29raWVQYXJzZXIiLCJsb2dnZXIiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJhcHAiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiZ2V0IiwiYXBpQWxsRGF0YSIsInJlcSIsInJlcyIsIm5leHQiLCJlcnIiLCJsb2NhbHMiLCJtZXNzYWdlIiwiZXJyb3IiLCJzdGF0dXMiLCJyZW5kZXIiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwic2F2ZUNoYXJhY3RlciIsImNoYXJOYW1lIiwiZGltZW5zaW9ucyIsIm1vbmdvb3NlIiwibW9kZWwiLCJkaW1lbnNpb25zU2NoZW1hIiwiZ2V0Q2hhciIsImdldENoYXJCeU5hbWUiLCJjaGFyQ291bnQiLCJmaWx0ZXIiLCJjaGFyYWN0ZXIiLCJ1cGRhdGUiLCJkaW1lbnNpb25zX2NvdW50IiwiZmluZE9uZUFuZFVwZGF0ZSIsInVwc2VydCIsInNhdmVBbGxDaGFycyIsImNoYXJzIiwic2F2ZUNoYXJzUHJvbWlzZSIsIm1hcCIsImNoYXIiLCJzYXZlIiwiUHJvbWlzZSIsImFsbCIsInJlc3BvbnNlIiwiZmluZCIsImRpbSIsInNlbmQiLCJ0YXNrIiwiY3JvbiIsInNjaGVkdWxlIiwic2NoZWR1bGVkIiwic3RhcnQiLCJ1cmkiLCJNb25nb29zZSIsImNvbm5lY3QiLCJkYiIsIkVycm9yIiwic2V0IiwiY29ubmVjdGlvbiIsIkdldENoYXJEaW1lbnNpb24iLCJuYW1lIiwiSHR0cCIsInJlc3VsdHMiLCJkYXRhIiwiZ2V0TG9jYXRpb25DaGFyIiwibmFtZXMiLCJpdGVtTG9jYXRpb24iLCJsb2NhdGlvbiIsImZpbHRlckRpbWVuc2lvbnNDb3VudCIsImZpbHRlckR1cGxpY2F0ZVZhbHVlcyIsIlNldCIsImxlbmd0aCIsImNvbmZpZyIsImJhc2VVUkwiLCJIVFRQIiwiYXhpb3MiLCJzZXRBeGlvc0NvbmZpZyIsImNyZWF0ZSIsInVybCIsIlNjaGVtYSIsIkRpbWVuc2lvbnMiLCJTdHJpbmciLCJpbWFnZSIsIk51bWJlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBM0I7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLHdCQUFELENBQXZCOztBQUNBLElBQU1FLFlBQVksR0FBR0YsbUJBQU8sQ0FBQyxvQ0FBRCxDQUE1Qjs7QUFDQSxJQUFNRyxNQUFNLEdBQUdILG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBRUEsSUFBTUksSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUFqQztBQUVBLElBQU1DLEdBQUcsR0FBR1As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QWNBLCtDQUFkO0FBQ0EsU0FBS0ksY0FBTDtBQUNEOzs7O3FDQUVnQjtBQUNmLFdBQUtELEtBQUwsR0FBYUEsNENBQUssQ0FBQ0UsTUFBTixtQkFDUixLQUFLTCxNQURHLEVBQWI7QUFHRDs7Ozs7OzhGQUVTTSxHOzs7Ozs7O3VCQUNlLEtBQUtILEtBQUwsQ0FBV3JFLEdBQVgsQ0FBZXdFLEdBQWYsQzs7O0FBQWpCbkMsd0I7aURBQ0NBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlJLG1FQUFJK0IsSUFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtJQUVRSyxNLEdBQVcxQiwrQyxDQUFYMEIsTTtBQUVSLElBQU1DLFVBQVUsR0FBRyxJQUFJRCxNQUFKLENBQVc7QUFDNUJqRCxXQUFTLEVBQUVtRCxNQURpQjtBQUU1QkMsT0FBSyxFQUFFRCxNQUZxQjtBQUc1QmpELGtCQUFnQixFQUFFbUQ7QUFIVSxDQUFYLENBQW5CO0FBTWVILHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDVkEsb0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgJy4vZGInO1xuaW1wb3J0ICcuL2Nyb24nO1xuaW1wb3J0IHsgYXBpQWxsRGF0YSB9IGZyb20gJy4vY29udHJvbGxlcnMvc2VhcmNoJztcblxuY29uc3QgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCdodHRwLWVycm9ycycpO1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKTtcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ21vcmdhbicpO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cblxuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5cbmFwcC5nZXQoJy9hcGknLCBhcGlBbGxEYXRhKTtcblxuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgbmV4dChjcmVhdGVFcnJvcig0MDQpKTtcbn0pO1xuXG5cbmFwcC51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmVzLmxvY2Fscy5tZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG4gIHJlcy5sb2NhbHMuZXJyb3IgPSByZXEuYXBwLmdldCgnZW52JykgPT09ICdkZXZlbG9wbWVudCcgPyBlcnIgOiB7fTtcblxuICByZXMuc3RhdHVzKGVyci5zdGF0dXMgfHwgNTAwKTtcbiAgcmVzLnJlbmRlcignZXJyb3InKTtcbiAgbmV4dCgpO1xufSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIHJvZGFuZG8gZW0gaHR0cDpsb2NhbGhvc3Q6JHtwb3J0fWApO1xufSk7XG4iLCJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgZGltZW5zaW9uc1NjaGVtYSBmcm9tICcuLi9zY2hlbWEvZGltZW5zaW9ucyc7XG5pbXBvcnQgZ2V0Q2hhciBmcm9tICcuLi9mYWN0b3J5L3NlYXJjaCc7XG5cbmNvbnN0IHNhdmVDaGFyYWN0ZXIgPSBhc3luYyAoY2hhck5hbWUpID0+IHtcbiAgY29uc3QgZGltZW5zaW9ucyA9IG1vbmdvb3NlLm1vZGVsKCdkaW1lbnNpb25zJywgZGltZW5zaW9uc1NjaGVtYSk7XG4gIGNvbnN0IGNoYXJDb3VudCA9IGF3YWl0IGdldENoYXIuZ2V0Q2hhckJ5TmFtZShjaGFyTmFtZSk7XG5cbiAgY29uc3QgZmlsdGVyID0geyBjaGFyYWN0ZXI6IGNoYXJOYW1lIH07XG4gIGNvbnN0IHVwZGF0ZSA9IHsgZGltZW5zaW9uc19jb3VudDogY2hhckNvdW50IH07XG5cbiAgcmV0dXJuIGRpbWVuc2lvbnMuZmluZE9uZUFuZFVwZGF0ZShmaWx0ZXIsIHVwZGF0ZSwge1xuICAgIG5ldzogdHJ1ZSxcbiAgICB1cHNlcnQ6IHRydWUsXG4gIH0pO1xufTtcblxuY29uc3Qgc2F2ZUFsbENoYXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjaGFycyA9IFsncmljaycsICdtb3J0eSddO1xuXG4gIGNvbnN0IHNhdmVDaGFyc1Byb21pc2UgPSBjaGFycy5tYXAoKGNoYXIpID0+IHtcbiAgICBjb25zdCBzYXZlID0gc2F2ZUNoYXJhY3RlcihjaGFyKTtcbiAgICBjb25zb2xlLmxvZyhzYXZlKTtcbiAgICByZXR1cm4gc2F2ZTtcbiAgfSk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLmFsbChzYXZlQ2hhcnNQcm9taXNlKTtcblxuICBpZiAocmVzcG9uc2UpIGNvbnNvbGUubG9nKCdCdXNjYSBmZWl0YSBlIHNhbHZhJyk7XG59O1xuXG5jb25zdCBhcGlBbGxEYXRhID0gKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGRpbWVuc2lvbnMgPSBtb25nb29zZS5tb2RlbCgnZGltZW5zaW9ucycsIGRpbWVuc2lvbnNTY2hlbWEpO1xuICBkaW1lbnNpb25zLmZpbmQoe30sIChlcnIsIGRpbSkgPT4ge1xuICAgIHJlcy5zZW5kKGRpbSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgYXBpQWxsRGF0YSxcbiAgc2F2ZUFsbENoYXJzLFxufTtcbiIsImltcG9ydCBjcm9uIGZyb20gJ25vZGUtY3Jvbic7XG5pbXBvcnQgeyBzYXZlQWxsQ2hhcnMgfSBmcm9tICcuLi9jb250cm9sbGVycy9zZWFyY2gnO1xuXG5cbmNvbnN0IHRhc2sgPSBjcm9uLnNjaGVkdWxlKCcqICogKi84ICogKicsICgpID0+IHtcbiAgICBzYXZlQWxsQ2hhcnMoKTtcbiAgICBjb25zb2xlLmxvZygnQ3JvbiByb2RvdWUgZmV6IGEgcm90aW5hJyk7XG59LFxue1xuICBzY2hlZHVsZWQ6IHRydWUsXG59KTtcblxudGFzay5zdGFydCgpO1xuXG4iLCJpbXBvcnQgTW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCB1cmkgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNyc7XG5cbk1vbmdvb3NlLmNvbm5lY3QodXJpLCAoZXJyLCBkYikgPT4ge1xuICBpZiAoZXJyKSByZXR1cm4gbmV3IEVycm9yKGVycik7XG5cbiAgaWYgKGRiKSBjb25zb2xlLmxvZygnQ29uZXjDo28gY29tIGJhbmNvIG9rIScpO1xuXG4gIHJldHVybiB0cnVlO1xufSk7XG5cbk1vbmdvb3NlLnNldCgndXNlTmV3VXJsUGFyc2VyJywgdHJ1ZSk7XG5Nb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSk7XG5Nb25nb29zZS5zZXQoJ3VzZUNyZWF0ZUluZGV4JywgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vbmdvb3NlLmNvbm5lY3Rpb247XG4iLCJpbXBvcnQgSHR0cCBmcm9tICcuLi9odHRwJztcblxuY2xhc3MgR2V0Q2hhckRpbWVuc2lvbiB7XG4gIGFzeW5jIGdldENoYXJCeU5hbWUobmFtZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEh0dHAuZ2V0KGBjaGFyYWN0ZXIvP25hbWU9JHtuYW1lfWApO1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVzdWx0cyxcbiAgICAgIH0sXG4gICAgfSA9IHJlc3BvbnNlIHx8IHt9O1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0TG9jYXRpb25DaGFyKHJlc3VsdHMpO1xuICB9XG5cblxuICBnZXRMb2NhdGlvbkNoYXIoZGF0YSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBjb25zdCBuYW1lcyA9IGRhdGEubWFwKChpdGVtTG9jYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICB9LFxuICAgICAgfSA9IGl0ZW1Mb2NhdGlvbjtcblxuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gR2V0Q2hhckRpbWVuc2lvbi5maWx0ZXJEaW1lbnNpb25zQ291bnQobmFtZXMpO1xuICB9XG5cblxuICBzdGF0aWMgZmlsdGVyRGltZW5zaW9uc0NvdW50KG5hbWVzID0gW10pIHtcbiAgICBjb25zdCBmaWx0ZXJEdXBsaWNhdGVWYWx1ZXMgPSBuZXcgU2V0KG5hbWVzKTtcbiAgICByZXR1cm4gWy4uLmZpbHRlckR1cGxpY2F0ZVZhbHVlc10ubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBHZXRDaGFyRGltZW5zaW9uKCk7XG4iLCJjb25zdCBjb25maWcgPSB7XG4gIGJhc2VVUkw6ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpLycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IC4uLmNvbmZpZyB9O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5jbGFzcyBIVFRQIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5heGlvcyA9IG51bGw7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5zZXRBeGlvc0NvbmZpZygpO1xuICB9XG5cbiAgc2V0QXhpb3NDb25maWcoKSB7XG4gICAgdGhpcy5heGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldCh1cmwpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXhpb3MuZ2V0KHVybCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIVFRQKCk7XG4iLCJpbXBvcnQgTW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCB7IFNjaGVtYSB9ID0gTW9uZ29vc2U7XG5cbmNvbnN0IERpbWVuc2lvbnMgPSBuZXcgU2NoZW1hKHtcbiAgY2hhcmFjdGVyOiBTdHJpbmcsXG4gIGltYWdlOiBTdHJpbmcsXG4gIGRpbWVuc2lvbnNfY291bnQ6IE51bWJlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEaW1lbnNpb25zO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtZXJyb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWNyb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==