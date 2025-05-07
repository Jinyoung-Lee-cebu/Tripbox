/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./context/CartContext.js":
/*!********************************!*\
  !*** ./context/CartContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// context/CartContext.js\n\n\n// 액션 타입\nconst ADD = 'ADD';\nconst REMOVE = 'REMOVE';\nconst CLEAR = 'CLEAR';\n// 리듀서: 항상 state.items 가 배열이어야 합니다\nfunction cartReducer(state, action) {\n    switch(action.type){\n        case ADD:\n            {\n                const { product, qty } = action.payload;\n                const idx = state.items.findIndex((i)=>i.id === product.id);\n                if (idx > -1) {\n                    // 이미 담긴 상품이면 수량만 합산\n                    const newItems = [\n                        ...state.items\n                    ];\n                    newItems[idx].qty = Math.min(99, newItems[idx].qty + qty);\n                    return {\n                        items: newItems\n                    };\n                }\n                // 신규 상품\n                return {\n                    items: [\n                        ...state.items,\n                        {\n                            ...product,\n                            qty\n                        }\n                    ]\n                };\n            }\n        case REMOVE:\n            return {\n                items: state.items.filter((i)=>i.id !== action.payload)\n            };\n        case CLEAR:\n            return {\n                items: []\n            };\n        default:\n            throw new Error(`Unknown action: ${action.type}`);\n    }\n}\nconst CartStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartDispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction CartProvider({ children }) {\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(cartReducer, {\n        items: []\n    });\n    const addToCart = (product, qty)=>dispatch({\n            type: ADD,\n            payload: {\n                product,\n                qty\n            }\n        });\n    const removeFromCart = (id)=>dispatch({\n            type: REMOVE,\n            payload: id\n        });\n    const clearCart = ()=>dispatch({\n            type: CLEAR\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartStateContext.Provider, {\n        value: state,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartDispatchContext.Provider, {\n            value: {\n                addToCart,\n                removeFromCart,\n                clearCart\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\MyPC_B650M Pro RS\\\\Downloads\\\\tripbox-full-project\\\\tripbox\\\\context\\\\CartContext.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MyPC_B650M Pro RS\\\\Downloads\\\\tripbox-full-project\\\\tripbox\\\\context\\\\CartContext.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\nfunction useCart() {\n    const state = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartStateContext);\n    const dispatchers = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartDispatchContext);\n    if (!state || !dispatchers) {\n        throw new Error('useCart must be used within CartProvider');\n    }\n    return {\n        items: state.items,\n        ...dispatchers\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvQ2FydENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEseUJBQXlCOztBQUMyQztBQUVwRSxRQUFRO0FBQ1IsTUFBTUksTUFBUztBQUNmLE1BQU1DLFNBQVM7QUFDZixNQUFNQyxRQUFTO0FBRWYsa0NBQWtDO0FBQ2xDLFNBQVNDLFlBQVlDLEtBQUssRUFBRUMsTUFBTTtJQUNoQyxPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUtOO1lBQUs7Z0JBQ1IsTUFBTSxFQUFFTyxPQUFPLEVBQUVDLEdBQUcsRUFBRSxHQUFHSCxPQUFPSSxPQUFPO2dCQUN2QyxNQUFNQyxNQUFNTixNQUFNTyxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsRUFBRSxLQUFLUCxRQUFRTyxFQUFFO2dCQUMxRCxJQUFJSixNQUFNLENBQUMsR0FBRztvQkFDWixvQkFBb0I7b0JBQ3BCLE1BQU1LLFdBQVc7MkJBQUlYLE1BQU1PLEtBQUs7cUJBQUM7b0JBQ2pDSSxRQUFRLENBQUNMLElBQUksQ0FBQ0YsR0FBRyxHQUFHUSxLQUFLQyxHQUFHLENBQUMsSUFBSUYsUUFBUSxDQUFDTCxJQUFJLENBQUNGLEdBQUcsR0FBR0E7b0JBQ3JELE9BQU87d0JBQUVHLE9BQU9JO29CQUFTO2dCQUMzQjtnQkFDQSxRQUFRO2dCQUNSLE9BQU87b0JBQUVKLE9BQU87MkJBQUlQLE1BQU1PLEtBQUs7d0JBQUU7NEJBQUUsR0FBR0osT0FBTzs0QkFBRUM7d0JBQUk7cUJBQUU7Z0JBQUM7WUFDeEQ7UUFDQSxLQUFLUDtZQUNILE9BQU87Z0JBQUVVLE9BQU9QLE1BQU1PLEtBQUssQ0FBQ08sTUFBTSxDQUFDTCxDQUFBQSxJQUFLQSxFQUFFQyxFQUFFLEtBQUtULE9BQU9JLE9BQU87WUFBRTtRQUNuRSxLQUFLUDtZQUNILE9BQU87Z0JBQUVTLE9BQU8sRUFBRTtZQUFDO1FBQ3JCO1lBQ0UsTUFBTSxJQUFJUSxNQUFNLENBQUMsZ0JBQWdCLEVBQUVkLE9BQU9DLElBQUksRUFBRTtJQUNwRDtBQUNGO0FBRUEsTUFBTWMsaUNBQXNCdkIsb0RBQWFBO0FBQ3pDLE1BQU13QixvQ0FBc0J4QixvREFBYUE7QUFFbEMsU0FBU3lCLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ25CLE9BQU9vQixTQUFTLEdBQUd6QixpREFBVUEsQ0FBQ0ksYUFBYTtRQUFFUSxPQUFPLEVBQUU7SUFBQztJQUU5RCxNQUFNYyxZQUFnQixDQUFDbEIsU0FBU0MsTUFBUWdCLFNBQVM7WUFBRWxCLE1BQU1OO1lBQVFTLFNBQVM7Z0JBQUVGO2dCQUFTQztZQUFJO1FBQUU7SUFDM0YsTUFBTWtCLGlCQUFpQlosQ0FBQUEsS0FBbUJVLFNBQVM7WUFBRWxCLE1BQU1MO1lBQVFRLFNBQVNLO1FBQUc7SUFDL0UsTUFBTWEsWUFBaUIsSUFBbUJILFNBQVM7WUFBRWxCLE1BQU1KO1FBQU07SUFFakUscUJBQ0UsOERBQUNrQixpQkFBaUJRLFFBQVE7UUFBQ0MsT0FBT3pCO2tCQUNoQyw0RUFBQ2lCLG9CQUFvQk8sUUFBUTtZQUFDQyxPQUFPO2dCQUFFSjtnQkFBV0M7Z0JBQWdCQztZQUFVO3NCQUN6RUo7Ozs7Ozs7Ozs7O0FBSVQ7QUFFTyxTQUFTTztJQUNkLE1BQU0xQixRQUFjTixpREFBVUEsQ0FBQ3NCO0lBQy9CLE1BQU1XLGNBQWNqQyxpREFBVUEsQ0FBQ3VCO0lBQy9CLElBQUksQ0FBQ2pCLFNBQVMsQ0FBQzJCLGFBQWE7UUFDMUIsTUFBTSxJQUFJWixNQUFNO0lBQ2xCO0lBQ0EsT0FBTztRQUNMUixPQUFPUCxNQUFNTyxLQUFLO1FBQ2xCLEdBQUdvQixXQUFXO0lBQ2hCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXlQQ19CNjUwTSBQcm8gUlNcXERvd25sb2Fkc1xcdHJpcGJveC1mdWxsLXByb2plY3RcXHRyaXBib3hcXGNvbnRleHRcXENhcnRDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnRleHQvQ2FydENvbnRleHQuanNcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vIOyVoeyFmCDtg4DsnoVcclxuY29uc3QgQUREICAgID0gJ0FERCdcclxuY29uc3QgUkVNT1ZFID0gJ1JFTU9WRSdcclxuY29uc3QgQ0xFQVIgID0gJ0NMRUFSJ1xyXG5cclxuLy8g66as65OA7IScOiDtla3sg4Egc3RhdGUuaXRlbXMg6rCAIOuwsOyXtOydtOyWtOyVvCDtlanri4jri6RcclxuZnVuY3Rpb24gY2FydFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREOiB7XHJcbiAgICAgIGNvbnN0IHsgcHJvZHVjdCwgcXR5IH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBpZHggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoaSA9PiBpLmlkID09PSBwcm9kdWN0LmlkKVxyXG4gICAgICBpZiAoaWR4ID4gLTEpIHtcclxuICAgICAgICAvLyDsnbTrr7gg64u06ri0IOyDge2SiOydtOuptCDsiJjrn4nrp4wg7ZWp7IKwXHJcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uc3RhdGUuaXRlbXNdXHJcbiAgICAgICAgbmV3SXRlbXNbaWR4XS5xdHkgPSBNYXRoLm1pbig5OSwgbmV3SXRlbXNbaWR4XS5xdHkgKyBxdHkpXHJcbiAgICAgICAgcmV0dXJuIHsgaXRlbXM6IG5ld0l0ZW1zIH1cclxuICAgICAgfVxyXG4gICAgICAvLyDsi6Dqt5wg7IOB7ZKIXHJcbiAgICAgIHJldHVybiB7IGl0ZW1zOiBbLi4uc3RhdGUuaXRlbXMsIHsgLi4ucHJvZHVjdCwgcXR5IH1dIH1cclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFOlxyXG4gICAgICByZXR1cm4geyBpdGVtczogc3RhdGUuaXRlbXMuZmlsdGVyKGkgPT4gaS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpIH1cclxuICAgIGNhc2UgQ0xFQVI6XHJcbiAgICAgIHJldHVybiB7IGl0ZW1zOiBbXSB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWN0aW9uOiAke2FjdGlvbi50eXBlfWApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBDYXJ0U3RhdGVDb250ZXh0ICAgID0gY3JlYXRlQ29udGV4dCgpXHJcbmNvbnN0IENhcnREaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGNhcnRSZWR1Y2VyLCB7IGl0ZW1zOiBbXSB9KVxyXG5cclxuICBjb25zdCBhZGRUb0NhcnQgICAgID0gKHByb2R1Y3QsIHF0eSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBBREQsICAgIHBheWxvYWQ6IHsgcHJvZHVjdCwgcXR5IH0gfSlcclxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IGlkICAgICAgICAgICAgICA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFTU9WRSwgcGF5bG9hZDogaWQgfSlcclxuICBjb25zdCBjbGVhckNhcnQgICAgICA9ICgpICAgICAgICAgICAgICA9PiBkaXNwYXRjaCh7IHR5cGU6IENMRUFSIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8Q2FydERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0LCBjbGVhckNhcnQgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L0NhcnRTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydCgpIHtcclxuICBjb25zdCBzdGF0ZSAgICAgICA9IHVzZUNvbnRleHQoQ2FydFN0YXRlQ29udGV4dClcclxuICBjb25zdCBkaXNwYXRjaGVycyA9IHVzZUNvbnRleHQoQ2FydERpc3BhdGNoQ29udGV4dClcclxuICBpZiAoIXN0YXRlIHx8ICFkaXNwYXRjaGVycykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VDYXJ0IG11c3QgYmUgdXNlZCB3aXRoaW4gQ2FydFByb3ZpZGVyJylcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcyxcclxuICAgIC4uLmRpc3BhdGNoZXJzLFxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJBREQiLCJSRU1PVkUiLCJDTEVBUiIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdCIsInF0eSIsInBheWxvYWQiLCJpZHgiLCJpdGVtcyIsImZpbmRJbmRleCIsImkiLCJpZCIsIm5ld0l0ZW1zIiwiTWF0aCIsIm1pbiIsImZpbHRlciIsIkVycm9yIiwiQ2FydFN0YXRlQ29udGV4dCIsIkNhcnREaXNwYXRjaENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwiYWRkVG9DYXJ0IiwicmVtb3ZlRnJvbUNhcnQiLCJjbGVhckNhcnQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2FydCIsImRpc3BhdGNoZXJzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/CartContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CartContext */ \"(pages-dir-node)/./context/CartContext.js\");\n// pages/_app.js\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\MyPC_B650M Pro RS\\\\Downloads\\\\tripbox-full-project\\\\tripbox\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MyPC_B650M Pro RS\\\\Downloads\\\\tripbox-full-project\\\\tripbox\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsZ0JBQWdCOztBQUNjO0FBQ3VCO0FBRXRDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILDhEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxNeVBDX0I2NTBNIFBybyBSU1xcRG93bmxvYWRzXFx0cmlwYm94LWZ1bGwtcHJvamVjdFxcdHJpcGJveFxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC5qc1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9DYXJ0Q29udGV4dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9DYXJ0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDYXJ0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.js"));
module.exports = __webpack_exports__;

})();