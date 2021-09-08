"use strict";

var _fscallback = require("./lib/fscallback");

var _fspromises = require("./lib/fspromises");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var args = process.argv.slice(2);
var command = args[0];

switch (command) {
  case 'register':
    var _args$1$split = args[1].split(","),
        _args$1$split2 = _slicedToArray(_args$1$split, 3),
        value1 = _args$1$split2[0],
        value2 = _args$1$split2[1],
        value3 = _args$1$split2[2];

    var obj = {
      name: value1,
      password: value2,
      role: value3,
      isLogin: false
    };
    (0, _fscallback.writeData)(obj);
    console.log("Berhasil register");
    break;

  case 'login':
    var param = args[1];

    if (param !== undefined) {
      (0, _fspromises.login)(param);
    } else {
      console.log("inputan salah");
    }

    break;

  case 'addSiswa':
    var params = args[1];

    if (params !== undefined) {
      (0, _fspromises.addSiswa)(params);
    } else {
      console.log("inputan salah");
    }

    break;

  default:
    console.log("inputan salah");
    break;
}