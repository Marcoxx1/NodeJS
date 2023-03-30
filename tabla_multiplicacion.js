const argv = require("yargs").argv;
var colors = require("colors");

const {crearArchivo} = require("./helpers/multiplicar")
/*
crearArchivo(3);*/

//*console.log("OMG Rainbows!".rainbow);
console.log(argv);
console.log(argv.base);
//*crearArchivo(argv.base);