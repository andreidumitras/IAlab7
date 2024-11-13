var n = 7549;

var u = n % 10;
var z = parseInt(n / 10) % 10;
var s = parseInt(n / 100) % 10;
var m = parseInt(n / 1000);

var suma = u + z + s + m;

console.log("Suma cifrelor",suma);