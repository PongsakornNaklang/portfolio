webpackHotUpdate_N_E("pages/labs",{

/***/ "./components/theme_toggle.js":
/*!************************************!*\
  !*** ./components/theme_toggle.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sun */ "./components/sun.js");
/* harmony import */ var _moon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moon */ "./components/moon.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\work\\portfolio\\port-of-me\\components\\theme_toggle.js",
    _this = undefined,
    _s = $RefreshSig$();







var ThemeToggle = function ThemeToggle() {
  _s();

  var _useTheme = Object(next_themes__WEBPACK_IMPORTED_MODULE_1__["useTheme"])(),
      theme = _useTheme.theme,
      setTheme = _useTheme.setTheme;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      icon = _useState[0],
      setIcon = _useState[1];

  useEffect(function () {
    if (theme === 'dark') {
      setIcon( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sun__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, _this));
    } else {
      setIcon( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_moon__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, _this));
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "fixed bottom-10 right-10 rounded-full shadow-2xl z-10",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].button, {
      type: "button",
      whileHover: {
        scale: 1.1
      },
      whileTap: {
        scale: 0.9
      },
      className: "py-4 px-4  items-center rounded-full bg-gray-800 dark:bg-white focus:outline-none",
      onClick: function onClick() {
        return setTheme(theme === 'dark' ? 'light' : 'dark');
      },
      children: icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

_s(ThemeToggle, "VRo5IqaHTWMavSnYG9dKjEzYaeU=", false, function () {
  return [next_themes__WEBPACK_IMPORTED_MODULE_1__["useTheme"]];
});

_c = ThemeToggle;
/* harmony default export */ __webpack_exports__["default"] = (ThemeToggle);

var _c;

$RefreshReg$(_c, "ThemeToggle");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aGVtZV90b2dnbGUuanMiXSwibmFtZXMiOlsiVGhlbWVUb2dnbGUiLCJ1c2VUaGVtZSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VTdGF0ZSIsImljb24iLCJzZXRJY29uIiwidXNlRWZmZWN0Iiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsNERBQVEsRUFEZDtBQUFBLE1BQ2RDLEtBRGMsYUFDZEEsS0FEYztBQUFBLE1BQ1BDLFFBRE8sYUFDUEEsUUFETzs7QUFBQSxrQkFFRUMsc0RBQVEsQ0FBQyxJQUFELENBRlY7QUFBQSxNQUVmQyxJQUZlO0FBQUEsTUFFVEMsT0FGUzs7QUFJdEJDLFdBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUwsS0FBSyxLQUFLLE1BQWQsRUFBc0I7QUFDbEJJLGFBQU8sZUFBQyxxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUQsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNIQSxhQUFPLGVBQUMscUVBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFELENBQVA7QUFDSDtBQUNKLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyx1REFBZjtBQUFBLDJCQUNJLHFFQUFDLG9EQUFELENBQVEsTUFBUjtBQUNJLFVBQUksRUFBQyxRQURUO0FBRUksZ0JBQVUsRUFBRTtBQUFFRSxhQUFLLEVBQUU7QUFBVCxPQUZoQjtBQUdJLGNBQVEsRUFBRTtBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUhkO0FBSUksZUFBUyxFQUFDLG1GQUpkO0FBS0ksYUFBTyxFQUFFO0FBQUEsZUFBTUwsUUFBUSxDQUFDRCxLQUFLLEtBQUssTUFBVixHQUFtQixPQUFuQixHQUE2QixNQUE5QixDQUFkO0FBQUEsT0FMYjtBQUFBLGdCQU9LRztBQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFjSCxDQTFCRDs7R0FBTUwsVztVQUMwQkMsb0Q7OztLQUQxQkQsVztBQTRCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGFicy44OWVkMzhjOGM4YjI3ZWYwMjNhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcydcclxuaW1wb3J0IFN1biBmcm9tICcuL3N1bidcclxuaW1wb3J0IE1vb24gZnJvbSAnLi9tb29uJ1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVGhlbWVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKVxyXG4gICAgY29uc3QgW2ljb24sIHNldEljb25dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGVtZSA9PT0gJ2RhcmsnKSB7XHJcbiAgICAgICAgICAgIHNldEljb24oPFN1biAvPilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJY29uKDxNb29uIC8+KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpeGVkIGJvdHRvbS0xMCByaWdodC0xMCByb3VuZGVkLWZ1bGwgc2hhZG93LTJ4bCB6LTEwJz5cclxuICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XHJcbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS00IHB4LTQgIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JheS04MDAgZGFyazpiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaycpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVUb2dnbGVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==