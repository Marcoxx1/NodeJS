const fs = require("fs");
let salida = "";
const x = 9;

for(let i=1;i<=10;i++){
    let resultado = x*i;
    console.log(`${x} X ${i} = ${resultado}`);
    salida += `${x} X ${i} = ${resultado}\n`
}
console.log(salida);


fs.writeFile(`tabla-${x}.txt`, salida, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

