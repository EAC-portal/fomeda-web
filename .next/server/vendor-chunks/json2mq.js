/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/json2mq";
exports.ids = ["vendor-chunks/json2mq"];
exports.modules = {

/***/ "(ssr)/./node_modules/json2mq/index.js":
/*!***************************************!*\
  !*** ./node_modules/json2mq/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var camel2hyphen = __webpack_require__(/*! string-convert/camel2hyphen */ \"(ssr)/./node_modules/string-convert/camel2hyphen.js\");\n\nvar isDimension = function (feature) {\n  var re = /[height|width]$/;\n  return re.test(feature);\n};\n\nvar obj2mq = function (obj) {\n  var mq = '';\n  var features = Object.keys(obj);\n  features.forEach(function (feature, index) {\n    var value = obj[feature];\n    feature = camel2hyphen(feature);\n    // Add px to dimension features\n    if (isDimension(feature) && typeof value === 'number') {\n      value = value + 'px';\n    }\n    if (value === true) {\n      mq += feature;\n    } else if (value === false) {\n      mq += 'not ' + feature;\n    } else {\n      mq += '(' + feature + ': ' + value + ')';\n    }\n    if (index < features.length-1) {\n      mq += ' and '\n    }\n  });\n  return mq;\n};\n\nvar json2mq = function (query) {\n  var mq = '';\n  if (typeof query === 'string') {\n    return query;\n  }\n  // Handling array of media queries\n  if (query instanceof Array) {\n    query.forEach(function (q, index) {\n      mq += obj2mq(q);\n      if (index < query.length-1) {\n        mq += ', '\n      }\n    });\n    return mq;\n  }\n  // Handling single media query\n  return obj2mq(query);\n};\n\nmodule.exports = json2mq;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanNvbjJtcS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsbUJBQU8sQ0FBQyx3RkFBNkI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb21lZGEtd2ViLy4vbm9kZV9tb2R1bGVzL2pzb24ybXEvaW5kZXguanM/ODUyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2FtZWwyaHlwaGVuID0gcmVxdWlyZSgnc3RyaW5nLWNvbnZlcnQvY2FtZWwyaHlwaGVuJyk7XG5cbnZhciBpc0RpbWVuc2lvbiA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gIHZhciByZSA9IC9baGVpZ2h0fHdpZHRoXSQvO1xuICByZXR1cm4gcmUudGVzdChmZWF0dXJlKTtcbn07XG5cbnZhciBvYmoybXEgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBtcSA9ICcnO1xuICB2YXIgZmVhdHVyZXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBmZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlLCBpbmRleCkge1xuICAgIHZhciB2YWx1ZSA9IG9ialtmZWF0dXJlXTtcbiAgICBmZWF0dXJlID0gY2FtZWwyaHlwaGVuKGZlYXR1cmUpO1xuICAgIC8vIEFkZCBweCB0byBkaW1lbnNpb24gZmVhdHVyZXNcbiAgICBpZiAoaXNEaW1lbnNpb24oZmVhdHVyZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZSArICdweCc7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgbXEgKz0gZmVhdHVyZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgbXEgKz0gJ25vdCAnICsgZmVhdHVyZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbXEgKz0gJygnICsgZmVhdHVyZSArICc6ICcgKyB2YWx1ZSArICcpJztcbiAgICB9XG4gICAgaWYgKGluZGV4IDwgZmVhdHVyZXMubGVuZ3RoLTEpIHtcbiAgICAgIG1xICs9ICcgYW5kICdcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbXE7XG59O1xuXG52YXIganNvbjJtcSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICB2YXIgbXEgPSAnJztcbiAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbiAgLy8gSGFuZGxpbmcgYXJyYXkgb2YgbWVkaWEgcXVlcmllc1xuICBpZiAocXVlcnkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHF1ZXJ5LmZvckVhY2goZnVuY3Rpb24gKHEsIGluZGV4KSB7XG4gICAgICBtcSArPSBvYmoybXEocSk7XG4gICAgICBpZiAoaW5kZXggPCBxdWVyeS5sZW5ndGgtMSkge1xuICAgICAgICBtcSArPSAnLCAnXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1xO1xuICB9XG4gIC8vIEhhbmRsaW5nIHNpbmdsZSBtZWRpYSBxdWVyeVxuICByZXR1cm4gb2JqMm1xKHF1ZXJ5KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ganNvbjJtcTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/json2mq/index.js\n");

/***/ })

};
;