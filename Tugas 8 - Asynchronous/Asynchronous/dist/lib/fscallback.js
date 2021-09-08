"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeData = exports.readData = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = 'data.json';

var readData = function readData() {
  _fs["default"].readFile(path, function (err, data) {
    if (err) console.log(err);
    console.log(JSON.parse(data));
  });
};

exports.readData = readData;

var writeData = function writeData(newData) {
  _fs["default"].readFile(path, function (err, data) {
    if (err) console.error(err);
    var dataArr = JSON.parse(data);
    dataArr.push(newData);

    _fs["default"].writeFile(path, JSON.stringify(dataArr), {
      encoding: 'utf-8'
    }, function (err) {
      if (err) console.log(err);
    });
  });
};

exports.writeData = writeData;