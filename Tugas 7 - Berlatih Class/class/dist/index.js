"use strict";

var _bootcamp = _interopRequireDefault(require("./lib/bootcamp"));

var _student = _interopRequireDefault(require("./lib/student"));

var _kelas = _interopRequireDefault(require("./lib/kelas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Realease 0
var sanber = new _bootcamp["default"]("sanbercode");
sanber.createClass("Laravel", "beginner", "abduh");
sanber.createClass("React", "beginner", "abdul");
console.log("Realese 0");
console.log(sanber.classes); //Realease 1

var names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"];
names.map(function (nama, index) {
  var newStud = new _student["default"](nama);
  var kelas = sanber.classes[index % 2].name;
  sanber.register(kelas, newStud);
});
console.log(" ");
console.log("Realese 1"); // menampilkan data kelas dan student nya

sanber.classes.forEach(function (kelas) {
  console.log(kelas);
}); //Realese 2

console.log(" ");
console.log("Realese 2 dan 3");
sanber.runBatch();
console.log(" ");
console.log("Final");
sanber.classes.forEach(function (kelas) {
  console.log(kelas);
});