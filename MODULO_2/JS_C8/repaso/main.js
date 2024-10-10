// const invertir = 80;
// const meses = 3;
// let sumaInversion = 0;

// for(let i = 1; i <= meses; i++){
//     // sumaInversion = invertir * i // Otra forma de resolver
//     sumaInversion += invertir // sumaInversion = sumaInversion + invertir
//     document.write(`Mes ${i}: $ ${sumaInversion} <br>`) // Mes 2: $ 160
// }

// document.write(`<br> Fin, total a ahorrar $ ${sumaInversion}`);

// -----------------------------------------------------------------------

// Tablas de Multiplicar

// 1 X 1 = 1
// 1 X 2 = 2
// 1 X 3 = 3
// ...
// 1 X 10 = 10

// 2 X 1 = 1
// 2 X 2 = 2
// 2 X 3 = 3
// ...
// 2 X 10 = 10


// for(let indice = 1; indice <= 10; indice++){ // ciclo externo -> indice = 2 -> TRUE
//     for(let i = 1; i <= 10; i++){ // ciclo interno ->  i = 11 -> FALSE
//         document.write(`${indice} X ${i} = ${indice * i} <br>`) // 2 X 2 = 4
//     }
// }
