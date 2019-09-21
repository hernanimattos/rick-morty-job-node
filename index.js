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
app.get('/api', _controllers_search__WEBPACK_IMPORTED_MODULE_2__["default"].apiAllData);
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
  next();
});
app.listen(port, function () {
  console.log("Server rodando em http://localhost:".concat(port));
});

/***/ }),

/***/ "./src/controllers/search.js":
/*!***********************************!*\
  !*** ./src/controllers/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_dimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/dimensions */ "./src/models/dimensions.js");
/* harmony import */ var _factory_search_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory/search-factory */ "./src/factory/search-factory.js");







var SearchController =
/*#__PURE__*/
function () {
  function SearchController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SearchController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SearchController, [{
    key: "saveCharacter",
    value: function () {
      var _saveCharacter = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(charName) {
        var charCount, filter, update;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory_search_factory__WEBPACK_IMPORTED_MODULE_5__["default"].getCharByName(charName);

              case 2:
                charCount = _context.sent;
                filter = {
                  character: charName
                };
                update = {
                  dimensions_count: charCount
                };
                return _context.abrupt("return", _models_dimensions__WEBPACK_IMPORTED_MODULE_4__["default"].findOneAndUpdate(filter, update, {
                  "new": true,
                  upsert: true
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function saveCharacter(_x) {
        return _saveCharacter.apply(this, arguments);
      }

      return saveCharacter;
    }()
  }, {
    key: "apiAllData",
    value: function apiAllData(req, res, next) {
      return _models_dimensions__WEBPACK_IMPORTED_MODULE_4__["default"].find({}, function (err, dim) {
        if (err) next(err);
        return res.send(dim);
      });
    }
  }, {
    key: "saveAllChars",
    value: function () {
      var _saveAllChars = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        var chars, saveCharsPromise, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                chars = ['rick', 'morty'];
                saveCharsPromise = chars.map(function (_char) {
                  return _this.saveCharacter(_char);
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

      function saveAllChars() {
        return _saveAllChars.apply(this, arguments);
      }

      return saveAllChars;
    }()
  }]);

  return SearchController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SearchController());

/***/ }),

/***/ "./src/cron/index.js":
/*!***************************!*\
  !*** ./src/cron/index.js ***!
  \***************************/
/*! exports provided: jobCharacter, cb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobCharacter", function() { return jobCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return cb; });
/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-cron */ "node-cron");
/* harmony import */ var node_cron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_cron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/search */ "./src/controllers/search.js");



var cb = function cb() {
  _controllers_search__WEBPACK_IMPORTED_MODULE_1__["default"].saveAllChars();
  console.log('Cron rodou e fez a rotina');
};

var jobCharacter = function jobCharacter() {
  var task = node_cron__WEBPACK_IMPORTED_MODULE_0___default.a.schedule('* * */8 * *', cb(), {
    scheduled: true
  });
  task.start();
};

jobCharacter();


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
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/factory/search-factory.js":
/*!***************************************!*\
  !*** ./src/factory/search-factory.js ***!
  \***************************************/
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
      var names = data.map(function (itemLocation) {
        var name = itemLocation.location.name;
        return name;
      });
      return this.filterDimensionsCount(names);
    }
  }, {
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

/***/ "./src/models/dimensions.js":
/*!**********************************!*\
  !*** ./src/models/dimensions.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
var dimensionsSchema = new Schema({
  character: String,
  image: String,
  dimensions_count: Number
});
var modelDimensions = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('dimensions', dimensionsSchema);
/* harmony default export */ __webpack_exports__["default"] = (modelDimensions);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jcm9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yeS9zZWFyY2gtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0dHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwLWVycm9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1jcm9uXCIiXSwibmFtZXMiOlsiY3JlYXRlRXJyb3IiLCJyZXF1aXJlIiwiZXhwcmVzcyIsImNvb2tpZVBhcnNlciIsImxvZ2dlciIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFwcCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJzZWFyY2hDb250cm9sbGVyIiwiYXBpQWxsRGF0YSIsInJlcSIsInJlcyIsIm5leHQiLCJlcnIiLCJsb2NhbHMiLCJtZXNzYWdlIiwiZXJyb3IiLCJzdGF0dXMiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwiU2VhcmNoQ29udHJvbGxlciIsImNoYXJOYW1lIiwiZ2V0Q2hhckRpbWVuc2lvbiIsImdldENoYXJCeU5hbWUiLCJjaGFyQ291bnQiLCJmaWx0ZXIiLCJjaGFyYWN0ZXIiLCJ1cGRhdGUiLCJkaW1lbnNpb25zX2NvdW50IiwiZGltZW5zaW9uc01vZGVsIiwiZmluZE9uZUFuZFVwZGF0ZSIsInVwc2VydCIsImZpbmQiLCJkaW0iLCJzZW5kIiwiY2hhcnMiLCJzYXZlQ2hhcnNQcm9taXNlIiwibWFwIiwiY2hhciIsInNhdmVDaGFyYWN0ZXIiLCJQcm9taXNlIiwiYWxsIiwicmVzcG9uc2UiLCJjYiIsInNhdmVBbGxDaGFycyIsImpvYkNoYXJhY3RlciIsInRhc2siLCJjcm9uIiwic2NoZWR1bGUiLCJzY2hlZHVsZWQiLCJzdGFydCIsInVyaSIsIm1vbmdvb3NlIiwiY29ubmVjdCIsImRiIiwiRXJyb3IiLCJzZXQiLCJHZXRDaGFyRGltZW5zaW9uIiwibmFtZSIsIkh0dHAiLCJyZXN1bHRzIiwiZGF0YSIsImdldExvY2F0aW9uQ2hhciIsIm5hbWVzIiwiaXRlbUxvY2F0aW9uIiwibG9jYXRpb24iLCJmaWx0ZXJEaW1lbnNpb25zQ291bnQiLCJmaWx0ZXJEdXBsaWNhdGVWYWx1ZXMiLCJTZXQiLCJsZW5ndGgiLCJjb25maWciLCJiYXNlVVJMIiwiSFRUUCIsImF4aW9zIiwic2V0QXhpb3NDb25maWciLCJjcmVhdGUiLCJ1cmwiLCJTY2hlbWEiLCJkaW1lbnNpb25zU2NoZW1hIiwiU3RyaW5nIiwiaW1hZ2UiLCJOdW1iZXIiLCJtb2RlbERpbWVuc2lvbnMiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBM0I7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLHdCQUFELENBQXZCOztBQUNBLElBQU1FLFlBQVksR0FBR0YsbUJBQU8sQ0FBQyxvQ0FBRCxDQUE1Qjs7QUFDQSxJQUFNRyxNQUFNLEdBQUdILG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBRUEsSUFBTUksSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIs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SThCLElBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7SUFFUUssTSxHQUFXekIsK0MsQ0FBWHlCLE07QUFFUixJQUFNQyxnQkFBZ0IsR0FBRyxJQUFJRCxNQUFKLENBQVc7QUFDbENuRCxXQUFTLEVBQUVxRCxNQUR1QjtBQUVsQ0MsT0FBSyxFQUFFRCxNQUYyQjtBQUdsQ25ELGtCQUFnQixFQUFFcUQ7QUFIZ0IsQ0FBWCxDQUF6QjtBQU1BLElBQU1DLGVBQWUsR0FBRzlCLCtDQUFRLENBQUMrQixLQUFULENBQWUsWUFBZixFQUE2QkwsZ0JBQTdCLENBQXhCO0FBRWVJLDhFQUFmLEU7Ozs7Ozs7Ozs7O0FDWkEsb0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgJy4vZGInO1xuaW1wb3J0ICcuL2Nyb24nO1xuaW1wb3J0IHNlYXJjaENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9zZWFyY2gnO1xuXG5jb25zdCBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJ2h0dHAtZXJyb3JzJyk7XG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO1xuY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcblxuYXBwLmdldCgnL2FwaScsIHNlYXJjaENvbnRyb2xsZXIuYXBpQWxsRGF0YSk7XG5cbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIG5leHQoY3JlYXRlRXJyb3IoNDA0KSk7XG59KTtcblxuXG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5sb2NhbHMubWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuICByZXMubG9jYWxzLmVycm9yID0gcmVxLmFwcC5nZXQoJ2VudicpID09PSAnZGV2ZWxvcG1lbnQnID8gZXJyIDoge307XG5cbiAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gIHJlcy5qc29uKHtcbiAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcbiAgICBlcnJvcjogZXJyLFxuICB9KTtcbiAgbmV4dCgpO1xufSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIHJvZGFuZG8gZW0gaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XG59KTtcbiIsIlxuaW1wb3J0IGRpbWVuc2lvbnNNb2RlbCBmcm9tICcuLi9tb2RlbHMvZGltZW5zaW9ucyc7XG5pbXBvcnQgZ2V0Q2hhckRpbWVuc2lvbiBmcm9tICcuLi9mYWN0b3J5L3NlYXJjaC1mYWN0b3J5JztcblxuY2xhc3MgU2VhcmNoQ29udHJvbGxlciB7XG4gIGFzeW5jIHNhdmVDaGFyYWN0ZXIoY2hhck5hbWUpIHtcbiAgICBjb25zdCBjaGFyQ291bnQgPSBhd2FpdCBnZXRDaGFyRGltZW5zaW9uLmdldENoYXJCeU5hbWUoY2hhck5hbWUpO1xuXG4gICAgY29uc3QgZmlsdGVyID0geyBjaGFyYWN0ZXI6IGNoYXJOYW1lIH07XG4gICAgY29uc3QgdXBkYXRlID0geyBkaW1lbnNpb25zX2NvdW50OiBjaGFyQ291bnQgfTtcblxuICAgIHJldHVybiBkaW1lbnNpb25zTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShmaWx0ZXIsIHVwZGF0ZSwge1xuICAgICAgbmV3OiB0cnVlLFxuICAgICAgdXBzZXJ0OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgYXBpQWxsRGF0YShyZXEsIHJlcywgbmV4dCkge1xuICAgIHJldHVybiBkaW1lbnNpb25zTW9kZWwuZmluZCh7fSwgKGVyciwgZGltKSA9PiB7XG4gICAgICBpZiAoZXJyKSBuZXh0KGVycik7XG4gICAgICByZXR1cm4gcmVzLnNlbmQoZGltKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVBbGxDaGFycygpIHtcbiAgICBjb25zdCBjaGFycyA9IFsncmljaycsICdtb3J0eSddO1xuICAgIGNvbnN0IHNhdmVDaGFyc1Byb21pc2UgPSBjaGFycy5tYXAoKGNoYXIpID0+IHRoaXMuc2F2ZUNoYXJhY3RlcihjaGFyKSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLmFsbChzYXZlQ2hhcnNQcm9taXNlKTtcblxuICAgIGlmIChyZXNwb25zZSkgY29uc29sZS5sb2coJ0J1c2NhIGZlaXRhIGUgc2FsdmEnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VhcmNoQ29udHJvbGxlcigpO1xuIiwiaW1wb3J0IGNyb24gZnJvbSAnbm9kZS1jcm9uJztcbmltcG9ydCBzZWFyY2hDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL3NlYXJjaCc7XG5cbmNvbnN0IGNiID0gKCkgPT4ge1xuICBzZWFyY2hDb250cm9sbGVyLnNhdmVBbGxDaGFycygpO1xuICBjb25zb2xlLmxvZygnQ3JvbiByb2RvdSBlIGZleiBhIHJvdGluYScpO1xufTtcblxuY29uc3Qgam9iQ2hhcmFjdGVyID0gKCkgPT4ge1xuICBjb25zdCB0YXNrID0gY3Jvbi5zY2hlZHVsZSgnKiAqICovOCAqIConLCBjYigpLFxuICAgIHtcbiAgICAgIHNjaGVkdWxlZDogdHJ1ZSxcbiAgICB9KTtcblxuICB0YXNrLnN0YXJ0KCk7XG59O1xuXG5qb2JDaGFyYWN0ZXIoKTtcblxuZXhwb3J0IHtcbiAgam9iQ2hhcmFjdGVyLFxuICBjYixcbn07XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCB1cmkgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNyc7XG5cbm1vbmdvb3NlLmNvbm5lY3QodXJpLCAoZXJyLCBkYikgPT4ge1xuICBpZiAoZXJyKSByZXR1cm4gbmV3IEVycm9yKGVycik7XG5cbiAgaWYgKGRiKSBjb25zb2xlLmxvZygnQ29uZXjDo28gY29tIGJhbmNvIG9rIScpO1xuXG4gIHJldHVybiB0cnVlO1xufSk7XG5cbm1vbmdvb3NlLnNldCgndXNlTmV3VXJsUGFyc2VyJywgdHJ1ZSk7XG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSk7XG5tb25nb29zZS5zZXQoJ3VzZUNyZWF0ZUluZGV4JywgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlO1xuIiwiaW1wb3J0IEh0dHAgZnJvbSAnLi4vaHR0cCc7XG5cbmNsYXNzIEdldENoYXJEaW1lbnNpb24ge1xuICBhc3luYyBnZXRDaGFyQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEh0dHAuZ2V0KGBjaGFyYWN0ZXIvP25hbWU9JHtuYW1lfWApO1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVzdWx0cyxcbiAgICAgIH0sXG4gICAgfSA9IHJlc3BvbnNlIHx8IHt9O1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0TG9jYXRpb25DaGFyKHJlc3VsdHMpO1xuICB9XG5cblxuICBnZXRMb2NhdGlvbkNoYXIoZGF0YSkge1xuICAgIGNvbnN0IG5hbWVzID0gZGF0YS5tYXAoKGl0ZW1Mb2NhdGlvbikgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9ID0gaXRlbUxvY2F0aW9uO1xuXG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmZpbHRlckRpbWVuc2lvbnNDb3VudChuYW1lcyk7XG4gIH1cblxuXG4gIGZpbHRlckRpbWVuc2lvbnNDb3VudChuYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgZmlsdGVyRHVwbGljYXRlVmFsdWVzID0gbmV3IFNldChuYW1lcyk7XG4gICAgcmV0dXJuIFsuLi5maWx0ZXJEdXBsaWNhdGVWYWx1ZXNdLmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgR2V0Q2hhckRpbWVuc2lvbigpO1xuIiwiY29uc3QgY29uZmlnID0ge1xuICBiYXNlVVJMOiAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS8nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgeyAuLi5jb25maWcgfTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuY2xhc3MgSFRUUCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXhpb3MgPSBudWxsO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuc2V0QXhpb3NDb25maWcoKTtcbiAgfVxuXG4gIHNldEF4aW9zQ29uZmlnKCkge1xuICAgIHRoaXMuYXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgLi4udGhpcy5jb25maWcsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBnZXQodXJsKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF4aW9zLmdldCh1cmwpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSFRUUCgpO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xuXG5jb25zdCBkaW1lbnNpb25zU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGNoYXJhY3RlcjogU3RyaW5nLFxuICBpbWFnZTogU3RyaW5nLFxuICBkaW1lbnNpb25zX2NvdW50OiBOdW1iZXIsXG59KTtcblxuY29uc3QgbW9kZWxEaW1lbnNpb25zID0gbW9uZ29vc2UubW9kZWwoJ2RpbWVuc2lvbnMnLCBkaW1lbnNpb25zU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kZWxEaW1lbnNpb25zO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtZXJyb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWNyb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==