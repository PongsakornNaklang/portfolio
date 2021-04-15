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
    whileHover: {
      scale: 1.1,
      cursor: 'pointer'
    },
    whileTap: {
      scale: 0.9
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
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute bottom-4 right-4 left-4 ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-white text-base",
        children: "XO Game"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: 'https://xo-game.vercel.app/',
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].svg, {
          whileHover: {
            scale: 1.25,
            cursor: 'pointer'
          },
          whileTap: {
            scale: 0.9
          },
          className: "h-6 w-6 text-white",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: _svg_path__WEBPACK_IMPORTED_MODULE_4__["default"].link
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYWJfY2FyZC5qcyJdLCJuYW1lcyI6WyJMYWJDYXJkIiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZSIsImN1cnNvciIsIlN2Z1BhdGgiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCLHNCQUNJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLGFBQVMsRUFBQyw2Q0FEZDtBQUVJLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsR0FBVDtBQUFjQyxZQUFNLEVBQUU7QUFBdEIsS0FGWDtBQUdJLGNBQVUsRUFBRTtBQUFFQyxXQUFLLEVBQUUsR0FBVDtBQUFjQyxZQUFNLEVBQUU7QUFBdEIsS0FIaEI7QUFJSSxZQUFRLEVBQUU7QUFBRUQsV0FBSyxFQUFFO0FBQVQsS0FKZDtBQUFBLDRCQU1JLHFFQUFDLGlEQUFEO0FBQ0ksZUFBUyxFQUFDLCtCQURkO0FBRUksU0FBRyxFQUFFLGdCQUZUO0FBR0ksWUFBTSxFQUFFLE1BSFo7QUFJSSxhQUFPLEVBQUUsR0FKYjtBQUtJLGVBQVMsRUFBRSxPQUxmO0FBTUksYUFBTyxFQUFDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLGVBZUk7QUFBSyxlQUFTLEVBQUMsbUNBQWY7QUFBQSw4QkFDSTtBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLHFFQUFDLGdEQUFEO0FBQ0ksWUFBSSxFQUFFLDZCQURWO0FBRUksZ0JBQVEsTUFGWjtBQUFBLCtCQUtJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLG9CQUFVLEVBQUU7QUFBRUEsaUJBQUssRUFBRSxJQUFUO0FBQWVDLGtCQUFNLEVBQUU7QUFBdkIsV0FEaEI7QUFFSSxrQkFBUSxFQUFFO0FBQUVELGlCQUFLLEVBQUU7QUFBVCxXQUZkO0FBR0ksbUJBQVMsRUFBQyxvQkFIZDtBQUdtQyxlQUFLLEVBQUMsNEJBSHpDO0FBR3NFLGNBQUksRUFBQyxNQUgzRTtBQUdrRixpQkFBTyxFQUFDLFdBSDFGO0FBR3NHLGdCQUFNLEVBQUMsY0FIN0c7QUFBQSxvQkFJS0UsaURBQU8sQ0FBQ0M7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUNILENBbENEOztLQUFNTixPO0FBb0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYWJzLjI0MjBhYzRlMjg3OTFkOWExOTc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgU3ZnUGF0aCBmcm9tIFwiLi9zdmdfcGF0aFwiXHJcblxyXG5jb25zdCBMYWJDYXJkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9JyBiZy1ncmF5LTYwMCBtci00IG1iLTQgcm91bmRlZC0zeGwgcmVsYXRpdmUnXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAsIGhlaWdodDogMjQwIH19XHJcbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSwgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQtM3hsIGltZy1mYWRpbmctYm90dG9tJ1xyXG4gICAgICAgICAgICAgICAgc3JjPXsnL2ltYWdlcy94by5wbmcnfVxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PXsnZmlsbCd9XHJcbiAgICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9eydjb3Zlcid9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPSdlYWdlcidcclxuXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBib3R0b20tNCByaWdodC00IGxlZnQtNCAnPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHRleHQtYmFzZSc+WE8gR2FtZTwvcD5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17J2h0dHBzOi8veG8tZ2FtZS52ZXJjZWwuYXBwLyd9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjI1LCBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC02IHctNiB0ZXh0LXdoaXRlJyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtTdmdQYXRoLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhYkNhcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==