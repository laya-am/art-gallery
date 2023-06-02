"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navigation/index.js



function Navigation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Spotlight"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/art-pieces",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Pieces"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/favorites",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Favorites"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Layout/index.js


function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2887);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var _stores_artPiecesStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9281);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1187);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _stores_artPiecesStore__WEBPACK_IMPORTED_MODULE_3__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, _stores_artPiecesStore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const url = "https://example-apis.vercel.app/api/art";
const fetcher = (...args)=>fetch(...args).then((res)=>res.json());
function App({ Component , pageProps  }) {
    const setPieces = (0,_stores_artPiecesStore__WEBPACK_IMPORTED_MODULE_3__/* .useArtPiecesStore */ .D)((state)=>state.setPieces);
    const { data: pieces , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(url, fetcher);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setPieces(pieces || []);
    }, [
        setPieces,
        pieces
    ]);
    const [favPieces, setFavPieces] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    function handleFavs(slug) {
        setFavPieces((favPieces)=>{
            // find the favPiece in the state
            const favPiece = favPieces.find((favPiece)=>favPiece.slug === slug);
            // if the favPiece is already in the state, toggle the isFav property
            if (favPiece) {
                return favPieces.map((favPiece)=>favPiece.slug === slug ? {
                        ...favPiece,
                        isFav: !favPiece.isFav
                    } : favPiece);
            }
            // if the favPiece is not in the state, add it with isFunny set to true
            return [
                ...favPieces,
                {
                    slug,
                    isFav: true
                }
            ];
        });
        return favPieces;
    }
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "failed to load"
    });
    if (isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "loading..."
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    onFavs: handleFavs,
                    favPieces: favPieces,
                    ...pageProps
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useArtPiecesStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useArtPiecesStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        pieces: [],
        setPieces: (pieces)=>{
            set((state)=>{
                return {
                    pieces: pieces
                };
            });
        }
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();