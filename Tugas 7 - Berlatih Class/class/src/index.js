import Bootcamp from './lib/bootcamp';
import Student from './lib/student';
import Kelas from './lib/kelas';
//Realease 0
const sanber = new Bootcamp("sanbercode")
sanber.createClass("Laravel", "beginner", "abduh")
sanber.createClass("React", "beginner", "abdul")
console.log("Realese 0")
console.log(sanber.classes)

//Realease 1
let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"]
names.map((nama, index) => {
  let newStud = new Student(nama)
  let kelas = sanber.classes[index % 2].name
  sanber.register(kelas, newStud)
})
console.log(" ")
console.log("Realese 1")
// menampilkan data kelas dan student nya
sanber.classes.forEach(kelas => {
  console.log(kelas);
});

//Realese 2
console.log(" ")
console.log("Realese 2 dan 3")
sanber.runBatch();

console.log(" ")
console.log("Final")
sanber.classes.forEach(kelas => {
    console.log(kelas);
});
  