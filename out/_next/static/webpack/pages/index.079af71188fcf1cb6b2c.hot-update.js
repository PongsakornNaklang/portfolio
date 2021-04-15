webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");


var _jsxFileName = "D:\\work\\portfolio\\port-of-me\\components\\menu.js",
    _this = undefined;




var Menu = function Menu(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      svgPath = _ref.svgPath,
      link = _ref.link;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(link),
    passHref: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
      className: "relative cursor-pointer items-center",
      style: {
        width: 330,
        height: 56
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
        whileHover: {
          scale: 1.25
        },
        whileTap: {
          scale: 0.9
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
            layoutId: "".concat(link, "-svg-box"),
            vinitial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            transition: {
              duration: 0.5
            },
            className: "absolute flex items-center justify-center h-14 w-14 rounded-md bg-indigo-500 dark:bg-red-accent-200 text-white overflow-hidden",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].svg, {
              layoutId: "".concat(link, "-svg"),
              className: "h-8 w-8",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: svgPath
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].p, {
            layoutId: "".concat(link, "-title"),
            className: "ml-20 text-lg leading-4 font-medium text-gray-900 dark:text-white",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
          className: "mt-2 ml-20 text-base text-gray-500",
          children: subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
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

_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51LmpzIl0sIm5hbWVzIjpbIk1lbnUiLCJ0aXRsZSIsInN1YnRpdGxlIiwic3ZnUGF0aCIsImxpbmsiLCJ3aWR0aCIsImhlaWdodCIsInNjYWxlIiwib3BhY2l0eSIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXdDO0FBQUEsTUFBckNDLEtBQXFDLFFBQXJDQSxLQUFxQztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsT0FBb0IsUUFBcEJBLE9BQW9CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRWpELHNCQUNJLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxhQUFNQSxJQUFOLENBQVY7QUFBd0IsWUFBUSxNQUFoQztBQUFBLDJCQUNJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLGVBQVMsRUFBQyxzQ0FEZDtBQUVJLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUUsR0FBVDtBQUFjQyxjQUFNLEVBQUU7QUFBdEIsT0FGWDtBQUFBLDZCQUlJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLGtCQUFVLEVBQUU7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FEaEI7QUFFSSxnQkFBUSxFQUFFO0FBQUVBLGVBQUssRUFBRTtBQUFULFNBRmQ7QUFBQSxnQ0FJSTtBQUFBLGtDQUNJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLG9CQUFRLFlBQU1ILElBQU4sYUFEWjtBQUVJLG9CQUFRLEVBQUU7QUFBRUkscUJBQU8sRUFBRTtBQUFYLGFBRmQ7QUFHSSxtQkFBTyxFQUFFO0FBQUVBLHFCQUFPLEVBQUU7QUFBWCxhQUhiO0FBSUksc0JBQVUsRUFBRTtBQUFFQyxzQkFBUSxFQUFFO0FBQVosYUFKaEI7QUFLSSxxQkFBUyxrSUFMYjtBQUFBLG1DQU9JLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLHNCQUFRLFlBQUtMLElBQUwsU0FEWjtBQUVJLHVCQUFTLFdBRmI7QUFFMEIsbUJBQUssRUFBQyw0QkFGaEM7QUFFNkQsa0JBQUksRUFBQyxNQUZsRTtBQUV5RSxxQkFBTyxFQUFDLFdBRmpGO0FBRTZGLG9CQUFNLEVBQUMsY0FGcEc7QUFBQSx3QkFJS0Q7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQWVJLHFFQUFDLG9EQUFELENBQVEsQ0FBUjtBQUNJLG9CQUFRLFlBQUtDLElBQUwsV0FEWjtBQUVJLHFCQUFTLEVBQUMsbUVBRmQ7QUFBQSxzQkFJS0g7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQTBCSTtBQUFJLG1CQUFTLEVBQUMsb0NBQWQ7QUFBQSxvQkFBb0RDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQ0gsQ0F2Q0Q7O0tBQU1GLEk7QUF5Q1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA3OWFmNzExODhmY2YxY2I2YjJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5cclxuY29uc3QgTWVudSA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgc3ZnUGF0aCwgbGluayB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtgLyR7bGlua31gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzMwLCBoZWlnaHQ6IDU2IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRJZD17IGAke2xpbmt9LXN2Zy1ib3hgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTQgdy0xNCByb3VuZGVkLW1kIGJnLWluZGlnby01MDAgZGFyazpiZy1yZWQtYWNjZW50LTIwMCB0ZXh0LXdoaXRlIG92ZXJmbG93LWhpZGRlbmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9e2Ake2xpbmt9LXN2Z2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC04IHctOGB9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdmdQYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9e2Ake2xpbmt9LXRpdGxlYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIwIHRleHQtbGcgbGVhZGluZy00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm10LTIgbWwtMjAgdGV4dC1iYXNlIHRleHQtZ3JheS01MDBcIj57c3VidGl0bGV9PC9kZD5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudVxyXG4iXSwic291cmNlUm9vdCI6IiJ9