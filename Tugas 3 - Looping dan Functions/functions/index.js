var funcLib = require('./lib/funcLib');

var teriak = funcLib.teriak;
var kalikan = funcLib.kalikan;
var introduce = funcLib.introduce;

var args = process.argv 

switch (args[2]) {
    case 'teriak':
      console.log(teriak());
      break;
    case 'kalikan':
      console.log(kalikan(args[3], args[4]));
      break;
    case 'kenalan':
      introduce(args[3], args[4], args[5], args[6]);
      break;
    // Tambahkan default
    default:
      console.log("Inputan Salah");
      break;
};