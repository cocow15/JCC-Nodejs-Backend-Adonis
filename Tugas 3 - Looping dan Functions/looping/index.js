var funcLib = require('./lib/funcLib');

var loopingWhile = funcLib.loopingWhile;
var loopingFor = funcLib.loopingFor;
var persegiPanjang = funcLib.persegiPanjang;
var tangga = funcLib.tangga;
var catur = funcLib.catur;

var args = process.argv 

switch (args[2]) {
    case 'while':
      loopingWhile();
      break;
    case 'for':
      loopingFor();
      break;
    case 'persegiPanjang':
      persegiPanjang(args[3],args[4]);
      break;
    case 'tangga':
      tangga(args[3]);
      break;
    case 'catur':
      catur(args[3]);
      break;
    // Tambahkan default
    default:
      console.log("Inputan Salah");
      break;
};