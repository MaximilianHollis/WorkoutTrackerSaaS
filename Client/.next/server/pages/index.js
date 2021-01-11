module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_Services_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Services/AuthService */ \"./src/Services/AuthService.js\");\n\nvar _jsxFileName = \"/home/caesar/Projects/Workout-SaaS/Client/pages/index.js\";\n\n\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({\n  displayName: \"pages__Title\",\n  componentId: \"sc-1ingf92-0\"\n})([\"font-size:50px;color:\", \";\"], ({\n  theme\n}) => theme.colors.primary);\n\nconst onSubmit = e => {\n  _src_Services_AuthService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register({\n    username: 'heaaallo',\n    password: 'thisismypassword',\n    plan: 'free'\n  }).then(data => {\n    console.log(data);\n  });\n};\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    onClick: onSubmit,\n    children: \"submit\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIlRpdGxlIiwic3R5bGVkIiwiaDEiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJvblN1Ym1pdCIsImUiLCJBdXRoU2VydmljZSIsInJlZ2lzdGVyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInBsYW4iLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyx3REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLG1DQUVBLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUY1QixDQUFYOztBQUtBLE1BQU1DLFFBQVEsR0FBR0MsQ0FBQyxJQUFJO0FBQ3BCQyxtRUFBVyxDQUFDQyxRQUFaLENBQXFCO0FBQUNDLFlBQVEsRUFBRSxVQUFYO0FBQXVCQyxZQUFRLEVBQUUsa0JBQWpDO0FBQXFEQyxRQUFJLEVBQUU7QUFBM0QsR0FBckIsRUFBeUZDLElBQXpGLENBQThGQyxJQUFJLElBQUk7QUFDcEdDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0QsR0FGRDtBQUdELENBSkQ7O0FBTWUsU0FBU0csSUFBVCxHQUFnQjtBQUM3QixzQkFBTztBQUFRLFdBQU8sRUFBRVgsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJy4uL3NyYy9TZXJ2aWNlcy9BdXRoU2VydmljZSc7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3Qgb25TdWJtaXQgPSBlID0+IHtcbiAgQXV0aFNlcnZpY2UucmVnaXN0ZXIoe3VzZXJuYW1lOiAnaGVhYWFsbG8nLCBwYXNzd29yZDogJ3RoaXNpc215cGFzc3dvcmQnLCBwbGFuOiAnZnJlZSd9KS50aGVuKGRhdGEgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIDxidXR0b24gb25DbGljaz17b25TdWJtaXR9PnN1Ym1pdDwvYnV0dG9uPlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/Services/AuthService.js":
/*!*************************************!*\
  !*** ./src/Services/AuthService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  login: user => {\n    console.log(user);\n    return fetch('localhost:5000/api/login', {\n      method: \"post\",\n      body: JSON.stringify(user),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(res => {\n      if (res.status !== 401) return res.json().then(data => data);else return {\n        isAuthenticated: false,\n        user: {\n          username: \"\",\n          role: \"\"\n        }\n      };\n    });\n  },\n  register: user => {\n    console.log(user);\n    return fetch('http://localhost:5000/api/register', {\n      method: \"post\",\n      body: JSON.stringify(user),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(res => res.json()).then(data => data);\n  },\n  logout: () => {\n    return fetch('localhost:5000/api/logout').then(res => res.json()).then(data => data);\n  },\n  isAuthenticated: () => {\n    return fetch('localhost:5000/api/authenticated').then(res => {\n      if (res.status !== 401) return res.json().then(data => data);else return {\n        isAuthenticated: false,\n        user: {\n          username: \"\",\n          role: \"\"\n        }\n      };\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU2VydmljZXMvQXV0aFNlcnZpY2UuanM/NDdhMyJdLCJuYW1lcyI6WyJsb2dpbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VybmFtZSIsInJvbGUiLCJyZWdpc3RlciIsImxvZ291dCJdLCJtYXBwaW5ncyI6IkFBQUM7QUFBZTtBQUNaQSxPQUFLLEVBQUVDLElBQUksSUFBSTtBQUNYQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLFdBQU9HLEtBQUssQ0FBQywwQkFBRCxFQUE2QjtBQUNyQ0MsWUFBTSxFQUFFLE1BRDZCO0FBRXJDQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmLENBRitCO0FBR3JDUSxhQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWDtBQUg0QixLQUE3QixDQUFMLENBTUpDLElBTkksQ0FNQ0MsR0FBRyxJQUFJO0FBQ1gsVUFBSUEsR0FBRyxDQUFDQyxNQUFKLEtBQWUsR0FBbkIsRUFDSSxPQUFPRCxHQUFHLENBQUNFLElBQUosR0FBV0gsSUFBWCxDQUFnQkksSUFBSSxJQUFJQSxJQUF4QixDQUFQLENBREosS0FHSSxPQUFPO0FBQUVDLHVCQUFlLEVBQUUsS0FBbkI7QUFBMEJkLFlBQUksRUFBRTtBQUFFZSxrQkFBUSxFQUFFLEVBQVo7QUFBZ0JDLGNBQUksRUFBRTtBQUF0QjtBQUFoQyxPQUFQO0FBQ1AsS0FYTSxDQUFQO0FBWUgsR0FmVztBQWdCWkMsVUFBUSxFQUFFakIsSUFBSSxJQUFJO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsV0FBT0csS0FBSyxDQUFDLG9DQUFELEVBQXVDO0FBQy9DQyxZQUFNLEVBQUUsTUFEdUM7QUFFL0NDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWYsQ0FGeUM7QUFHL0NRLGFBQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYO0FBSHNDLEtBQXZDLENBQUwsQ0FNSkMsSUFOSSxDQU1DQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0UsSUFBSixFQU5SLEVBT0ZILElBUEUsQ0FPR0ksSUFBSSxJQUFJQSxJQVBYLENBQVA7QUFRSCxHQTFCVztBQTJCWkssUUFBTSxFQUFFLE1BQU07QUFDVixXQUFPZixLQUFLLENBQUMsMkJBQUQsQ0FBTCxDQUNGTSxJQURFLENBQ0dDLEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxJQUFKLEVBRFYsRUFFRkgsSUFGRSxDQUVHSSxJQUFJLElBQUlBLElBRlgsQ0FBUDtBQUdILEdBL0JXO0FBZ0NaQyxpQkFBZSxFQUFFLE1BQU07QUFDbkIsV0FBT1gsS0FBSyxDQUFDLGtDQUFELENBQUwsQ0FDRk0sSUFERSxDQUNHQyxHQUFHLElBQUk7QUFDVCxVQUFJQSxHQUFHLENBQUNDLE1BQUosS0FBZSxHQUFuQixFQUNJLE9BQU9ELEdBQUcsQ0FBQ0UsSUFBSixHQUFXSCxJQUFYLENBQWdCSSxJQUFJLElBQUlBLElBQXhCLENBQVAsQ0FESixLQUdJLE9BQU87QUFBRUMsdUJBQWUsRUFBRSxLQUFuQjtBQUEwQmQsWUFBSSxFQUFFO0FBQUVlLGtCQUFRLEVBQUUsRUFBWjtBQUFnQkMsY0FBSSxFQUFFO0FBQXRCO0FBQWhDLE9BQVA7QUFDUCxLQU5FLENBQVA7QUFPSDtBQXhDVyxDQUFmIiwiZmlsZSI6Ii4vc3JjL1NlcnZpY2VzL0F1dGhTZXJ2aWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBsb2dpbjogdXNlciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgICByZXR1cm4gZmV0Y2goJ2xvY2FsaG9zdDo1MDAwL2FwaS9sb2dpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSA0MDEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhID0+IGRhdGEpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlzQXV0aGVudGljYXRlZDogZmFsc2UsIHVzZXI6IHsgdXNlcm5hbWU6IFwiXCIsIHJvbGU6IFwiXCIgfSB9O1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgcmVnaXN0ZXI6IHVzZXIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3JlZ2lzdGVyJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YSk7XG4gICAgfSxcbiAgICBsb2dvdXQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZldGNoKCdsb2NhbGhvc3Q6NTAwMC9hcGkvbG9nb3V0JylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhKTtcbiAgICB9LFxuICAgIGlzQXV0aGVudGljYXRlZDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2goJ2xvY2FsaG9zdDo1MDAwL2FwaS9hdXRoZW50aWNhdGVkJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDQwMSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhID0+IGRhdGEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSwgdXNlcjogeyB1c2VybmFtZTogXCJcIiwgcm9sZTogXCJcIiB9IH07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Services/AuthService.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });