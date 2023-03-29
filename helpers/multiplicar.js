var colors = require("colors");
const fs = require("fs");

const crearArchivo = (base = 5) =>{

    let salida = "";
    const x = base;

    for(let i=1;i<=10;i++){
        let resultado = x*i;
        console.log(`${x} X ${i} = ${resultado}`);
        salida += `${x} X ${i} = ${resultado}\n`
    }
    console.log(salida);


    fs.writeFile(`tabla-${x}.txt`, salida, (err) => {
        if (err) throw err;
        console.log("The file has been saved!".green);
    });
}


//*Para exportar esta funcion
module.exports = {
    //*crearArchivo:crearArchivo
    crearArchivo
}