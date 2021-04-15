webpackHotUpdate_N_E("pages/index",{

/***/ "./components/contents.js":
/*!********************************!*\
  !*** ./components/contents.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
/* harmony import */ var _svg_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg_path */ "./components/svg_path.js");


var _jsxFileName = "D:\\work\\portfolio\\port-of-me\\components\\contents.js",
    _this = undefined;




var Contents = function Contents() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mt-10",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
      className: " space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 justify-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'Projects',
        subtitle: 'Web / Mobile application',
        svgPath: _svg_path__WEBPACK_IMPORTED_MODULE_2__["default"].project,
        link: 'projects'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'About',
        subtitle: 'Experience / Skills / Education',
        svgPath: _svg_path__WEBPACK_IMPORTED_MODULE_2__["default"].about,
        link: 'about'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'Labs',
        subtitle: '🚧',
        svgPath: _svg_path__WEBPACK_IMPORTED_MODULE_2__["default"].lab,
        link: 'labs'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: 'Contact',
        subtitle: 'Email / Github / Facebook',
        svgPath: _svg_path__WEBPACK_IMPORTED_MODULE_2__["default"].contact,
        link: 'contact'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = Contents;
/* harmony default export */ __webpack_exports__["default"] = (Contents);

var _c;

$RefreshReg$(_c, "Contents");

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

/***/ "./components/svg_path.js":
/*!********************************!*\
  !*** ./components/svg_path.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\work\\portfolio\\port-of-me\\components\\svg_path.js";
var SvgPath = {
  link: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 11
  }, undefined),
  about: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 12
  }, undefined),
  lab: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined),
  project: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 14
  }, undefined),
  contact: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 14
  }, undefined)
};
/* harmony default export */ __webpack_exports__["default"] = (SvgPath);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdmdfcGF0aC5qcyJdLCJuYW1lcyI6WyJDb250ZW50cyIsIlN2Z1BhdGgiLCJwcm9qZWN0IiwiYWJvdXQiLCJsYWIiLCJjb250YWN0IiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFFbkIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBLDJCQUNJO0FBQUksZUFBUyxFQUFDLDZGQUFkO0FBQUEsOEJBRUkscUVBQUMsNkNBQUQ7QUFDSSxhQUFLLEVBQUUsVUFEWDtBQUVJLGdCQUFRLEVBQUUsMEJBRmQ7QUFHSSxlQUFPLEVBQUVDLGlEQUFPLENBQUNDLE9BSHJCO0FBSUksWUFBSSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBU0kscUVBQUMsNkNBQUQ7QUFDSSxhQUFLLEVBQUUsT0FEWDtBQUVJLGdCQUFRLEVBQUUsaUNBRmQ7QUFHSSxlQUFPLEVBQUVELGlEQUFPLENBQUNFLEtBSHJCO0FBSUksWUFBSSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKLGVBZUkscUVBQUMsNkNBQUQ7QUFDSSxhQUFLLEVBQUUsTUFEWDtBQUVJLGdCQUFRLEVBQUUsSUFGZDtBQUdJLGVBQU8sRUFBRUYsaURBQU8sQ0FBQ0csR0FIckI7QUFJSSxZQUFJLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkosZUFxQkkscUVBQUMsNkNBQUQ7QUFDSSxhQUFLLEVBQUUsU0FEWDtBQUVJLGdCQUFRLEVBQUUsMkJBRmQ7QUFHSSxlQUFPLEVBQUVILGlEQUFPLENBQUNJLE9BSHJCO0FBSUksWUFBSSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQ0gsQ0FuQ0Q7O0tBQU1MLFE7QUFxQ1NBLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0EsSUFBTUMsT0FBTyxHQUFHO0FBQ1pLLE1BQUksZUFBRTtBQUFNLGlCQUFhLEVBQUMsT0FBcEI7QUFBNEIsa0JBQWMsRUFBQyxPQUEzQztBQUFtRCxlQUFXLEVBQUUsQ0FBaEU7QUFBbUUsS0FBQyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETTtBQUVaSCxPQUFLLGVBQUU7QUFBTSxpQkFBYSxFQUFDLE9BQXBCO0FBQTRCLGtCQUFjLEVBQUMsT0FBM0M7QUFBbUQsZUFBVyxFQUFDLEdBQS9EO0FBQW1FLEtBQUMsRUFBQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRks7QUFHWkMsS0FBRyxlQUFFO0FBQU0saUJBQWEsRUFBQyxPQUFwQjtBQUE0QixrQkFBYyxFQUFDLE9BQTNDO0FBQW1ELGVBQVcsRUFBQyxHQUEvRDtBQUFtRSxLQUFDLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhPO0FBSVpGLFNBQU8sZUFBRTtBQUFNLGlCQUFhLEVBQUMsT0FBcEI7QUFBNEIsa0JBQWMsRUFBQyxPQUEzQztBQUFtRCxlQUFXLEVBQUMsR0FBL0Q7QUFBbUUsS0FBQyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRztBQUtaRyxTQUFPLGVBQUU7QUFBTSxpQkFBYSxFQUFDLE9BQXBCO0FBQTRCLGtCQUFjLEVBQUMsT0FBM0M7QUFBbUQsZUFBVyxFQUFDLEdBQS9EO0FBQW1FLEtBQUMsRUFBQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEcsQ0FBaEI7QUFRZUosc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWZjMjU0Nzg4ZTM2MGIzNjc4NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IFN2Z1BhdGggZnJvbSBcIi4vc3ZnX3BhdGhcIjtcclxuXHJcbmNvbnN0IENvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cclxuICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cIiBzcGFjZS15LTEwIG1kOnNwYWNlLXktMCBtZDpncmlkIG1kOmdyaWQtY29scy0yIG1kOmdhcC14LTggbWQ6Z2FwLXktMTAganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnUHJvamVjdHMnfVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXsnV2ViIC8gTW9iaWxlIGFwcGxpY2F0aW9uJ31cclxuICAgICAgICAgICAgICAgICAgICBzdmdQYXRoPXtTdmdQYXRoLnByb2plY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz17J3Byb2plY3RzJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0Fib3V0J31cclxuICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17J0V4cGVyaWVuY2UgLyBTa2lsbHMgLyBFZHVjYXRpb24nfVxyXG4gICAgICAgICAgICAgICAgICAgIHN2Z1BhdGg9e1N2Z1BhdGguYWJvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz17J2Fib3V0J31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnTGFicyd9XHJcbiAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9eyfwn5qnJ31cclxuICAgICAgICAgICAgICAgICAgICBzdmdQYXRoPXtTdmdQYXRoLmxhYn1cclxuICAgICAgICAgICAgICAgICAgICBsaW5rPXsnbGFicyd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0NvbnRhY3QnfVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXsnRW1haWwgLyBHaXRodWIgLyBGYWNlYm9vayd9XHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnUGF0aD17U3ZnUGF0aC5jb250YWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9eydjb250YWN0J31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGw+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50c1xyXG4iLCJjb25zdCBTdmdQYXRoID0ge1xyXG4gICAgbGluazogPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTEzLjgyOCAxMC4xNzJhNCA0IDAgMDAtNS42NTYgMGwtNCA0YTQgNCAwIDEwNS42NTYgNS42NTZsMS4xMDItMS4xMDFtLS43NTgtNC44OTlhNCA0IDAgMDA1LjY1NiAwbDQtNGE0IDQgMCAwMC01LjY1Ni01LjY1NmwtMS4xIDEuMVwiIC8+LFxyXG4gICAgYWJvdXQ6IDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTE2IDdhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwek0xMiAxNGE3IDcgMCAwMC03IDdoMTRhNyA3IDAgMDAtNy03elwiIC8+LFxyXG4gICAgbGFiOiA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0xOS40MjggMTUuNDI4YTIgMiAwIDAwLTEuMDIyLS41NDdsLTIuMzg3LS40NzdhNiA2IDAgMDAtMy44Ni41MTdsLS4zMTguMTU4YTYgNiAwIDAxLTMuODYuNTE3TDYuMDUgMTUuMjFhMiAyIDAgMDAtMS44MDYuNTQ3TTggNGg4bC0xIDF2NS4xNzJhMiAyIDAgMDAuNTg2IDEuNDE0bDUgNWMxLjI2IDEuMjYuMzY3IDMuNDE0LTEuNDE1IDMuNDE0SDQuODI4Yy0xLjc4MiAwLTIuNjc0LTIuMTU0LTEuNDE0LTMuNDE0bDUtNUEyIDIgMCAwMDkgMTAuMTcyVjVMOCA0elwiIC8+LFxyXG4gICAgcHJvamVjdDogPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMTAgMjBsNC0xNm00IDRsNCA0LTQgNE02IDE2bC00LTQgNC00XCIgLz4sXHJcbiAgICBjb250YWN0OiA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0xNiAxMmE0IDQgMCAxMC04IDAgNCA0IDAgMDA4IDB6bTAgMHYxLjVhMi41IDIuNSAwIDAwNSAwVjEyYTkgOSAwIDEwLTkgOW00LjUtMS4yMDZhOC45NTkgOC45NTkgMCAwMS00LjUgMS4yMDdcIiAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==