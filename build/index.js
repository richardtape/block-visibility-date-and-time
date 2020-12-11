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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./src/controls/block-visibility-date-time-controls.js":
/*!*************************************************************!*\
  !*** ./src/controls/block-visibility-date-time-controls.js ***!
  \*************************************************************/
/*! exports provided: BlockVisibilityDateTimeControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockVisibilityDateTimeControls", function() { return BlockVisibilityDateTimeControls; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var BlockVisibilityDateTimeControls = function BlockVisibilityDateTimeControls(_ref) {
  var rules = _ref.rules,
      setAttributes = _ref.setAttributes,
      attributes = _ref.attributes;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      openDatePopupForStart = _useState2[0],
      setOpenDatePopupForStart = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      openDatePopupForEnd = _useState4[0],
      setOpenDatePopupForEnd = _useState4[1];
  /**
   * Clear the date and time - resets to not having a value.
   *
   * @param {*} startOrEnd Are we resetting the start or end date.
   * @param {*} rules The current ruleset for this block.
   */


  var clearDateAndTime = function clearDateAndTime(startOrEnd, rules) {
    setAttributes({
      blockVisibilityRules: _objectSpread({}, rules, {
        dateTime: _objectSpread({}, rules.dateTime, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, startOrEnd, {}))
      })
    });
  };
  /**
   * DateTimePicker for the Start date/time.
   */


  var ScheduleStartDateTime = function ScheduleStartDateTime() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["DateTimePicker"], {
      currentDate: rules.dateTime.start,
      onChange: function onChange(date) {
        setAttributes({
          blockVisibilityRules: _objectSpread({}, rules, {
            dateTime: _objectSpread({}, rules.dateTime, {
              'start': date
            })
          })
        });
        setOpenDatePopupForStart(false);
      },
      is12Hour: false
    });
  };
  /**
   * DateTimePicker for the End date/time.
   */


  var ScheduleEndDateTime = function ScheduleEndDateTime() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["DateTimePicker"], {
      currentDate: rules.dateTime.end,
      onChange: function onChange(date) {
        setAttributes({
          blockVisibilityRules: _objectSpread({}, rules, {
            dateTime: _objectSpread({}, rules.dateTime, {
              'end': date
            })
          })
        });
        setOpenDatePopupForEnd(false);
      },
      is12Hour: false
    });
  };

  var ClearCurrentDateTimeIcon = function ClearCurrentDateTimeIcon() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      icon: function icon() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "feather feather-x-circle"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("circle", {
          cx: "12",
          cy: "12",
          r: "10"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("line", {
          x1: "15",
          y1: "9",
          x2: "9",
          y2: "15"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("line", {
          x1: "9",
          y1: "9",
          x2: "15",
          y2: "15"
        }));
      }
    });
  };
  /**
   * Output the Scheduling controls
   */


  var BlockVisibilityScheduleControls = function BlockVisibilityScheduleControls() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "block-visibility-schedule-controls"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "components-dropdown"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isLink: true,
      className: "block-visibility-set-date-time",
      icon: "calendar-alt",
      onClick: function onClick() {
        return setOpenDatePopupForStart(!openDatePopupForStart);
      }
    }, rules.dateTime.start && typeof rules.dateTime.start === 'string' ? Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_4__["dateI18n"])('D M j Y, G:i', rules.dateTime.start) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Set Start Date/Time")), openDatePopupForStart && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
      position: "middle left",
      className: "block-visibility-picker-popover block-visibility-picker-popover-start",
      onClose: setOpenDatePopupForStart.bind(null, false)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ScheduleStartDateTime, null)), rules.dateTime.start && typeof rules.dateTime.start === 'string' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isLink: true,
      label: "Clear date and time",
      className: "block-visibility-clear-date-time",
      onClick: function onClick() {
        clearDateAndTime('start', rules);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ClearCurrentDateTimeIcon, null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "components-dropdown"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isLink: true,
      className: "block-visibility-set-date-time",
      icon: "calendar-alt",
      onClick: function onClick() {
        return setOpenDatePopupForEnd(!openDatePopupForEnd);
      }
    }, rules.dateTime.end && typeof rules.dateTime.end === 'string' ? Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_4__["dateI18n"])('D M j Y, G:i', rules.dateTime.end) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Set End Date/Time")), openDatePopupForEnd && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
      position: "middle left",
      className: "block-visibility-picker-popover block-visibility-picker-popover-end",
      onClose: setOpenDatePopupForEnd.bind(null, false)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ScheduleEndDateTime, null)), rules.dateTime.end && typeof rules.dateTime.end === 'string' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isLink: true,
      label: "Clear date and time",
      className: "block-visibility-clear-date-time",
      onClick: function onClick() {
        clearDateAndTime('end', rules);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ClearCurrentDateTimeIcon, null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
      class: "date-time-help-intro block-visibility-help-text"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Set start and/or end dates for when this block will be ' + attributes.blockVisibility + '. Not selecting either date will mean this block is ' + attributes.blockVisibility + ' at all times.')));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BlockVisibilityScheduleControls, null);
};

/***/ }),

/***/ "./src/controls/block-visibility-date-time-panel-body.js":
/*!***************************************************************!*\
  !*** ./src/controls/block-visibility-date-time-panel-body.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_visibility_date_time_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-visibility-date-time-controls */ "./src/controls/block-visibility-date-time-controls.js");





function BlockVisibilityDateTimePanelBodyControl(_ref) {
  var setAttributes = _ref.setAttributes,
      attributes = _ref.attributes;
  var rules = attributes.blockVisibilityRules;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date and Time', 'block-visibility-date-time'),
    initialOpen: false,
    className: "block-visibility-control-panel block-visibility-date-time-controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_visibility_date_time_controls__WEBPACK_IMPORTED_MODULE_3__["BlockVisibilityDateTimeControls"], {
    rules: rules,
    setAttributes: setAttributes,
    attributes: attributes
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockVisibilityDateTimePanelBodyControl);

/***/ }),

/***/ "./src/controls/block-visibility-date-time.js":
/*!****************************************************!*\
  !*** ./src/controls/block-visibility-date-time.js ***!
  \****************************************************/
/*! exports provided: BlockVisibilityDateTimeControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockVisibilityDateTimeControl", function() { return BlockVisibilityDateTimeControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_visibility_date_time_panel_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block-visibility-date-time-panel-body */ "./src/controls/block-visibility-date-time-panel-body.js");






function BlockVisibilityDateTimeControl(data) {
  var rulesEnabled = data.attributes.blockVisibilityRules.blockVisibilityRulesEnabled;
  var blockVisibility = data.attributes.hasOwnProperty('blockVisibility');

  if (!rulesEnabled || !blockVisibility) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_visibility_date_time_panel_body__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setAttributes: data.setAttributes,
      attributes: data.attributes
    }));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_visibility_date_time_panel_body__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: data.setAttributes,
    attributes: data.attributes
  });
}
/**
 * Render the <BlockVisibilityDateTimeControl> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the BlockVisibilityDateTimeControl component.
 */

function BlockVisibilityDateTimeFill() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Fill"], {
    name: "block-visibility-extra-controls"
  }, function (fillProps) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockVisibilityDateTimeControl, {
      setAttributes: fillProps.setAttributes,
      attributes: fillProps.attributes
    });
  });
} // Add our component to the Slot provided by BlockVisibilityControls


Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__["registerPlugin"])('block-visibility-03-date-time-fill', {
  render: BlockVisibilityDateTimeFill
}); // Register our visibility rule with the main plugin

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('blockVisibility.defaultBlockVisibilityRules', 'block-visibility-date-time/block-visibility-rules', registerDateTimeBlockVisibilityRule);

function registerDateTimeBlockVisibilityRule(defaultRules) {
  defaultRules.dateTime = {
    start: {},
    end: {}
  };
  return defaultRules;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls_block_visibility_date_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/block-visibility-date-time */ "./src/controls/block-visibility-date-time.js");


/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/date":
/*!***************************************!*\
  !*** external {"this":["wp","date"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["date"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!******************************************!*\
  !*** external {"this":["wp","plugins"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map