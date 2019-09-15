var bacakeyboard = require('readline-sync');

var a = parseInt(bacakeyboard.question("Masukan Alas"));

var t = parseInt(bacakeyboard.question("Masukan Tinggi"));

var l = 1/2*a*t

console.log("Luas Segitiga = "+l);
