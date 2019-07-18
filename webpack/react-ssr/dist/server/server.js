module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/redux/actionTypes.js":
/*!*************************************!*\
  !*** ./client/redux/actionTypes.js ***!
  \*************************************/
/*! exports provided: LOGIN, SEND_COURSE_DETAIL, SHOW_DIALOG, HIDE_DIALOG, SELECT_STUDENT, TEST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN\", function() { return LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEND_COURSE_DETAIL\", function() { return SEND_COURSE_DETAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHOW_DIALOG\", function() { return SHOW_DIALOG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HIDE_DIALOG\", function() { return HIDE_DIALOG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SELECT_STUDENT\", function() { return SELECT_STUDENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEST\", function() { return TEST; });\n// 登录\nvar LOGIN = 'LOGIN';\nvar SEND_COURSE_DETAIL = 'SEND_COURSE_DETAIL'; // dialog\n\nvar SHOW_DIALOG = 'SHOW_DIALOG';\nvar HIDE_DIALOG = 'HIDE_DIALOG';\nvar SELECT_STUDENT = 'SELECT_STUDENT'; // test\n\nvar TEST = 'TEST';\n\n//# sourceURL=webpack:///./client/redux/actionTypes.js?");

/***/ }),

/***/ "./client/redux/actions.js":
/*!*********************************!*\
  !*** ./client/redux/actions.js ***!
  \*********************************/
/*! exports provided: sendCourseDetail, setUserInfo, showDialog, hideDialog, setStudent, test, testAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendCourseDetail\", function() { return sendCourseDetail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUserInfo\", function() { return setUserInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showDialog\", function() { return showDialog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideDialog\", function() { return hideDialog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setStudent\", function() { return setStudent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testAsync\", function() { return testAsync; });\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"core-js/modules/es.symbol\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"core-js/modules/es.array.filter\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ \"core-js/modules/es.object.get-own-property-descriptor\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ \"core-js/modules/es.object.get-own-property-descriptors\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"core-js/modules/es.object.keys\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"core-js/modules/web.dom-collections.for-each\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actionTypes */ \"./client/redux/actionTypes.js\");\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // 课程信息\n\nfunction sendCourseDetail(courseData) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__[\"SEND_COURSE_DETAIL\"],\n    payload: _objectSpread({}, courseData)\n  };\n} // 设置用户信息\n\nfunction setUserInfo(userInfo) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__[\"LOGIN\"],\n    payload: _objectSpread({}, userInfo)\n  };\n} // 显示弹窗\n\nfunction showDialog(status) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__[\"SHOW_DIALOG\"],\n    payload: _objectSpread({}, status)\n  };\n} // 隐藏弹窗\n\nfunction hideDialog(status) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__[\"HIDE_DIALOG\"],\n    payload: _objectSpread({}, status)\n  };\n} // 选中学生\n\nfunction setStudent(studentInfo) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__[\"SELECT_STUDENT\"],\n    payload: _objectSpread({}, studentInfo)\n  };\n} // // 测试\n// export function test () {\n//     return dispatch => {\n//         setTimeout(() => {\n//         }, 1000);\n//     }\n// }\n// 测试\n\nfunction test(list) {\n  return {\n    type: 'TEST',\n    payload: {\n      list: list\n    }\n  };\n}\nfunction testAsync(list) {\n  return {\n    type: 'TEST_ASYNC',\n    payload: {\n      list: list\n    }\n  };\n}\n\n//# sourceURL=webpack:///./client/redux/actions.js?");

/***/ }),

/***/ "./client/redux/reducer/course.js":
/*!****************************************!*\
  !*** ./client/redux/reducer/course.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"core-js/modules/es.symbol\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"core-js/modules/es.array.filter\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ \"core-js/modules/es.object.get-own-property-descriptor\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ \"core-js/modules/es.object.get-own-property-descriptors\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"core-js/modules/es.object.keys\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"core-js/modules/web.dom-collections.for-each\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actionTypes */ \"./client/redux/actionTypes.js\");\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // 定义store 状态\n\nvar initialState = {\n  courseData: {},\n  status: false,\n  studentInfo: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var actions = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (actions.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_7__[\"SEND_COURSE_DETAIL\"]:\n      var payload = actions.payload;\n      return _objectSpread({}, state, {}, payload);\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_7__[\"SHOW_DIALOG\"]:\n      console.log(actions.payload);\n      return _objectSpread({}, state, {}, actions.payload);\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_7__[\"HIDE_DIALOG\"]:\n      return _objectSpread({}, state, {}, actions.payload);\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_7__[\"SELECT_STUDENT\"]:\n      return _objectSpread({}, state, {}, actions.payload);\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/redux/reducer/course.js?");

/***/ }),

/***/ "./client/redux/reducer/index.js":
/*!***************************************!*\
  !*** ./client/redux/reducer/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _course__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course */ \"./client/redux/reducer/course.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ \"./client/redux/reducer/login.js\");\n\n\n // 整个reducer\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  course: _course__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  login: _login__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./client/redux/reducer/index.js?");

/***/ }),

/***/ "./client/redux/reducer/login.js":
/*!***************************************!*\
  !*** ./client/redux/reducer/login.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"core-js/modules/es.symbol\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"core-js/modules/es.array.filter\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ \"core-js/modules/es.object.get-own-property-descriptor\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ \"core-js/modules/es.object.get-own-property-descriptors\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"core-js/modules/es.object.keys\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"core-js/modules/web.dom-collections.for-each\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actionTypes */ \"./client/redux/actionTypes.js\");\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  userInfo: null,\n  list: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var actions = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (actions.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_7__[\"LOGIN\"]:\n      // eslint-disable-next-line no-case-declarations\n      var payload = actions.payload;\n      return _objectSpread({}, state, {\n        payload: payload\n      });\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_7__[\"TEST\"]:\n      console.log(actions.payload, '222222222222222');\n      return _objectSpread({}, state, {}, actions.payload);\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/redux/reducer/login.js?");

/***/ }),

/***/ "./client/redux/store.js":
/*!*******************************!*\
  !*** ./client/redux/store.js ***!
  \*******************************/
/*! exports provided: createClientStore, createServerStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createClientStore\", function() { return createClientStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createServerStore\", function() { return createServerStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer/index */ \"./client/redux/reducer/index.js\");\n\n\n // 返回不同实例store\n\nfunction createClientStore() {\n  var defaultState = window._REACT_SOTRE ? window._REACT_SOTRE : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducer_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n}\nfunction createServerStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducer_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n}\n\n//# sourceURL=webpack:///./client/redux/store.js?");

/***/ }),

/***/ "./client/routes/config.js":
/*!*********************************!*\
  !*** ./client/routes/config.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/home */ \"./client/src/home/index.js\");\n/* harmony import */ var _src_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/login */ \"./client/src/login/index.js\");\n\n\nconsole.log(_src_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _src_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true,\n  key: 'home',\n  loadData: _src_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInintalProps\n}, {\n  path: '/login',\n  component: _src_login__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  key: 'login',\n  exact: true,\n  loadData: _src_login__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getInintalProps\n}]);\n\n//# sourceURL=webpack:///./client/routes/config.js?");

/***/ }),

/***/ "./client/src/home/index.js":
/*!**********************************!*\
  !*** ./client/src/home/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"core-js/modules/es.array.map\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions */ \"./client/redux/actions.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Home, _Component);\n\n  function Home(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Home);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Home).call(this, props));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), \"handleButton\", function (e) {\n      _this.props.history.push('/login');\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), \"loadData\", function (e) {\n      console.log(222);\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Home, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {// this.props.test([1, 2, 3])\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this$props = this.props,\n          dispatch = _this$props.dispatch,\n          selectedPost = _this$props.selectedPost,\n          test = _this$props.test,\n          list = _this$props.list;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var list = this.props.list;\n      console.log(list, '111111111111111');\n      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", null, \"Home\", list.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", null, item);\n      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"button\", {\n        onClick: this.handleButton\n      }, \"\\u6309\\u94AE\"));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    list: state.login.list\n  };\n  console.log(state);\n};\n\nvar home = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"connect\"])(mapStateToProps, {\n  test: _redux_actions__WEBPACK_IMPORTED_MODULE_11__[\"test\"]\n})(Home);\n\nhome.getInintalProps = function (store) {\n  store.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_11__[\"test\"])([1, 2, 3, 45, 6])); // console.log(store.dispatch, '==========================')\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./client/src/home/index.js?");

/***/ }),

/***/ "./client/src/login/index.js":
/*!***********************************!*\
  !*** ./client/src/login/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Login, _Component);\n\n  function Login(props) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Login);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Login).call(this, props));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Login, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, \"Login\");\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./client/src/login/index.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"core-js/modules/es.string.replace\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./utils.js\");\n/* harmony import */ var _client_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/redux/store */ \"./client/redux/store.js\");\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar html = fs.readFileSync('dist/client/index.html', 'utf-8');\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static('dist')); //注意这里要换成*来匹配\n\napp.get('*', function (req, res) {\n  console.log(req.path); // 同一个服务 返回的实例一样\n\n  var store = Object(_client_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"createServerStore\"])(); // 插入服务器渲染字符串\n\n  var renderHtml = html.replace('<!-- react-ssr -->', Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(req, store)).replace('<!-- store -->', \"\\n    <script>\\n        window._REACT_SOTRE = \".concat(JSON.stringify(store.getState()), \"\\n    </script>\\n\"));\n  console.log(renderHtml);\n  res.send(renderHtml);\n});\napp.listen(3001, function () {\n  console.log('listen:3001');\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"core-js/modules/web.dom-collections.for-each\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_routes_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/routes/config */ \"./client/routes/config.js\");\n\n //重要是要用到StaticRouter\n\n\n\n // 静态路由配置\n\n\n\nvar render = function render(req, store) {\n  // 返回匹配路由的数组。\n  var matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"matchRoutes\"])(_client_routes_config__WEBPACK_IMPORTED_MODULE_6__[\"default\"], req.path); //构建服务端的路由\n\n  matchedRoutes.forEach(function (routes) {\n    if (routes.route.loadData) {\n      routes.route.loadData(store);\n    }\n  });\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"renderRoutes\"])(_client_routes_config__WEBPACK_IMPORTED_MODULE_6__[\"default\"]))));\n  return content;\n};\n\n//# sourceURL=webpack:///./utils.js?");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/assertThisInitialized\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/assertThisInitialized%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "core-js/modules/es.array.filter":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.filter" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.filter\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.filter%22?");

/***/ }),

/***/ "core-js/modules/es.array.map":
/*!***********************************************!*\
  !*** external "core-js/modules/es.array.map" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.map\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.map%22?");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.get-own-property-descriptor\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.get-own-property-descriptor%22?");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.get-own-property-descriptors\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.get-own-property-descriptors%22?");

/***/ }),

/***/ "core-js/modules/es.object.keys":
/*!*************************************************!*\
  !*** external "core-js/modules/es.object.keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.keys\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.keys%22?");

/***/ }),

/***/ "core-js/modules/es.string.replace":
/*!****************************************************!*\
  !*** external "core-js/modules/es.string.replace" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.string.replace\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.string.replace%22?");

/***/ }),

/***/ "core-js/modules/es.symbol":
/*!********************************************!*\
  !*** external "core-js/modules/es.symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.symbol\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.symbol%22?");

/***/ }),

/***/ "core-js/modules/web.dom-collections.for-each":
/*!***************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.for-each" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/web.dom-collections.for-each\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/web.dom-collections.for-each%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });