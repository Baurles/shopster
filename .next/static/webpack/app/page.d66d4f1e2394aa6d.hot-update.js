"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ui/Catalog.tsx":
/*!***********************************!*\
  !*** ./components/ui/Catalog.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Catalog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaList_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaList!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _modal_CatalogModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/CatalogModal */ \"(app-pages-browser)/./components/ui/modal/CatalogModal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Catalog() {\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleModal = ()=>{\n        if (isModalOpen) {\n            setIsModalOpen(false);\n        }\n        setIsModalOpen(true);\n    };\n    if (isModalOpen) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_CatalogModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            handleModal: handleModal\n        }, void 0, false, {\n            fileName: \"D:\\\\Codes\\\\learning\\\\shop\\\\components\\\\ui\\\\Catalog.tsx\",\n            lineNumber: 16,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: handleModal,\n        className: \"flex justify-center  align-bottom gap-2 p-1 border-solid cursor-pointer border-2 rounded-lg  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaList_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaList, {}, void 0, false, {\n                fileName: \"D:\\\\Codes\\\\learning\\\\shop\\\\components\\\\ui\\\\Catalog.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-sm \",\n                children: \"Каталог\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Codes\\\\learning\\\\shop\\\\components\\\\ui\\\\Catalog.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Codes\\\\learning\\\\shop\\\\components\\\\ui\\\\Catalog.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Catalog, \"mLsII5HRP5G63IA/8vjZ5YHXWr8=\");\n_c = Catalog;\nvar _c;\n$RefreshReg$(_c, \"Catalog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQ2F0YWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTztBQUNRO0FBRWpDLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFFL0MsTUFBTU0sY0FBYztRQUNsQixJQUFJRixhQUFhO1lBQ2ZDLGVBQWU7UUFDakI7UUFDQUEsZUFBZTtJQUNqQjtJQUVBLElBQUlELGFBQWE7UUFDZixxQkFBTyw4REFBQ0YsMkRBQVlBO1lBQUNJLGFBQWFBOzs7Ozs7SUFDcEM7SUFFQSxxQkFDRSw4REFBQ0M7UUFDQ0MsU0FBU0Y7UUFDVEcsV0FBVTs7MEJBRVYsOERBQUNSLGdGQUFNQTs7Ozs7MEJBQ1AsOERBQUNTO2dCQUFLRCxXQUFVOzBCQUFXOzs7Ozs7Ozs7Ozs7QUFHakM7R0F2QndCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL0NhdGFsb2cudHN4PzliMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFMaXN0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCBDYXRhbG9nTW9kYWwgZnJvbSBcIi4vbW9kYWwvQ2F0YWxvZ01vZGFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRhbG9nKCkge1xyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2RhbCA9ICgpID0+IHtcclxuICAgIGlmIChpc01vZGFsT3Blbikge1xyXG4gICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICB9O1xyXG4gIFxyXG4gIGlmIChpc01vZGFsT3Blbikge1xyXG4gICAgcmV0dXJuIDxDYXRhbG9nTW9kYWwgaGFuZGxlTW9kYWw9e2hhbmRsZU1vZGFsfSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vZGFsfVxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyICBhbGlnbi1ib3R0b20gZ2FwLTIgcC0xIGJvcmRlci1zb2xpZCBjdXJzb3ItcG9pbnRlciBib3JkZXItMiByb3VuZGVkLWxnICBcIlxyXG4gICAgPlxyXG4gICAgICA8RmFMaXN0IC8+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gXCI+0JrQsNGC0LDQu9C+0LM8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZhTGlzdCIsIkNhdGFsb2dNb2RhbCIsIkNhdGFsb2ciLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiaGFuZGxlTW9kYWwiLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/Catalog.tsx\n"));

/***/ })

});