// var, const y let
// var prohibido dentro de una empresa, es una mala practica


// var
var age = 27; // declarar y asignar un valor a la variable
// document.write(age); // 27
age = 35; // reasignar un nuevo valor a la varible
// document.write('<br>', age); // 35
var age = 40; // redeclarar y reasignar una variable
// document.write('<br>', age); // 40

// const
// const name = 'kambcode';
// document.write('<br>', name); // kambcode
// name = 'Latam'; // Error: reasignar un nuevo valor a la constante
// document.write('<br>', name); // Assignment to constant variable
// const name = 'Daniel'; // Error: redeclarar y reasignar una constante
// document.write('<br>', name); // dentifier 'name' has already been declared

// let: Es una var mejorado, que nos ayuda a evitar errores
let mascota = 'perro'; // declarar y asignar un valor a la variable (let)
// document.write(mascota);
mascota = 'gato'; // reasginar un nuevo valor a la variable
// document.write('<br>', mascota);
// let mascota = 'pajaro'; //Error: redeclarar y reasignar una variable
// document.write('<br>', mascota); // Identifier 'mascota' has already been declared

// ----------------------------------------------------------------------------------------

// Desarrollador Huber
// El creo la variable name para una parte de su codigo
let name = 'Huber'
if(true){
    document.write(name); // Huber
}

// Desarrollador Diego

let name2 = 'Diego'
document.write(name2); // Diego

// Desarrolador Huber

let age = 37
document.write(`<br>Hola ${name}, tu edad es: ${age}`); // Hola Huber tu edad es 37