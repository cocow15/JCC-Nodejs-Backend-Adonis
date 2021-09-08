"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSiswa = exports.login = void 0;

var _promises = _interopRequireDefault(require("fs/promises"));

require("core-js/stable");

require("regenerator-runtime/runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var path = 'data.json';

var login = function login(param) {
  _promises["default"].readFile(path).then(function (data) {
    var realData = JSON.parse(data);

    var _param$split = param.split(","),
        _param$split2 = _slicedToArray(_param$split, 2),
        name = _param$split2[0],
        password = _param$split2[1];

    var index = realData.findIndex(function (item) {
      return item.name == name;
    });

    if (index !== -1) {
      if (realData[index].name == name && realData[index].password == password) {
        realData[index].isLogin = true;
        console.log("Berhasil Login");
      } else {
        console.log("Password salah");
      }
    } else {
      console.log("Data tidak ditemukan");
    }

    return _promises["default"].writeFile(path, JSON.stringify(realData));
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.login = login;

var addSiswa = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
    var dataRead, realData, _param$split3, _param$split4, name, trainerName, index;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _promises["default"].readFile(path);

          case 3:
            dataRead = _context.sent;
            realData = JSON.parse(dataRead);
            _param$split3 = param.split(","), _param$split4 = _slicedToArray(_param$split3, 2), name = _param$split4[0], trainerName = _param$split4[1];
            index = realData.findIndex(function (item) {
              return item.name == trainerName;
            });

            if (index !== -1) {
              realData[index]["students"] = [];
              realData[index].students.push({
                name: name
              });
              console.log("Berhasil add siswa");
            } else {
              console.log("Data tidak ditemukan");
            }

            _context.next = 10;
            return _promises["default"].writeFile(path, JSON.stringify(realData));

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function addSiswa(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addSiswa = addSiswa;