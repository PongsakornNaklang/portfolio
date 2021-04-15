webpackHotUpdate_N_E("pages/labs",{

/***/ "./components/lab_card.js":
/*!********************************!*\
  !*** ./components/lab_card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg_path */ "./components/svg_path.js");


var _jsxFileName = "D:\\work\\portfolio\\port-of-me\\components\\lab_card.js",
    _this = undefined;






var LabCard = function LabCard() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: " bg-gray-600 mr-4 mb-4 rounded-3xl relative",
    style: {
      width: 240,
      height: 240
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "rounded-3xl img-fading-bottom",
      src: '/images/xo.png',
      layout: 'fill',
      quality: 100,
      objectFit: 'cover',
      loading: "eager"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute bottom-4 right-4 left-4 inline-flex items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-white text-base mr-2",
        children: "XO Game"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: 'https://xo-game.vercel.app/',
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].svg, {
          whileHover: {
            scale: 1.1,
            cursor: 'pointer'
          },
          whileTap: {
            scale: 0.9
          },
          className: "h-4 w-4 text-white",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: _svg_path__WEBPACK_IMPORTED_MODULE_4__["default"].link
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
};

_c = LabCard;
/* harmony default export */ __webpack_exports__["default"] = (LabCard);

var _c;

$RefreshReg$(_c, "LabCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYWJfY2FyZC5qcyJdLCJuYW1lcyI6WyJMYWJDYXJkIiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZSIsImN1cnNvciIsIlN2Z1BhdGgiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCLHNCQUNJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLGFBQVMsRUFBQyw2Q0FEZDtBQUVJLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsR0FBVDtBQUFjQyxZQUFNLEVBQUU7QUFBdEIsS0FGWDtBQUFBLDRCQUlJLHFFQUFDLGlEQUFEO0FBQ0ksZUFBUyxFQUFDLCtCQURkO0FBRUksU0FBRyxFQUFFLGdCQUZUO0FBR0ksWUFBTSxFQUFFLE1BSFo7QUFJSSxhQUFPLEVBQUUsR0FKYjtBQUtJLGVBQVMsRUFBRSxPQUxmO0FBTUksYUFBTyxFQUFDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBYUk7QUFBSyxlQUFTLEVBQUMsMkRBQWY7QUFBQSw4QkFDSTtBQUFHLGlCQUFTLEVBQUMsMkJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLHFFQUFDLGdEQUFEO0FBQ0ksWUFBSSxFQUFFLDZCQURWO0FBRUksZ0JBQVEsTUFGWjtBQUFBLCtCQUlJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLG9CQUFVLEVBQUU7QUFBRUMsaUJBQUssRUFBRSxHQUFUO0FBQWNDLGtCQUFNLEVBQUU7QUFBdEIsV0FEaEI7QUFFSSxrQkFBUSxFQUFFO0FBQUVELGlCQUFLLEVBQUU7QUFBVCxXQUZkO0FBR0ksbUJBQVMsRUFBQyxvQkFIZDtBQUdtQyxlQUFLLEVBQUMsNEJBSHpDO0FBR3NFLGNBQUksRUFBQyxNQUgzRTtBQUdrRixpQkFBTyxFQUFDLFdBSDFGO0FBR3NHLGdCQUFNLEVBQUMsY0FIN0c7QUFBQSxvQkFJS0UsaURBQU8sQ0FBQ0M7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0JILENBaENEOztLQUFNTixPO0FBa0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYWJzLjk2NzcxNGFiZGRmMzkyMmRjODliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgU3ZnUGF0aCBmcm9tIFwiLi9zdmdfcGF0aFwiXHJcblxyXG5jb25zdCBMYWJDYXJkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9JyBiZy1ncmF5LTYwMCBtci00IG1iLTQgcm91bmRlZC0zeGwgcmVsYXRpdmUnXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAsIGhlaWdodDogMjQwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC0zeGwgaW1nLWZhZGluZy1ib3R0b20nXHJcbiAgICAgICAgICAgICAgICBzcmM9eycvaW1hZ2VzL3hvLnBuZyd9XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9eydmaWxsJ31cclxuICAgICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD17J2NvdmVyJ31cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9J2VhZ2VyJ1xyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGJvdHRvbS00IHJpZ2h0LTQgbGVmdC00IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC1iYXNlIG1yLTInPlhPIEdhbWU8L3A+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9eydodHRwczovL3hvLWdhbWUudmVyY2VsLmFwcC8nfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC00IHctNCB0ZXh0LXdoaXRlJyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtTdmdQYXRoLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhYkNhcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==