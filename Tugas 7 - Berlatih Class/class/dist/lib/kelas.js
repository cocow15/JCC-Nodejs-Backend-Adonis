"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Kelas = /*#__PURE__*/function () {
  function Kelas(name, students, level, instructor) {
    _classCallCheck(this, Kelas);

    this.name = name;
    this.students = students;
    this.level = level;
    this.instructor = instructor;
  }

  _createClass(Kelas, [{
    key: "graduate",
    value: function graduate() {
      if (this.students.length == 0) {
        return this.students;
      }

      var j;
      var participant = [];
      var completed = [];
      var mastered = [];

      for (j = 0; j < this.students.length; j++) {
        if (this.students[j]._finalScore < 60) {
          participant.push(this.students[j]);
        } else if (this.students[j]._finalScore > 85) {
          mastered.push(this.students[j]);
        } else {
          completed.push(this.students[j]);
        }
      }

      return {
        participant: participant,
        completed: completed,
        mastered: mastered
      };
    }
  }]);

  return Kelas;
}();

exports["default"] = Kelas;