webpackHotUpdate_N_E("pages/about",{

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


var _jsxFileName = "D:\\work\\portfolio\\port-of-me\\components\\theme_toggle.js",
    _this = undefined,
    _s = $RefreshSig$();






var ThemeToggle = function ThemeToggle() {
  _s();

  var _useTheme = Object(next_themes__WEBPACK_IMPORTED_MODULE_1__["useTheme"])(),
      theme = _useTheme.theme,
      setTheme = _useTheme.setTheme;

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
      children: theme === 'dark' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sun__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 40
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_moon__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 50
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_s(ThemeToggle, "5ABGV54qnXKp6rHn7MS/8MjwRhQ=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aGVtZV90b2dnbGUuanMiXSwibmFtZXMiOlsiVGhlbWVUb2dnbGUiLCJ1c2VUaGVtZSIsInRoZW1lIiwic2V0VGhlbWUiLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLDREQUFRLEVBRGQ7QUFBQSxNQUNkQyxLQURjLGFBQ2RBLEtBRGM7QUFBQSxNQUNQQyxRQURPLGFBQ1BBLFFBRE87O0FBR3RCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHVEQUFmO0FBQUEsMkJBQ0kscUVBQUMsb0RBQUQsQ0FBUSxNQUFSO0FBQ0ksVUFBSSxFQUFDLFFBRFQ7QUFFSSxnQkFBVSxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BRmhCO0FBR0ksY0FBUSxFQUFFO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BSGQ7QUFJSSxlQUFTLEVBQUMsbUZBSmQ7QUFLSSxhQUFPLEVBQUU7QUFBQSxlQUFNRCxRQUFRLENBQUNELEtBQUssS0FBSyxNQUFWLEdBQW1CLE9BQW5CLEdBQTZCLE1BQTlCLENBQWQ7QUFBQSxPQUxiO0FBQUEsZ0JBUVFBLEtBQUssS0FBSyxNQUFWLGdCQUFtQixxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW5CLGdCQUE2QixxRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUnJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFnQkgsQ0FuQkQ7O0dBQU1GLFc7VUFDMEJDLG9EOzs7S0FEMUJELFc7QUFxQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjUwNmY4M2ViMTM5NjFlY2E3MGFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJ1xyXG5pbXBvcnQgU3VuIGZyb20gJy4vc3VuJ1xyXG5pbXBvcnQgTW9vbiBmcm9tICcuL21vb24nXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcblxyXG5jb25zdCBUaGVtZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQgYm90dG9tLTEwIHJpZ2h0LTEwIHJvdW5kZWQtZnVsbCBzaGFkb3ctMnhsIHotMTAnPlxyXG4gICAgICAgICAgICA8bW90aW9uLmJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cclxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTQgcHgtNCAgaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTgwMCBkYXJrOmJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZSh0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZSA9PT0gJ2RhcmsnID8gPFN1biAvPiA6IDxNb29uIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lVG9nZ2xlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=