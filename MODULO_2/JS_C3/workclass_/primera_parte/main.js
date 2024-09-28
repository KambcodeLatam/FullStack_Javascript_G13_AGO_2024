// Diferencia entre navegador y servidor(consola);

// document.write('Hello world'); // Son utiles para ver si esta quedando bien las cosas.

// document.write('Esta es mi prueba'); // En la consola del navegador se puede ver el error

// Para que solamente nsotros veamos nuestras pruebas vamos a utilizar
// console.log(valor)

// const nombre = prompt('Digita tu nombre');
// const alturaM = 1.78
// const peso = 54

// const imc = peso / (alturaM * alturaM);
// console.log('valor de la variable nombre: ', nombre);

// ------------------------------------------------------------------------------------------

// var vs const

// Una variable (var) consume muchos más recursos que una constante (const).
// const se usa para declarar constante. Una constante es una variable que no puede 
// cambiar de valor
// var = Me permite reasignar y redeclarar

var age = 89; // declarando y asignando un valor a una var
// document.write(age); // 89
age = 56; // reasignando un nuevo valor a la variable
// document.write(age); // 56
var age = 22; // redeclarar una variable
// document.write(age); // 22



// const = No me permite ni reasignar, ni declarar una constante o un valor
const nombreCompleto = 'Kambcode Latam';
// document.write('<br>', nombreCompleto); // Kambcode Latam
// nombreCompleto = 'Daniel'; // Error: Tratando de reasginar un valor a una constante
// document.write('<br>', nombreCompleto); // Error: Assignment to constant variable.
// const nombreCompleto = 'Daniel'; // Error: Tratando de redeclarar un valor a una constante
// document.write('<br>', nombreCompleto); // dentifier 'nombreCompleto' has already been declared
