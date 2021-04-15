webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/project_card.js":
/*!************************************!*\
  !*** ./components/project_card.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg_path */ "./components/svg_path.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\work\\portfolio\\port-of-me\\components\\project_card.js",
    _this = undefined;






var ProjectCard = function ProjectCard(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$desc = _ref.desc,
      desc = _ref$desc === void 0 ? '' : _ref$desc,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? '' : _ref$link,
      _ref$techStack = _ref.techStack,
      techStack = _ref$techStack === void 0 ? [] : _ref$techStack,
      _ref$coverSrc = _ref.coverSrc,
      coverSrc = _ref$coverSrc === void 0 ? '' : _ref$coverSrc;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-600 rounded-3xl ",
    style: {
      maxWidth: 900,
      height: '66vh'
    },
    children: [coverSrc.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "rounded-3xl img-fading-bottom",
      src: coverSrc,
      layout: 'fill',
      quality: 100,
      objectFit: 'cover',
      loading: "eager"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: " absolute bottom-10 px-8 place-content-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "inline-flex items-center text-white",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].p, {
          className: "text-2xl font-medium mr-3",
          draggable: false,
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), link.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: link,
          passHref: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].svg, {
            whileHover: {
              scale: 1.25,
              cursor: 'pointer'
            },
            whileTap: {
              scale: 0.9
            },
            className: "h-6 w-6",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: _svg_path__WEBPACK_IMPORTED_MODULE_3__["svgPath"].link
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 29
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "block space-x-2 my-2",
        children: techStack.map(function (tech, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-xs py-1 px-2 rounded-full text-white bg-red-accent-200 align-middle ",
            children: tech
          }, "".concat(index), false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 36
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].p, {
        className: "mt-2 text-gray-300 font-extralight ",
        draggable: false,
        children: desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_c = ProjectCard;
/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

var _c;

$RefreshReg$(_c, "ProjectCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0X2NhcmQuanMiXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJuYW1lIiwiZGVzYyIsImxpbmsiLCJ0ZWNoU3RhY2siLCJjb3ZlclNyYyIsIm1heFdpZHRoIiwiaGVpZ2h0IiwibGVuZ3RoIiwic2NhbGUiLCJjdXJzb3IiLCJzdmdQYXRoIiwibWFwIiwidGVjaCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF3RTtBQUFBLHVCQUFyRUMsSUFBcUU7QUFBQSxNQUFyRUEsSUFBcUUsMEJBQTlELEVBQThEO0FBQUEsdUJBQTFEQyxJQUEwRDtBQUFBLE1BQTFEQSxJQUEwRCwwQkFBbkQsRUFBbUQ7QUFBQSx1QkFBL0NDLElBQStDO0FBQUEsTUFBL0NBLElBQStDLDBCQUF4QyxFQUF3QztBQUFBLDRCQUFwQ0MsU0FBb0M7QUFBQSxNQUFwQ0EsU0FBb0MsK0JBQXhCLEVBQXdCO0FBQUEsMkJBQXBCQyxRQUFvQjtBQUFBLE1BQXBCQSxRQUFvQiw4QkFBVCxFQUFTO0FBRXhGLHNCQUNJO0FBQ0ksYUFBUyxFQUFDLDBCQURkO0FBRUksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxHQUFaO0FBQWlCQyxZQUFNLEVBQUU7QUFBekIsS0FGWDtBQUFBLGVBS1FGLFFBQVEsQ0FBQ0csTUFBVCxLQUFvQixDQUFwQixnQkFDUSxxRUFBQyxpREFBRDtBQUNJLGVBQVMsRUFBQywrQkFEZDtBQUVJLFNBQUcsRUFBRUgsUUFGVDtBQUdJLFlBQU0sRUFBRSxNQUhaO0FBSUksYUFBTyxFQUFFLEdBSmI7QUFLSSxlQUFTLEVBQUUsT0FMZjtBQU1JLGFBQU8sRUFBQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUixHQVFZLElBYnBCLGVBaUJJO0FBQUssZUFBUyxFQUFDLGdEQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLHFDQUFmO0FBQUEsZ0NBQ0kscUVBQUMsb0RBQUQsQ0FBUSxDQUFSO0FBQVUsbUJBQVMsRUFBQywyQkFBcEI7QUFBZ0QsbUJBQVMsRUFBRSxLQUEzRDtBQUFBLG9CQUNLSjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFNUUUsSUFBSSxDQUFDSyxNQUFMLEtBQWdCLENBQWhCLGdCQUNJLHFFQUFDLGdEQUFEO0FBQ0ksY0FBSSxFQUFFTCxJQURWO0FBRUksa0JBQVEsTUFGWjtBQUFBLGlDQUlJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLHNCQUFVLEVBQUU7QUFBRU0sbUJBQUssRUFBRSxJQUFUO0FBQWVDLG9CQUFNLEVBQUU7QUFBdkIsYUFEaEI7QUFFSSxvQkFBUSxFQUFFO0FBQUVELG1CQUFLLEVBQUU7QUFBVCxhQUZkO0FBR0kscUJBQVMsRUFBQyxTQUhkO0FBR3dCLGlCQUFLLEVBQUMsNEJBSDlCO0FBRzJELGdCQUFJLEVBQUMsTUFIaEU7QUFHdUUsbUJBQU8sRUFBQyxXQUgvRTtBQUcyRixrQkFBTSxFQUFDLGNBSGxHO0FBQUEsc0JBSUtFLGlEQUFPLENBQUNSO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosR0FZTSxJQWxCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQXlCSTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSxrQkFFUUMsU0FBUyxDQUFDUSxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzNCLDhCQUFPO0FBQXVCLHFCQUFTLEVBQUMsMkVBQWpDO0FBQUEsc0JBQThHRDtBQUE5Ryx1QkFBY0MsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsU0FGRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6QkosZUFpQ0kscUVBQUMsb0RBQUQsQ0FBUSxDQUFSO0FBQ0ksaUJBQVMsRUFBQyxxQ0FEZDtBQUVJLGlCQUFTLEVBQUUsS0FGZjtBQUFBLGtCQUlLWjtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNkRILENBL0REOztLQUFNRixXO0FBaUVTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy5kYmMxYjc1YWFhNDBiNTcyYjZiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyBMaW5rU1ZHUGF0aCwgc3ZnUGF0aCB9IGZyb20gXCIuL3N2Z19wYXRoXCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUHJvamVjdENhcmQgPSAoeyBuYW1lID0gJycsIGRlc2MgPSAnJywgbGluayA9ICcnLCB0ZWNoU3RhY2sgPSBbXSwgY292ZXJTcmMgPSAnJyB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS02MDAgcm91bmRlZC0zeGwgJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogOTAwLCBoZWlnaHQ6ICc2NnZoJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY292ZXJTcmMubGVuZ3RoICE9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQtM3hsIGltZy1mYWRpbmctYm90dG9tJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjb3ZlclNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD17J2ZpbGwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PXsnY292ZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz0nZWFnZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+OiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGFic29sdXRlIGJvdHRvbS0xMCBweC04IHBsYWNlLWNvbnRlbnQtYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHRleHQtd2hpdGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucCBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtbWVkaXVtIG1yLTMnIGRyYWdnYWJsZT17ZmFsc2V9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmxlbmd0aCAhPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjI1LCBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC02IHctNicgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ZnUGF0aC5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnN2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIHNwYWNlLXgtMiBteS0yJz5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlY2hTdGFjay5tYXAoKHRlY2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtgJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIHB5LTEgcHgtMiByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSBiZy1yZWQtYWNjZW50LTIwMCBhbGlnbi1taWRkbGUgXCI+e3RlY2h9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24ucFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1ncmF5LTMwMCBmb250LWV4dHJhbGlnaHQgXCJcclxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkZXNjfVxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZFxyXG4iXSwic291cmNlUm9vdCI6IiJ9