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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/responsive-menu.js":
/*!********************************!*\
  !*** ./src/responsive-menu.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ResponsiveMenu =\n/*#__PURE__*/\nfunction () {\n  // Constructor\n  function ResponsiveMenu(container, options) {\n    _classCallCheck(this, ResponsiveMenu);\n\n    // Default values, merged with supplied options\n    var defaults = {\n      submenuClass: 'menu__item--has-children',\n      submenuToggleClass: 'menu__submenu-toggle',\n      menuToggleClass: 'menu__toggle',\n      menuClass: 'menu__items',\n      screenReaderClass: 'screen-reader-text',\n      openSubmenuText: 'Open submenu',\n      closeSubmenuText: 'Close submenu',\n      submenuToggleOpenIcon: '+',\n      submenuToggleCloseIcon: '-'\n    }; // Merge defaults with our passed options\n\n    this.options = _objectSpread({}, defaults, options);\n    this.container = document.getElementById(container);\n    this.menu = this.container.getElementsByTagName('ul')[0];\n    this.menuToggle = this.container.getElementsByTagName('button')[0];\n    this.submenus = this.container.getElementsByClassName(this.options.submenuClass);\n    this.submenuToggles = this.menu.getElementsByClassName(this.options.submenuToggleClass); // Setup the menu\n\n    this._init(); // Setup event listeners\n\n\n    this._events();\n  } // Handle everything that happens before events\n\n\n  _createClass(ResponsiveMenu, [{\n    key: \"_init\",\n    value: function _init() {\n      this.menuToggle.setAttribute('aria-expanded', 'false');\n\n      this._createSubmenuButtons();\n\n      this._setStates();\n    } // Handle all events\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      // Remove ARIA when on \"desktop\".\n      window.addEventListener('resize', function () {\n        return _this._setStates();\n      }); // Toggle ARIA states of main ul on click.\n\n      this.menuToggle.addEventListener('click', function () {\n        _this._toggleMenu(_this.menuToggle);\n\n        _this._setFocus();\n      }); // Toggle Submenu aria attributes.\n\n      _toConsumableArray(this.submenuToggles).forEach(function (toggle) {\n        toggle.addEventListener('click', function () {\n          return _this._toggleMenu(toggle);\n        });\n      }); // Close menu using Esc key.\n\n\n      document.addEventListener('keyup', function (event) {\n        if (27 === event.keyCode) {\n          if (_this._isMenuOpen()) {\n            _this._toggleMenu();\n\n            _this.menuToggle.focus();\n          }\n        }\n      });\n    } // Toggle menu classes and ARIA when button is pressed\n\n  }, {\n    key: \"_toggleMenu\",\n    value: function _toggleMenu(element) {\n      var expanded = 'false' === element.getAttribute('aria-expanded') ? true : false;\n      element.setAttribute('aria-expanded', expanded);\n    } // Add submenu button to any element that has children\n\n  }, {\n    key: \"_createSubmenuButtons\",\n    value: function _createSubmenuButtons() {\n      var _this2 = this;\n\n      _toConsumableArray(this.submenus).forEach(function (element) {\n        var anchor = element.getElementsByTagName('a')[0];\n        var submenu = element.getElementsByTagName('ul')[0];\n        var submenuToggle = document.createElement('button');\n        var id = \"submenu-\".concat(_this2._createUUID());\n        var submenuToggleText = _this2.options.openSubmenuText;\n        var submenuToggleIcon = _this2.options.submenuToggleOpenIcon; // Add our new unique ID as an ID to the submenu\n\n        submenu.setAttribute('id', id); // Add our new unique ID to match up with the button.\n\n        submenuToggle.setAttribute('aria-controls', id); // Set aria-expanded to false by default.\n\n        submenuToggle.setAttribute('aria-expanded', false); // Add class to button.\n\n        submenuToggle.classList.add(_this2.options.submenuToggleClass); // Add icon to button - temporary to help visualise\n\n        submenuToggle.innerHTML = \"<span class=\\\"\".concat(_this2.options.screenReaderClass, \"\\\">\").concat(submenuToggleText, \"</span>\").concat(submenuToggleIcon); // Add our new button after the anchor.\n\n        anchor.after(submenuToggle);\n      });\n    } // Set initial state of menu.\n\n  }, {\n    key: \"_setStates\",\n    value: function _setStates() {\n      if (this._isMobile()) {\n        this.container.classList.add('menu--is-mobile');\n        this.container.classList.remove('menu--is-desktop');\n        this.menuToggle.setAttribute('aria-expanded', 'false');\n\n        _toConsumableArray(this.submenus).forEach(function (submenu) {\n          submenu.removeAttribute('aria-haspopup');\n        });\n\n        _toConsumableArray(this.submenuToggles).forEach(function (toggle) {\n          toggle.style.display = \"block\";\n        });\n      } else {\n        this.container.classList.add('menu--is-desktop');\n        this.container.classList.remove('menu--is-mobile');\n        this.menuToggle.setAttribute('aria-expanded', 'false');\n\n        _toConsumableArray(this.submenus).forEach(function (submenu) {\n          submenu.setAttribute('aria-haspopup', 'true');\n        });\n\n        _toConsumableArray(this.submenuToggles).forEach(function (toggle) {\n          toggle.style.display = \"none\";\n        });\n      }\n    } // Used to determind if we are on mobile or not\n\n  }, {\n    key: \"_isMobile\",\n    value: function _isMobile() {\n      // If menu toggle button has display: none css rule, we're on desktop.\n      var isMobile = 'none' === window.getComputedStyle(this.menuToggle, null).getPropertyValue('display') ? false : true;\n      return isMobile;\n    }\n  }, {\n    key: \"_isMenuOpen\",\n    value: function _isMenuOpen() {\n      var isMenuOpen = 'false' === this.menuToggle.getAttribute('aria-expanded') ? false : true;\n      return isMenuOpen;\n    } // Function to generate a Unique ID that can be used for the ID's for submenus, buttons etc\n\n  }, {\n    key: \"_createUUID\",\n    value: function _createUUID() {\n      var s = [];\n      var hexDigits = \"0123456789abcdef\";\n\n      for (var i = 0; i < 36; i++) {\n        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);\n      }\n\n      s[14] = \"4\"; // bits 12-15 of the time_hi_and_version field to 0010\n\n      s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01\n\n      s[8] = s[13] = s[18] = s[23] = \"-\";\n      var uuid = s.join(\"\");\n      return uuid;\n    }\n  }, {\n    key: \"_setFocus\",\n    value: function _setFocus() {\n      var _this3 = this;\n\n      // Bail if menu is not open.\n      if (!this._isMenuOpen()) {\n        return;\n      } // Set focusable elements inside main navigation.\n\n\n      var focusableElements = this.container.querySelectorAll(['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^=\"-\"])']);\n      var firstFocusableElement = focusableElements[0];\n      var lastFocusableElement = focusableElements[focusableElements.length - 1]; // Redirect last Tab to first focusable element.\n\n      lastFocusableElement.addEventListener('keydown', function (e) {\n        if (9 === e.keyCode && !e.shiftKey) {\n          e.preventDefault();\n\n          _this3.menuToggle.focus(); // Set focus on first element - that's actually close menu button.\n\n        }\n      }); // Redirect first Shift+Tab to toggle button element.\n\n      firstFocusableElement.addEventListener('keydown', function (e) {\n        if (9 === e.keyCode && e.shiftKey) {\n          e.preventDefault();\n\n          _this3.menuToggle.focus(); // Set focus on first element.\n\n        }\n      }); // Redirect Shift+Tab from the toggle button to last focusable element.\n\n      this.menuToggle.addEventListener('keydown', function (e) {\n        if (9 === e.keyCode && e.shiftKey) {\n          e.preventDefault();\n          lastFocusableElement.focus(); // Set focus on last element.\n        }\n      });\n    } // Runs every time the window is resized\n\n  }, {\n    key: \"_resize\",\n    value: function _resize() {\n      // If on mobile\n      if (window.getComputedStyle(this.menuToggle, null).getPropertyValue(\"display\") !== \"none\") {\n        // this.menuToggle.classList.remove('is-toggled');\n        _toConsumableArray(this.submenus).forEach(function (submenu) {\n          submenu.removeAttribute('aria-haspopup');\n        }); // if on desktop\n\n      } else {\n        this.menuToggle.removeAttribute('aria-expanded');\n        this.menuToggle.classList.remove('is-toggled');\n\n        _toConsumableArray(this.submenus).forEach(function (submenu) {\n          submenu.setAttribute('aria-haspopup', 'true');\n        });\n      }\n    }\n  }]);\n\n  return ResponsiveMenu;\n}();\n\nexports.default = ResponsiveMenu;\n\n//# sourceURL=webpack:///./src/responsive-menu.js?");

/***/ }),

/***/ "./src/responsive-menu.scss":
/*!**********************************!*\
  !*** ./src/responsive-menu.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/responsive-menu.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./src/responsive-menu.js ./src/responsive-menu.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/responsive-menu.js */\"./src/responsive-menu.js\");\nmodule.exports = __webpack_require__(/*! ./src/responsive-menu.scss */\"./src/responsive-menu.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/responsive-menu.js_./src/responsive-menu.scss?");

/***/ })

/******/ });