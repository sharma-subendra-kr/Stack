/** @license Stack

Stack, a JavaScript LIFO stack Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Stack.

Stack is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Stack is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stack.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Stack"] = factory();
	else
		root["Stack"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ArrayStack", function() { return /* reexport */ ArrayStack; });
__webpack_require__.d(__webpack_exports__, "ListStack", function() { return /* reexport */ ListStack; });

// CONCATENATED MODULE: ./src/ArrayStack.js
/*

Stack, a JavaScript LIFO stack Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Stack.

Stack is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Stack is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stack.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

/*

	LIFO(Last In First Out) Stack Data Structure

*/
var Stack = function Stack(options) {
  var _this$options;

  this.options = options;
  this.initialSize = (options === null || options === void 0 ? void 0 : options.initialSize) || 100;
  this.length = this.initialSize;
  this.stack = new Array(this.length);
  this.ptr = -1;

  if (Array.isArray(options === null || options === void 0 ? void 0 : options.data)) {
    this.constructStack(options.data, options.constructReverse);
  }

  (_this$options = this.options) === null || _this$options === void 0 ? true : delete _this$options.data;
};

Stack.prototype.constructor = Stack;

Stack.prototype.constructStack = function (data, constructReverse) {
  var len = data.length;

  if (!constructReverse) {
    for (var i = 0; i < len; i++) {
      this.push(data[i]);
    }
  } else {
    for (var _i = len - 1; _i >= 0; _i--) {
      this.push(data[_i]);
    }
  }
};

Stack.prototype.push = function (data) {
  if (data === null || data === undefined) {
    return false;
  }

  if (this.ptr === this.length - 1) {
    this.resize();
  }

  this.stack[++this.ptr] = data;
  return this.ptr + 1;
};

Stack.prototype.pop = function () {
  if (this.ptr >= 0) {
    var top = this.stack[this.ptr];
    this.ptr--;
    return top;
  } // or return undefined

};

Stack.prototype.resize = function () {
  var oldlen = this.length;
  var oldStack = this.stack;
  this.length = this.length * 2;
  this.stack = new Array(this.length);

  for (var i = 0; i < oldlen; i++) {
    this.stack[i] = oldStack[i];
  }
};

Stack.prototype.isEmpty = function () {
  if (this.ptr < 0) {
    return true;
  }

  return false;
};

Stack.prototype.peak = function () {
  if (this.ptr >= 0) {
    return this.stack[this.ptr];
  } // or return undefined

};

Stack.prototype.getData = function () {
  var arr = new Array(this.ptr + 1);

  for (var i = 0; i <= this.ptr; i++) {
    arr[i] = this.stack[i];
  }

  return arr;
};

Stack.prototype.setData = function (data) {
  this.empty();
  this.constructStack(data, this.options.constructReverse);
};

Stack.prototype.getSize = function () {
  return this.ptr + 1;
};

Stack.prototype.empty = function () {
  this.ptr = -1;
};

Stack.prototype.wipe = function () {
  this.length = this.initialSize;
  this.stack = new Array(this.length);
  this.ptr = -1;
};

/* harmony default export */ var ArrayStack = (Stack);
// CONCATENATED MODULE: ./src/ListStack.js
/*

Stack, a JavaScript LIFO stack Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Stack.

Stack is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Stack is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stack.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

/*

	LIFO(Last In First Out) Stack Data Structure

*/
function ListStack_Stack(options) {
  this.length = 0;
  this.HEAD = null;

  if (Array.isArray(options === null || options === void 0 ? void 0 : options.data)) {
    this.constructStack(options.data, options.constructReverse);
  }
}

ListStack_Stack.prototype.constructor = ListStack_Stack;

ListStack_Stack.prototype.constructNode = function (d) {
  return {
    next: null,
    d: d
  };
};

ListStack_Stack.prototype.constructStack = function (data, constructReverse) {
  var len = data.length;
  var i;

  if (!constructReverse) {
    for (i = 0; i < len; i++) {
      this.push(data[i]);
    }
  } else {
    for (i = len - 1; i >= 0; i--) {
      this.push(data[i]);
    }
  }
};

ListStack_Stack.prototype.push = function (d) {
  var node = this.constructNode(d);

  if (this.HEAD) {
    node.next = this.HEAD;
    this.HEAD = node;
  } else {
    this.HEAD = node;
  }

  return ++this.length;
};

ListStack_Stack.prototype.pop = function () {
  if (this.HEAD) {
    var temp = this.HEAD;
    this.HEAD = this.HEAD.next;
    temp.next = null;
    this.length--;
    return temp.d;
  } // or return undefined

};

ListStack_Stack.prototype.isEmpty = function () {
  if (this.HEAD) {
    return false;
  }

  return true;
};

ListStack_Stack.prototype.peak = function () {
  var _this$HEAD;

  return (_this$HEAD = this.HEAD) === null || _this$HEAD === void 0 ? void 0 : _this$HEAD.d;
};

ListStack_Stack.prototype.getData = function () {
  var iter = this.HEAD;
  var arr = new Array(this.length);
  var count = 0;

  while (iter != null) {
    arr[count++] = iter.d;
    iter = iter.next;
  }

  return arr;
};

ListStack_Stack.prototype.getSize = function () {
  return this.length;
};

ListStack_Stack.prototype.empty = function () {
  this.HEAD = null;
  this.length = 0;
};

/* harmony default export */ var ListStack = (ListStack_Stack);
// CONCATENATED MODULE: ./src/index.js
/** @license Stack

Stack, a JavaScript LIFO stack Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Stack.

Stack is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Stack is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stack.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

/*

	LIFO(Last In First Out) Stack Data Structure

*/




/***/ })
/******/ ]);
});