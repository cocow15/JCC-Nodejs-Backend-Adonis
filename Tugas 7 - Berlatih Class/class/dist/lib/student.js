"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function Student(name) {
  _classCallCheck(this, Student);

  this._name = name;
  this._scores = [];
  this._finalScore = 0;
};

exports["default"] = Student;