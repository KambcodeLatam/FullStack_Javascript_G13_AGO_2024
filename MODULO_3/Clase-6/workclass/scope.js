// Tipos de vaiables.  var - let - const

// var => Es global o de función y no respeta el scope de bloque.
// Se puede re-declarar y re-asignar

var nombre = "Andrea";
var nombre = "Juan";
nombre = "Mario"

console.log(nombre);

// let =>  Tiene scope de bloque {}. Se puede re-asignar pero no re-declar

let edad = 50;

edad = 25
console.log({edad})

// const => Tiene el scope de bloque (no se puede re-asignar ni re-declarar);
// Es ideal para los valores que no cambian.

const mensaje = "Hola";

console.log(mensaje);


//SCOPE

//Scope Global: Las variables declaradas pueden ser usadas en cualquier parte del código
let curso = 'G13';

const saludar = () => {
    console.log(`Hola grupo ${curso}`)
}

saludar();

// Scope Local - Function Scope: Funciona en un lugar especifico

const sumar = (num1, num2) => {
    const resultado = num1 + num2;
    console.log(resultado)
}

sumar( 5, 8)
// console.log(resultado)


// Scope de Bloque => Está dentro de un bloque ({}) solo existen en este bloque

let isLoading = true;
if(isLoading){
    const alerta = ' Cargando';
    console.log(alerta)
}

console.log(alerta);

var total = 500;

