//Data Instruktur
var instruktur = require('./lib/instruktur')
//Data Siswa
var siswa = require('./lib/siswa')

console.log(instruktur)

var namaInstruktur = instruktur.nama
var alamatInstruktur = instruktur.alamat

console.log("nama instruktur: ", namaInstruktur)
console.log("alamat instruktur: ", alamatInstruktur)

var namaSiswa1 = siswa.siswa1.nama
console.log("Siswa 1: ", namaSiswa1)