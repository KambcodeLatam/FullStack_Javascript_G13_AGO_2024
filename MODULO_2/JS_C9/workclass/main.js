// 1. Imprimir los numeros del 1 al 100 en la consola, vamos a realizando con una funcion

// function numeros () {
//     for(let i = 1; i <= 100; i++){
//         console.log(i);
//     }
// }

// numeros();

// 2. Usa un ciclo para sumar los numeros del 1 al 100 y luego imprimir en la consola este resultado 1+2+3+4+5+6+7+8+...100 = 5050


// Solucion 1 opcional
// function exerciseTwo () {
//     let suma = 0; // Scope Local -> 5050
//     for(let i = 1; i <= 100; i++){ // -> i = 3 -> TRUE
//         suma = suma + i // suma = 3 + 3 = 
//     }
//     return suma // variable que va a mosrar el resultado
// }

// console.log(exerciseTwo());   // 5050

// ------------------------------------------------------------

// Solucion 2 opcional
// let suma = 0; // scope Global

// function exerciseTwo () {   
//     for(let i = 1; i <= 100; i++){
//         suma = suma + i
//     }
//     console.log(suma); // 5050
// }

// exerciseTwo()

// --------------------------------------------------------------

// 3. Imprima los numeros pares del 2 al 20 con ciclos e imprimir en la consola en resultado

// function exerciseThree () {
//     for(let i = 2; i <= 20; i += 2){
//         console.log(i);
//     }
// }

// exerciseThree();

// 4. Hacer un programa que calcule la suma de todos los numeros que hay en un arreglo y luego mostrar el resultado al final en la consola

// const numeros = [10, 23, 54, 45, 87] // 219
// suma = 10
// suma = 33
// suma = 87
// suma = 219

// function exerciseFour (array){
//     let suma = 0; // 33
//     for(let i = 0; i < array.length; i++){ // i = 2
//         suma = suma + array[i]; // suma = 33 + 54 = 87
//     }
//     console.log(suma);
// }

// exerciseFour(numeros);

// ---------------------------------------------------
// for ... of -> Forma de recorrer arreglos de manera ordenada


// const numeros = [10, 23, 54, 45, 87, 100, 200] // 219

// let suma = 0; // Una variable contenedora del resultado final -> 219
// for(let num of numeros){
//     suma += num
// }

// console.log(suma);

// ----------------------------------------------------------------------

// 5. Apartir de un arreglo, crea una variable que muestre cual es el numero mayor

// const numeros = [10, 23, 54, 45, 87, 100, 34, 12, 45, 154] // 100
// let max = 0;
// for(let num of numeros){
//     if(num > max){
//         max = num
//     }
// }

// console.log(max) // 100

// --------------------------------------------------------------------
// Metodo de los arreglos forEach 

// 6. Imprima todos los numeros de un arreglo

// const numeros = [2, 3, 5, 8, 12, 16, 20]

// for(let number of numeros){
//     console.log(number)
// }
// --------------------------------------------
// Ahora con forEach -> Es para hacer algo con el arreglo incial
const numeros2 = [2, 3, 5, 8, 12, 16, 20, 44].forEach(num => console.log(num));

// 2
// 3
// 5
// 8
// 20
// -----------------------------------------------

// La siguiente semana tendremos clase el dia Martes y Jueves
// Tutorias Miercoles y Viernes