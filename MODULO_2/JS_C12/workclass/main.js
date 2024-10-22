// Algoritmia:
// Es el estudio y diseño de algorimos, que son secuencias de pasos o instrucciones bien definidas y de finitas posibilidades para realizar una tarea especifica.

// Se puede describir como una receta o un conjunto de reglas que sigue un orden logico para alcanzar una solucion.

// Lo podemos realizar por medio de un diagrama de flujo.


// ----------------------------------------------------------------------

// Escribe un programa que determine si una persona es elegible para votar.
// La persona debe tener al menos 18 años de edad para poder votar.
// El programa debe pedir la edad al usuario y luego imprimir en pantalla un mensaje indicadando si la persona puede votar ò no.

// const age = Number(prompt('Digita tu edad'));

// if(age >= 18){
//     document.write('Puedes Votar');
// } else {
//     document.write('No puedes votar, eres menor de edad');
// }

// ---------------------------------------------------------------------------

// Realizar un programa que sume los primeros 'n' numeros naturales. Primero hacer un ejercicio de logica por medio de algoritmia y luego el codigo en JS.

// let suma = 0;
// let n = 3;
// let i = 1;

// while(i <= n){
//     suma = suma + i;
//     i = i + 1
// }

// console.log(suma);

// --------------------------------------------------------------
// sucesion de fibonacci
// Hacer la sucesion de fibonacci hasta el numero 55 y mostrar en la consola el resultado

const limit = 55
let n1 = 0;
let n2 = 1;
console.log(n1); // 0
console.log(n2); // 1
let suma = n1 + n2 // 0 + 1 = 1
while(suma <= limit){
    console.log(suma)
    n1 = n2 // 1
    n2 = suma // 1
    suma = n1 + n2 // 1
}