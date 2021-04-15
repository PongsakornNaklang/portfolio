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
            children: _svg_path__WEBPACK_IMPORTED_MODULE_3__["default"].link
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

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_project_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project_card */ "./components/project_card.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper_components_effect_coverflow_effect_coverflow_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/components/effect-coverflow/effect-coverflow.min.css */ "./node_modules/swiper/components/effect-coverflow/effect-coverflow.min.css");
/* harmony import */ var swiper_components_effect_coverflow_effect_coverflow_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_components_effect_coverflow_effect_coverflow_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_motion_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/motion_container */ "./components/motion_container.js");
/* harmony import */ var _components_title_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/title_bar */ "./components/title_bar.js");
/* harmony import */ var _components_svg_path__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/svg_path */ "./components/svg_path.js");
/* harmony import */ var _components_theme_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/theme_toggle */ "./components/theme_toggle.js");


var _jsxFileName = "D:\\work\\portfolio\\port-of-me\\pages\\projects.js",
    _this = undefined,
    _s = $RefreshSig$();














swiper__WEBPACK_IMPORTED_MODULE_7__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_7__["EffectCoverflow"], swiper__WEBPACK_IMPORTED_MODULE_7__["Keyboard"], swiper__WEBPACK_IMPORTED_MODULE_7__["Mousewheel"], swiper__WEBPACK_IMPORTED_MODULE_7__["Pagination"]]);

var Projects = function Projects() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_motion_container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    path: "projects",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_theme_toggle__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_title_bar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Projects",
        svgPath: _components_svg_path__WEBPACK_IMPORTED_MODULE_12__["default"].project
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1,
        scale: [0.8, 1]
      },
      transition: {
        delay: 1.5,
        duration: 0.3
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__["Swiper"], {
        className: "w-full pt-10 pb-10",
        effect: "coverflow",
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        mousewheel: {
          invert: true
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__["SwiperSlide"], {
          className: "rounded-3xl ",
          style: {
            maxWidth: 900,
            height: '66vh'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_project_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "Portfolio",
            desc: "Website to show my skills and use them to apply for jobs",
            coverSrc: "/images/Screen.png",
            link: "https://portfolio-git-main-pongsakornnaklang.vercel.app/",
            techStack: ['Next.js', 'Tailwind CSS', 'Framer']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__["SwiperSlide"], {
          className: "rounded-3xl",
          style: {
            maxWidth: 900,
            height: '66vh'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_project_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "SUT E-Project",
            desc: "Web application for managing software projects between students and professors; stores project files for analysis and query purposes",
            coverSrc: "/images/e-project.png",
            link: "http://it2.sut.ac.th/project63_g40/",
            techStack: ['React.js', 'Ant design', 'Express', 'mysql']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__["SwiperSlide"], {
          className: "rounded-3xl",
          style: {
            maxWidth: 900,
            height: '66vh'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_project_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "AppsLimiter",
            desc: "For limiting the use of mobile applications so as not to interfere with other activities",
            coverSrc: "/images/AppsLimiter.png",
            link: "https://github.com/PongsakornNaklang/AppsLimiter",
            techStack: ['Java']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__["SwiperSlide"], {
          className: "rounded-3xl",
          style: {
            maxWidth: 900,
            height: '66vh'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_project_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "Atmosphere (Dust detecter)",
            desc: "For detecting dust around IoT devices and alarming when the dust density is dangerous",
            coverSrc: "/images/Atmosphere.png",
            link: "https://github.com/PongsakornNaklang/Atmosphere-mobile",
            techStack: ['Java', 'C++', 'esp8266', 'GP2Y1010AU0F', 'Firebase Realtime Database']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__["SwiperSlide"], {
          className: "rounded-3xl",
          style: {
            maxWidth: 900,
            height: '66vh'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_project_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "SUT Sport and Health Center",
            desc: "Support the user experience of using sport and health center at Suranaree University of Technology",
            coverSrc: "/images/SUT_Sport_and_Health_Center.png",
            link: "http://student.sut.ac.th/b6074562/SUT_SportAndHealthCenter/",
            techStack: ['PHP', 'HTML', 'CSS']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "swiper-pagination text-center mt-6 text-white text-base"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, _this);
};

_s(Projects, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0X2NhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3ZnX3BhdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwibmFtZSIsImRlc2MiLCJsaW5rIiwidGVjaFN0YWNrIiwiY292ZXJTcmMiLCJtYXhXaWR0aCIsImhlaWdodCIsImxlbmd0aCIsInNjYWxlIiwiY3Vyc29yIiwiU3ZnUGF0aCIsIm1hcCIsInRlY2giLCJpbmRleCIsImFib3V0IiwibGFiIiwicHJvamVjdCIsImNvbnRhY3QiLCJTd2lwZXJDb3JlIiwidXNlIiwiRWZmZWN0Q292ZXJmbG93IiwiS2V5Ym9hcmQiLCJNb3VzZXdoZWVsIiwiUGFnaW5hdGlvbiIsIlByb2plY3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwib3BhY2l0eSIsImRlbGF5IiwiZHVyYXRpb24iLCJyb3RhdGUiLCJzdHJldGNoIiwiZGVwdGgiLCJtb2RpZmllciIsInNsaWRlU2hhZG93cyIsImVuYWJsZWQiLCJvbmx5SW5WaWV3cG9ydCIsImludmVydCIsImVsIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBd0U7QUFBQSx1QkFBckVDLElBQXFFO0FBQUEsTUFBckVBLElBQXFFLDBCQUE5RCxFQUE4RDtBQUFBLHVCQUExREMsSUFBMEQ7QUFBQSxNQUExREEsSUFBMEQsMEJBQW5ELEVBQW1EO0FBQUEsdUJBQS9DQyxJQUErQztBQUFBLE1BQS9DQSxJQUErQywwQkFBeEMsRUFBd0M7QUFBQSw0QkFBcENDLFNBQW9DO0FBQUEsTUFBcENBLFNBQW9DLCtCQUF4QixFQUF3QjtBQUFBLDJCQUFwQkMsUUFBb0I7QUFBQSxNQUFwQkEsUUFBb0IsOEJB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ODhlMzYwYjM2Nzg2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgU3ZnUGF0aCBmcm9tIFwiLi9zdmdfcGF0aFwiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFByb2plY3RDYXJkID0gKHsgbmFtZSA9ICcnLCBkZXNjID0gJycsIGxpbmsgPSAnJywgdGVjaFN0YWNrID0gW10sIGNvdmVyU3JjID0gJycgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNjAwIHJvdW5kZWQtM3hsICdcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDkwMCwgaGVpZ2h0OiAnNjZ2aCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyU3JjLmxlbmd0aCAhPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkLTN4bCBpbWctZmFkaW5nLWJvdHRvbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y292ZXJTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9eydmaWxsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD17J2NvdmVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9J2VhZ2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBhYnNvbHV0ZSBib3R0b20tMTAgcHgtOCBwbGFjZS1jb250ZW50LWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnAgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LW1lZGl1bSBtci0zJyBkcmFnZ2FibGU9e2ZhbHNlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5sZW5ndGggIT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yNSwgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtNiB3LTYnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1N2Z1BhdGgubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayBzcGFjZS14LTIgbXktMic+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWNoU3RhY2subWFwKCh0ZWNoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17YCR7aW5kZXh9YH0gY2xhc3NOYW1lPVwidGV4dC14cyBweS0xIHB4LTIgcm91bmRlZC1mdWxsIHRleHQtd2hpdGUgYmctcmVkLWFjY2VudC0yMDAgYWxpZ24tbWlkZGxlIFwiPnt0ZWNofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLnBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHRleHQtZ3JheS0zMDAgZm9udC1leHRyYWxpZ2h0IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7ZGVzY31cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLnA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmRcclxuIiwiY29uc3QgU3ZnUGF0aCA9IHtcclxuICAgIGxpbms6IDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk0xMy44MjggMTAuMTcyYTQgNCAwIDAwLTUuNjU2IDBsLTQgNGE0IDQgMCAxMDUuNjU2IDUuNjU2bDEuMTAyLTEuMTAxbS0uNzU4LTQuODk5YTQgNCAwIDAwNS42NTYgMGw0LTRhNCA0IDAgMDAtNS42NTYtNS42NTZsLTEuMSAxLjFcIiAvPixcclxuICAgIGFib3V0OiA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0xNiA3YTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpNMTIgMTRhNyA3IDAgMDAtNyA3aDE0YTcgNyAwIDAwLTctN3pcIiAvPixcclxuICAgIGxhYjogPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMTkuNDI4IDE1LjQyOGEyIDIgMCAwMC0xLjAyMi0uNTQ3bC0yLjM4Ny0uNDc3YTYgNiAwIDAwLTMuODYuNTE3bC0uMzE4LjE1OGE2IDYgMCAwMS0zLjg2LjUxN0w2LjA1IDE1LjIxYTIgMiAwIDAwLTEuODA2LjU0N004IDRoOGwtMSAxdjUuMTcyYTIgMiAwIDAwLjU4NiAxLjQxNGw1IDVjMS4yNiAxLjI2LjM2NyAzLjQxNC0xLjQxNSAzLjQxNEg0LjgyOGMtMS43ODIgMC0yLjY3NC0yLjE1NC0xLjQxNC0zLjQxNGw1LTVBMiAyIDAgMDA5IDEwLjE3MlY1TDggNHpcIiAvPixcclxuICAgIHByb2plY3Q6IDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTEwIDIwbDQtMTZtNCA0bDQgNC00IDRNNiAxNmwtNC00IDQtNFwiIC8+LFxyXG4gICAgY29udGFjdDogPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMTYgMTJhNCA0IDAgMTAtOCAwIDQgNCAwIDAwOCAwem0wIDB2MS41YTIuNSAyLjUgMCAwMDUgMFYxMmE5IDkgMCAxMC05IDltNC41LTEuMjA2YTguOTU5IDguOTU5IDAgMDEtNC41IDEuMjA3XCIgLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnUGF0aCIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFpbmVyXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9qZWN0X2NhcmRcIlxyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuaW1wb3J0IFN3aXBlckNvcmUsIHsgRWZmZWN0Q292ZXJmbG93LCBLZXlib2FyZCwgTW91c2V3aGVlbCwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcblxyXG5pbXBvcnQgJ3N3aXBlci9zd2lwZXIubWluLmNzcyc7XHJcbmltcG9ydCAnc3dpcGVyL2NvbXBvbmVudHMvZWZmZWN0LWNvdmVyZmxvdy9lZmZlY3QtY292ZXJmbG93Lm1pbi5jc3MnO1xyXG5pbXBvcnQgTW90aW9uQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL21vdGlvbl9jb250YWluZXJcIlxyXG5pbXBvcnQgVGl0bGVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGl0bGVfYmFyXCJcclxuaW1wb3J0IFN2Z1BhdGgsIHsgUHJvamVjdFNWR1BhdGggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdmdfcGF0aFwiXHJcbmltcG9ydCBUaGVtZVRvZ2dsZSBmcm9tIFwiLi4vY29tcG9uZW50cy90aGVtZV90b2dnbGVcIlxyXG5cclxuU3dpcGVyQ29yZS51c2UoW0VmZmVjdENvdmVyZmxvdywgS2V5Ym9hcmQsIE1vdXNld2hlZWwsIFBhZ2luYXRpb25dKVxyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW90aW9uQ29udGFpbmVyIHBhdGg9J3Byb2plY3RzJz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+UHJvamVjdHM8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxUaGVtZVRvZ2dsZSAvPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlQmFyIHRpdGxlPSdQcm9qZWN0cycgc3ZnUGF0aD17U3ZnUGF0aC5wcm9qZWN0fSAvPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IFswLjgsIDFdIH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAxLjUsIGR1cmF0aW9uOiAwLjMgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIHB0LTEwIHBiLTEwJ1xyXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdD0nY292ZXJmbG93J1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vcD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBncmFiQ3Vyc29yPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9eydhdXRvJ31cclxuICAgICAgICAgICAgICAgICAgICBjb3ZlcmZsb3dFZmZlY3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ubHlJblZpZXdwb3J0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1vdXNld2hlZWw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmcmFjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPSdyb3VuZGVkLTN4bCAnIHN0eWxlPXt7IG1heFdpZHRoOiA5MDAsIGhlaWdodDogJzY2dmgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1BvcnRmb2xpbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M9J1dlYnNpdGUgdG8gc2hvdyBteSBza2lsbHMgYW5kIHVzZSB0aGVtIHRvIGFwcGx5IGZvciBqb2JzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXJTcmM9Jy9pbWFnZXMvU2NyZWVuLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9J2h0dHBzOi8vcG9ydGZvbGlvLWdpdC1tYWluLXBvbmdzYWtvcm5uYWtsYW5nLnZlcmNlbC5hcHAvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVjaFN0YWNrPXtbJ05leHQuanMnLCAnVGFpbHdpbmQgQ1NTJywgJ0ZyYW1lciddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT0ncm91bmRlZC0zeGwnIHN0eWxlPXt7IG1heFdpZHRoOiA5MDAsIGhlaWdodDogJzY2dmgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1NVVCBFLVByb2plY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjPSdXZWIgYXBwbGljYXRpb24gZm9yIG1hbmFnaW5nIHNvZnR3YXJlIHByb2plY3RzIGJldHdlZW4gc3R1ZGVudHMgYW5kIHByb2Zlc3NvcnM7IHN0b3JlcyBwcm9qZWN0IGZpbGVzIGZvciBhbmFseXNpcyBhbmQgcXVlcnkgcHVycG9zZXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3ZlclNyYz0nL2ltYWdlcy9lLXByb2plY3QucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz0naHR0cDovL2l0Mi5zdXQuYWMudGgvcHJvamVjdDYzX2c0MC8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWNoU3RhY2s9e1snUmVhY3QuanMnLCAnQW50IGRlc2lnbicsICdFeHByZXNzJywgJ215c3FsJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPSdyb3VuZGVkLTN4bCcgc3R5bGU9e3sgbWF4V2lkdGg6IDkwMCwgaGVpZ2h0OiAnNjZ2aCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nQXBwc0xpbWl0ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjPSdGb3IgbGltaXRpbmcgdGhlIHVzZSBvZiBtb2JpbGUgYXBwbGljYXRpb25zIHNvIGFzIG5vdCB0byBpbnRlcmZlcmUgd2l0aCBvdGhlciBhY3Rpdml0aWVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXJTcmM9Jy9pbWFnZXMvQXBwc0xpbWl0ZXIucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz0naHR0cHM6Ly9naXRodWIuY29tL1BvbmdzYWtvcm5OYWtsYW5nL0FwcHNMaW1pdGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVjaFN0YWNrPXtbJ0phdmEnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9J3JvdW5kZWQtM3hsJyBzdHlsZT17eyBtYXhXaWR0aDogOTAwLCBoZWlnaHQ6ICc2NnZoJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdBdG1vc3BoZXJlIChEdXN0IGRldGVjdGVyKSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M9J0ZvciBkZXRlY3RpbmcgZHVzdCBhcm91bmQgSW9UIGRldmljZXMgYW5kIGFsYXJtaW5nIHdoZW4gdGhlIGR1c3QgZGVuc2l0eSBpcyBkYW5nZXJvdXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3ZlclNyYz0nL2ltYWdlcy9BdG1vc3BoZXJlLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9J2h0dHBzOi8vZ2l0aHViLmNvbS9Qb25nc2Frb3JuTmFrbGFuZy9BdG1vc3BoZXJlLW1vYmlsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlY2hTdGFjaz17WydKYXZhJywgJ0MrKycsICdlc3A4MjY2JywgJ0dQMlkxMDEwQVUwRicsICdGaXJlYmFzZSBSZWFsdGltZSBEYXRhYmFzZSddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT0ncm91bmRlZC0zeGwnIHN0eWxlPXt7IG1heFdpZHRoOiA5MDAsIGhlaWdodDogJzY2dmgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1NVVCBTcG9ydCBhbmQgSGVhbHRoIENlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M9J1N1cHBvcnQgdGhlIHVzZXIgZXhwZXJpZW5jZSBvZiB1c2luZyBzcG9ydCBhbmQgaGVhbHRoIGNlbnRlciBhdCBTdXJhbmFyZWUgVW5pdmVyc2l0eSBvZiBUZWNobm9sb2d5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXJTcmM9Jy9pbWFnZXMvU1VUX1Nwb3J0X2FuZF9IZWFsdGhfQ2VudGVyLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9J2h0dHA6Ly9zdHVkZW50LnN1dC5hYy50aC9iNjA3NDU2Mi9TVVRfU3BvcnRBbmRIZWFsdGhDZW50ZXIvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVjaFN0YWNrPXtbJ1BIUCcsICdIVE1MJywgJ0NTUyddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXBhZ2luYXRpb24gdGV4dC1jZW50ZXIgbXQtNiB0ZXh0LXdoaXRlIHRleHQtYmFzZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L01vdGlvbkNvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==