// Hay 2 formas de crear ciclos/loops o Bucles en JS, while y for

// Crear un programa que pregunte la contraseña a un usuario y con esta 
// validar si puede ingresar o no a la pagina

// const contraseña = prompt('Digita la contraseña');

// if(contraseña === 'kambcode'){
//     document.write('Ingreso de sesion exitoso');
// }  else {
//     document.write('Error: contraseña incorrecta');
// }

// ----------------------------------------------------------------------------------------

// ciclo: En JS un ciclo es un bloque de codigo que se repite siempre y cuando la condicion
// sea true, nuestro ciclo acaba o se deja de repetir cuando la condicion sea false

// iteracion: Las iteraciones son las veces en que se repite nuestro ciclo

// variable inicial: Es el punto de partida de nuestro ciclo (let o var).

// contador: Es el incremento o decremento que vamos a hacerle a nuestra variable.

// while structure
// while(Condicion){ Bloque de codigo que queremos que se repita
// }

// var userPassword = prompt('Digita tu contraseña'); // daniel123

// while(userPassword != 'kambcode'){ // true
//     console.log('Acceso Denegado'); // 2
//     userPassword = prompt('Acceso Denegado. Intenta de nuevo'); // kambcode
// }

// document.write('INGRESO DE SESION EXITOSO');

// ----------------------------------------------------------------------------


// varible inicial
// while(Condicion){ Bloque de codigo que queremos que se repita
// contador
// }

// Imprima los numeros del 1 al 100

// var number = 1;

// while(number <= 100){ // false
//     document.write(`${number} <br>`); // 100
//     number = number + 1 // number = 100 + 1 = 101
// }

// document.write('FIN DEL PROGRAMA');

// RETO:
// Hacer un programa que cuente de 2 en 2 hasta 50
// 2, 4, 6, 8, 10... 50

// Hacer lo mismo de forma decendente 50, 48, 46, 44, 42...2

// var numero = 2;

// while(numero <= 50){ // true
//     document.write(`${numero} <br>`) // 4
//     numero += 2// numero = numero + 2 // 6
// }

// Srgunda parte del reto
// var numero2 = 50;

// while(numero2 >= 2){
//     document.write(`${numero2} <br>`)
//     numero2 -= 2 //numero2 = numero2 - 2
// }

// --------------------------------------------------
// CICLO FOR

// while:
// var number = 1; // variable inicial

// while(number <= 100){ // condicion
//     document.write(`${number} <br>`);
//     number++ // number = number + 1 -> contador
// }

// for:
// for(variable inicial; condicion; contador){
// }

// for(var number = 1; number <= 1000; number++){
//     document.write(`${number} <br>`);
// }

// ---------------------------------------------------------
// Vamos a realizar la tabla del 3

// 3 X 1 = 3
// 3 X 2 = 6
// 3 X 3 = 9
// 3 X 4 = 12
// 3 X 5 = 15
// ...
// 3 X 10 = 30

// for(variable inicial; condicion; contador){
// }

// for(var number = 1; number <= 10; number++){ // TRUE
//     const tableResult = 3 * number // tableResult = 3 * 2 = 6
//     document.write(`3 X ${number} = ${tableResult} <br>`); // 3 X 2 = 6
// }

// document.write('FIN');

// while

// var number = 1

// while( number <= 10){
//     const tableResult = 3 * number // tableResult = 3 * 2 = 6
//     document.write(`3 X ${number} = ${tableResult} <br>`); // 3 X 2 = 6
//     number++
// }

// document.write('FIN')

// -------------------------------------------------------------------------
// Yo puedo crear un ciclo dentro de otro ciclo de la siguiente manera:

// 3 X 1 = 3
// HOLA MUNDO
// HOLA MUNDO
// HOLA MUNDO
// 3 X 2 = 6
// HOLA MUNDO
// HOLA MUNDO
// HOLA MUNDO
// 3 X 3 = 9
// HOLA MUNDO
// HOLA MUNDO
// HOLA MUNDO
// ...
// 3 X 10 = 30
// HOLA MUNDO
// HOLA MUNDO
// HOLA MUNDO

for(var number = 1; number <= 10; number++){ // TRUE
    const tableResult = 3 * number; // tableResult = 3 * 1 = 3
    document.write(`3 X ${number} = ${tableResult} <br>`); // 3 X 1 = 3
    for(var count = 1; count <= 3; count++){
        document.write('HOLA MUNDO <br>');
    }
}


// 1 X 1 = 1
// 1 X 2 = 2
// 1 X 3 = 3
// 1 X 4 = 4
// 1 X 5 = 5
// ...
// 1 X 10 = 10

// 2 X 1 = 2
// 2 X 2 = 4
// 2 X 3 = 6
// 2 X 4 = 8
// 2 X 5 = 10
// ...
// 2 X 10 = 20

// 3 X 1 = 3
// 3 X 2 = 6
// 3 X 3 = 9
// 3 X 4 = 12
// 3 X 5 = 15
// ...
// 3 X 10 = 30

// .......

// 10 X 1 = 10
// 10 X 2 = 20
// 10 X 3 = 30
// 10 X 4 = 40
// 10 X 5 = 50
// ...
// 10 X 10 = 100