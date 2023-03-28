//Declaramos el arreglo peras
const peras = ['🍐','🍐','🍐']
//Resultado en manzanas 
let manzanas = []

const procesar = (valor) =>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(valor === '🍐'){
                resolve('🍎');
            }
        },1000);
    });
}

/*
for(let i = 0;i <= peras.length;i++){
    console.log(peras[i])
    let manzana = procesar(peras[i])
    console.log(manzana);
}
*/
manzanas = peras.map((pera)=> procesar(pera))
//console.log(manzanas);
//Iterador de promesas
const resultado = Promise.all(manzanas);
resultado.then((respuesta)=>{
    console.log(`valor = ${respuesta}`)
})