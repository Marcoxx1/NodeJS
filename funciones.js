/*
//Funciones en js
function suma (x=1,y){
    return x+y;
}
console.log(suma(4,3));

//Funciones flecha
const flecha_1 = (a,b) =>a+b;
console.log(flecha_1(4,3));
*/

const validador = (a,b) =>{
    if(a>b){
        return a+b;
    }else{
        console.log(a*b);
    }
}
console.log(validador(3,4))