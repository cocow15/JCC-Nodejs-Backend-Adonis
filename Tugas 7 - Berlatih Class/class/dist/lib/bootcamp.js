"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _kelas = _interopRequireDefault(require("./kelas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var bootcamp = /*#__PURE__*/function () {
  function bootcamp(name) {
    _classCallCheck(this, bootcamp);

    this._name = name;
    this._classes = [];
  }

  _createClass(bootcamp, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(name) {
      this._name = name;
    }
  }, {
    key: "classes",
    get: function get() {
      return this._classes;
    },
    set: function set(classes) {
      this._classes = classes;
    }
  }, {
    key: "createClass",
    value: function createClass(name, level, instructor) {
      var students = []; //this._classes.push({name, students, level, instructor});

      this._classes.push(new _kelas["default"](name, students, level, instructor));
    }
  }, {
    key: "register",
    value: function register(nameClass, newStud) {
      if (this._classes.length == 0) {
        return this._classes;
      }

      var i;

      for (i = 0; i < this._classes.length; i++) {
        if (this._classes[i].name == nameClass) {
          this._classes[i].students.push(newStud);
        }
      }
    }
  }, {
    key: "runBatch",
    value: function runBatch() {
      if (this._classes.length == 0) {
        return this._classes;
      }

      var result = [];
      var i, j, k;

      for (i = 0; i < this._classes.length; i++) {
        for (j = 0; j < this._classes[i].students.length; j++) {
          for (k = 0; k < 4; k++) {
            this._classes[i].students[j]._scores.push(Math.floor(Math.random() * 50) + 51);
          }

          this._classes[i].students[j]._finalScore = (this._classes[i].students[j]._scores[0] + this._classes[i].students[j]._scores[1] + this._classes[i].students[j]._scores[2] + this._classes[i].students[j]._scores[3]) / 4;
        }
      }

      this.classes;

      for (i = 0; i < this._classes.length; i++) {
        console.log("graduated from ".concat(this._classes[i].name, ":"));
        console.log(this._classes[i].graduate());
      }
    }
  }]);

  return bootcamp;
}();

exports["default"] = bootcamp;