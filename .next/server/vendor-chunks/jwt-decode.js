"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jwt-decode";
exports.ids = ["vendor-chunks/jwt-decode"];
exports.modules = {

/***/ "(ssr)/./node_modules/jwt-decode/build/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/jwt-decode/build/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InvalidTokenError: () => (/* binding */ InvalidTokenError),\n/* harmony export */   jwtDecode: () => (/* binding */ jwtDecode)\n/* harmony export */ });\nclass InvalidTokenError extends Error {\n}\nInvalidTokenError.prototype.name = \"InvalidTokenError\";\nfunction b64DecodeUnicode(str) {\n    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {\n        let code = p.charCodeAt(0).toString(16).toUpperCase();\n        if (code.length < 2) {\n            code = \"0\" + code;\n        }\n        return \"%\" + code;\n    }));\n}\nfunction base64UrlDecode(str) {\n    let output = str.replace(/-/g, \"+\").replace(/_/g, \"/\");\n    switch (output.length % 4) {\n        case 0:\n            break;\n        case 2:\n            output += \"==\";\n            break;\n        case 3:\n            output += \"=\";\n            break;\n        default:\n            throw new Error(\"base64 string is not of the correct length\");\n    }\n    try {\n        return b64DecodeUnicode(output);\n    }\n    catch (err) {\n        return atob(output);\n    }\n}\nfunction jwtDecode(token, options) {\n    if (typeof token !== \"string\") {\n        throw new InvalidTokenError(\"Invalid token specified: must be a string\");\n    }\n    options || (options = {});\n    const pos = options.header === true ? 0 : 1;\n    const part = token.split(\".\")[pos];\n    if (typeof part !== \"string\") {\n        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);\n    }\n    let decoded;\n    try {\n        decoded = base64UrlDecode(part);\n    }\n    catch (e) {\n        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);\n    }\n    try {\n        return JSON.parse(decoded);\n    }\n    catch (e) {\n        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvand0LWRlY29kZS9idWlsZC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxRQUFRO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixTQUFTLEdBQUcsVUFBVTtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLFNBQVMsR0FBRyxVQUFVO0FBQzdHO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb21lZGEtd2ViLy4vbm9kZV9tb2R1bGVzL2p3dC1kZWNvZGUvYnVpbGQvZXNtL2luZGV4LmpzPzU5ODEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEludmFsaWRUb2tlbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuSW52YWxpZFRva2VuRXJyb3IucHJvdG90eXBlLm5hbWUgPSBcIkludmFsaWRUb2tlbkVycm9yXCI7XG5mdW5jdGlvbiBiNjREZWNvZGVVbmljb2RlKHN0cikge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoYXRvYihzdHIpLnJlcGxhY2UoLyguKS9nLCAobSwgcCkgPT4ge1xuICAgICAgICBsZXQgY29kZSA9IHAuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKGNvZGUubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgY29kZSA9IFwiMFwiICsgY29kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCIlXCIgKyBjb2RlO1xuICAgIH0pKTtcbn1cbmZ1bmN0aW9uIGJhc2U2NFVybERlY29kZShzdHIpIHtcbiAgICBsZXQgb3V0cHV0ID0gc3RyLnJlcGxhY2UoLy0vZywgXCIrXCIpLnJlcGxhY2UoL18vZywgXCIvXCIpO1xuICAgIHN3aXRjaCAob3V0cHV0Lmxlbmd0aCAlIDQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIG91dHB1dCArPSBcIj09XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgb3V0cHV0ICs9IFwiPVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYXNlNjQgc3RyaW5nIGlzIG5vdCBvZiB0aGUgY29ycmVjdCBsZW5ndGhcIik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBiNjREZWNvZGVVbmljb2RlKG91dHB1dCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGF0b2Iob3V0cHV0KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gand0RGVjb2RlKHRva2VuLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZFRva2VuRXJyb3IoXCJJbnZhbGlkIHRva2VuIHNwZWNpZmllZDogbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICB9XG4gICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgICBjb25zdCBwb3MgPSBvcHRpb25zLmhlYWRlciA9PT0gdHJ1ZSA/IDAgOiAxO1xuICAgIGNvbnN0IHBhcnQgPSB0b2tlbi5zcGxpdChcIi5cIilbcG9zXTtcbiAgICBpZiAodHlwZW9mIHBhcnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEludmFsaWRUb2tlbkVycm9yKGBJbnZhbGlkIHRva2VuIHNwZWNpZmllZDogbWlzc2luZyBwYXJ0ICMke3BvcyArIDF9YCk7XG4gICAgfVxuICAgIGxldCBkZWNvZGVkO1xuICAgIHRyeSB7XG4gICAgICAgIGRlY29kZWQgPSBiYXNlNjRVcmxEZWNvZGUocGFydCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBJbnZhbGlkVG9rZW5FcnJvcihgSW52YWxpZCB0b2tlbiBzcGVjaWZpZWQ6IGludmFsaWQgYmFzZTY0IGZvciBwYXJ0ICMke3BvcyArIDF9ICgke2UubWVzc2FnZX0pYCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWQpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZFRva2VuRXJyb3IoYEludmFsaWQgdG9rZW4gc3BlY2lmaWVkOiBpbnZhbGlkIGpzb24gZm9yIHBhcnQgIyR7cG9zICsgMX0gKCR7ZS5tZXNzYWdlfSlgKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/jwt-decode/build/esm/index.js\n");

/***/ })

};
;