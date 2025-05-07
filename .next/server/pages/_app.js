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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// context/CartContext.js\n\n\n// 액션 타입\nconst ADD = 'ADD';\nconst REMOVE = 'REMOVE';\nconst CLEAR = 'CLEAR';\n// 리듀서: 항상 state.items 가 배열이어야 합니다\nfunction cartReducer(state, action) {\n    switch(action.type){\n        case ADD:\n            {\n                const { product, qty } = action.payload;\n                const idx = state.items.findIndex((i)=>i.id === product.id);\n                if (idx > -1) {\n                    // 이미 담긴 상품이면 수량만 합산\n                    const newItems = [\n                        ...state.items\n                    ];\n                    newItems[idx].qty = Math.min(99, newItems[idx].qty + qty);\n                    return {\n                        items: newItems\n                    };\n                }\n                // 신규 상품\n                return {\n                    items: [\n                        ...state.items,\n                        {\n                            ...product,\n                            qty\n                        }\n                    ]\n                };\n            }\n        case REMOVE:\n            return {\n                items: state.items.filter((i)=>i.id !== action.payload)\n            };\n        case CLEAR:\n            return {\n                items: []\n            };\n        default:\n            throw new Error(`Unknown action: ${action.type}`);\n    }\n}\nconst CartStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartDispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction CartProvider({ children }) {\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(cartReducer, {\n        items: []\n    });\n    const addToCart = (product, qty)=>dispatch({\n            type: ADD,\n            payload: {\n                product,\n                qty\n            }\n        });\n    const removeFromCart = (id)=>dispatch({\n            type: REMOVE,\n            payload: id\n        });\n    const clearCart = ()=>dispatch({\n            type: CLEAR\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartStateContext.Provider, {\n        value: state,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartDispatchContext.Provider, {\n            value: {\n                addToCart,\n                removeFromCart,\n                clearCart\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\MyPC_B650M Pro RS\\\\Downloads\\\\tripbox-full-project\\\\tripbox\\\\context\\\\CartContext.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MyPC_B650M Pro RS\\\\Downloads\\\\tripbox-full-project\\\\tripbox\\\\context\\\\CartContext.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\nfunction useCart() {\n    const state = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartStateContext);\n    const dispatchers = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartDispatchContext);\n    if (!state || !dispatchers) {\n        throw new Error('useCart must be used within CartProvider');\n    }\n    return {\n        items: state.items,\n        ...dispatchers\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvQ2FydENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEseUJBQXlCOztBQUMyQztBQUVwRSxRQUFRO0FBQ1IsTUFBTUksTUFBUztBQUNmLE1BQU1DLFNBQVM7QUFDZixNQUFNQyxRQUFTO0FBRWYsa0NBQWtDO0FBQ2xDLFNBQVNDLFlBQVlDLEtBQUssRUFBRUMsTUFBTTtJQUNoQyxPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUtOO1lBQUs7Z0JBQ1IsTUFBTSxFQUFFTyxPQUFPLEVBQUVDLEdBQUcsRUFBRSxHQUFHSCxPQUFPSSxPQUFPO2dCQUN2QyxNQUFNQyxNQUFNTixNQUFNTyxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsRUFBRSxLQUFLUCxRQUFRTyxFQUFFO2dCQUMxRCxJQUFJSixNQUFNLENBQUMsR0FBRztvQkFDWixvQkFBb0I7b0JBQ3BCLE1BQU1LLFdBQVc7MkJBQUlYLE1BQU1PLEtBQUs7cUJBQUM7b0JBQ2pDSSxRQUFRLENBQUNMLElBQUksQ0FBQ0YsR0FBRyxHQUFHUSxLQUFLQyxHQUFHLENBQUMsSUFBSUYsUUFBUSxDQUFDTCxJQUFJLENBQUNGLEdBQUcsR0FBR0E7b0JBQ3JELE9BQU87d0JBQUVHLE9BQU9JO29CQUFTO2dCQUMzQjtnQkFDQSxRQUFRO2dCQUNSLE9BQU87b0JBQUVKLE9BQU87MkJBQUlQLE1BQU1PLEtBQUs7d0JBQUU7NEJBQUUsR0FBR0osT0FBTzs0QkFBRUM7d0JBQUk7cUJBQUU7Z0JBQUM7WUFDeEQ7UUFDQSxLQUFLUDtZQUNILE9BQU87Z0JBQUVVLE9BQU9QLE1BQU1PLEtBQUssQ0FBQ08sTUFBTSxDQUFDTCxDQUFBQSxJQUFLQSxFQUFFQyxFQUFFLEtBQUtULE9BQU9JLE9BQU87WUFBRTtRQUNuRSxLQUFLUDtZQUNILE9BQU87Z0JBQUVTLE9BQU8sRUFBRTtZQUFDO1FBQ3JCO1lBQ0UsTUFBTSxJQUFJUSxNQUFNLENBQUMsZ0JBQWdCLEVBQUVkLE9BQU9DLElBQUksRUFBRTtJQUNwRDtBQUNGO0FBRUEsTUFBTWMsaUNBQXNCdkIsb0RBQWFBO0FBQ3pDLE1BQU13QixvQ0FBc0J4QixvREFBYUE7QUFFbEMsU0FBU3lCLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ25CLE9BQU9vQixTQUFTLEdBQUd6QixpREFBVUEsQ0FBQ0ksYUFBYTtRQUFFUSxPQUFPLEVBQUU7SUFBQztJQUU5RCxNQUFNYyxZQUFnQixDQUFDbEIsU0FBU0MsTUFBUWdCLFNBQVM7WUFBRWxCLE1BQU1OO1lBQVFTLFNBQVM7Z0JBQUVGO2dCQUFTQztZQUFJO1FBQUU7SUFDM0YsTUFBTWtCLGlCQUFpQlosQ0FBQUEsS0FBbUJVLFNBQVM7WUFBRWxCLE1BQU1MO1lBQVFRLFNBQVNLO1FBQUc7SUFDL0UsTUFBTWEsWUFBaUIsSUFBbUJILFNBQVM7WUFBRWxCLE1BQU1KO1FBQU07SUFFakUscUJBQ0UsOERBQUNrQixpQkFBaUJRLFFBQVE7UUFBQ0MsT0FBT3pCO2tCQUNoQyw0RUFBQ2lCLG9CQUFvQk8sUUFBUTtZQUFDQyxPQUFPO2dCQUFFSjtnQkFBV0M7Z0JBQWdCQztZQUFVO3NCQUN6RUo7Ozs7Ozs7Ozs7O0FBSVQ7QUFFTyxTQUFTTztJQUNkLE1BQU0xQixRQUFjTixpREFBVUEsQ0FBQ3NCO0lBQy9CLE1BQU1XLGNBQWNqQyxpREFBVUEsQ0FBQ3VCO0lBQy9CLElBQUksQ0FBQ2pCLFNBQVMsQ0FBQzJCLGFBQWE7UUFDMUIsTUFBTSxJQUFJWixNQUFNO0lBQ2xCO0lBQ0EsT0FBTztRQUNMUixPQUFPUCxNQUFNTyxLQUFLO1FBQ2xCLEdBQUdvQixXQUFXO0lBQ2hCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXlQQ19CNjUwTSBQcm8gUlNcXERvd25sb2Fkc1xcdHJpcGJveC1mdWxsLXByb2plY3RcXHRyaXBib3hcXGNvbnRleHRcXENhcnRDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnRleHQvQ2FydENvbnRleHQuanNcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5cbi8vIOyVoeyFmCDtg4DsnoVcbmNvbnN0IEFERCAgICA9ICdBREQnXG5jb25zdCBSRU1PVkUgPSAnUkVNT1ZFJ1xuY29uc3QgQ0xFQVIgID0gJ0NMRUFSJ1xuXG4vLyDrpqzrk4DshJw6IO2VreyDgSBzdGF0ZS5pdGVtcyDqsIAg67Cw7Je07J207Ja07JW8IO2VqeuLiOuLpFxuZnVuY3Rpb24gY2FydFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBREQ6IHtcbiAgICAgIGNvbnN0IHsgcHJvZHVjdCwgcXR5IH0gPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgY29uc3QgaWR4ID0gc3RhdGUuaXRlbXMuZmluZEluZGV4KGkgPT4gaS5pZCA9PT0gcHJvZHVjdC5pZClcbiAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAvLyDsnbTrr7gg64u06ri0IOyDge2SiOydtOuptCDsiJjrn4nrp4wg7ZWp7IKwXG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLnN0YXRlLml0ZW1zXVxuICAgICAgICBuZXdJdGVtc1tpZHhdLnF0eSA9IE1hdGgubWluKDk5LCBuZXdJdGVtc1tpZHhdLnF0eSArIHF0eSlcbiAgICAgICAgcmV0dXJuIHsgaXRlbXM6IG5ld0l0ZW1zIH1cbiAgICAgIH1cbiAgICAgIC8vIOyLoOq3nCDsg4HtkohcbiAgICAgIHJldHVybiB7IGl0ZW1zOiBbLi4uc3RhdGUuaXRlbXMsIHsgLi4ucHJvZHVjdCwgcXR5IH1dIH1cbiAgICB9XG4gICAgY2FzZSBSRU1PVkU6XG4gICAgICByZXR1cm4geyBpdGVtczogc3RhdGUuaXRlbXMuZmlsdGVyKGkgPT4gaS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpIH1cbiAgICBjYXNlIENMRUFSOlxuICAgICAgcmV0dXJuIHsgaXRlbXM6IFtdIH1cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbjogJHthY3Rpb24udHlwZX1gKVxuICB9XG59XG5cbmNvbnN0IENhcnRTdGF0ZUNvbnRleHQgICAgPSBjcmVhdGVDb250ZXh0KClcbmNvbnN0IENhcnREaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGZ1bmN0aW9uIENhcnRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGNhcnRSZWR1Y2VyLCB7IGl0ZW1zOiBbXSB9KVxuXG4gIGNvbnN0IGFkZFRvQ2FydCAgICAgPSAocHJvZHVjdCwgcXR5KSA9PiBkaXNwYXRjaCh7IHR5cGU6IEFERCwgICAgcGF5bG9hZDogeyBwcm9kdWN0LCBxdHkgfSB9KVxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IGlkICAgICAgICAgICAgICA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFTU9WRSwgcGF5bG9hZDogaWQgfSlcbiAgY29uc3QgY2xlYXJDYXJ0ICAgICAgPSAoKSAgICAgICAgICAgICAgPT4gZGlzcGF0Y2goeyB0eXBlOiBDTEVBUiB9KVxuXG4gIHJldHVybiAoXG4gICAgPENhcnRTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgIDxDYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQsIGNsZWFyQ2FydCB9fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9DYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQ2FydFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydCgpIHtcbiAgY29uc3Qgc3RhdGUgICAgICAgPSB1c2VDb250ZXh0KENhcnRTdGF0ZUNvbnRleHQpXG4gIGNvbnN0IGRpc3BhdGNoZXJzID0gdXNlQ29udGV4dChDYXJ0RGlzcGF0Y2hDb250ZXh0KVxuICBpZiAoIXN0YXRlIHx8ICFkaXNwYXRjaGVycykge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQ2FydCBtdXN0IGJlIHVzZWQgd2l0aGluIENhcnRQcm92aWRlcicpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogc3RhdGUuaXRlbXMsXG4gICAgLi4uZGlzcGF0Y2hlcnMsXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsIkFERCIsIlJFTU9WRSIsIkNMRUFSIiwiY2FydFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwcm9kdWN0IiwicXR5IiwicGF5bG9hZCIsImlkeCIsIml0ZW1zIiwiZmluZEluZGV4IiwiaSIsImlkIiwibmV3SXRlbXMiLCJNYXRoIiwibWluIiwiZmlsdGVyIiwiRXJyb3IiLCJDYXJ0U3RhdGVDb250ZXh0IiwiQ2FydERpc3BhdGNoQ29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJhZGRUb0NhcnQiLCJyZW1vdmVGcm9tQ2FydCIsImNsZWFyQ2FydCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0IiwiZGlzcGF0Y2hlcnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/CartContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CartContext */ \"(pages-dir-node)/./context/CartContext.js\");\n// pages/_app.js\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\MyPC_B650M Pro RS\\\\Downloads\\\\tripbox-full-project\\\\tripbox\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MyPC_B650M Pro RS\\\\Downloads\\\\tripbox-full-project\\\\tripbox\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsZ0JBQWdCOztBQUNjO0FBQ3VCO0FBRXRDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILDhEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxNeVBDX0I2NTBNIFBybyBSU1xcRG93bmxvYWRzXFx0cmlwYm94LWZ1bGwtcHJvamVjdFxcdHJpcGJveFxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC5qc1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0NhcnRDb250ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENhcnRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NhcnRQcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNhcnRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

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