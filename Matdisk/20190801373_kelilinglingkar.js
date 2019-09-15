var bacakeyboard = require('readline-sync');

var r = parseInt(bacakeyboard.question("Masukan Nilai r : "));
var pi = 3.14;
var L = 2*pi*r;

console.log("Keliling lingkaran = "+L);