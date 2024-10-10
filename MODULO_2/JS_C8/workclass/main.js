// FUNCIONES

// Una funcion es JS es un bloque de codigo REUTILIZABLE que realiza una tarea especifica,
// para que mi funcion se ejecute tengo que llamarla

// Realiza un programa que pregunte la edad del usuario y su nombre y con estos datos
// mostrarle al usuario en que año nacio y su nombre.

// const personAge = 28;
// const personName = 'Carlos'

// const birthDate = 2024 - personAge //1996
// console.log(`Hola ${personName}, naciste en ${birthDate}`);
//  // ------------------------------------------------------------
// const person2Age = 35;
// const person2Name = 'Angie'

// const birthDate2 = 2024 - person2Age //1996
// console.log(`Hola ${person2Name}, naciste en ${birthDate2}`);
// // ------------------------------------------------------------
// const person3Age = 46;
// const person3Name = 'Alvaro'

// const birthDate3 = 2024 - person3Age //1996
// console.log(`Hola ${person3Name}, naciste en ${birthDate3}`);

// for(let i = 1; i <= 3; i++){
//     const person3Age = 46;
//     const person3Name = 'Alvaro'

//     const birthDate3 = 2024 - person3Age //1996
//     console.log(`Naciste en ${birthDate3}`);
// }


// Se puede hacer con un ciclo, pero si muchas más adelnate necesito hacer lo mismo
// lo puedo hacer llamando una funcion reutilizando su codigo
// function NombreFuncion (parametros o argumento){Lo que quiero hacer con la funcion}

// function calcularFechaNacimiento (age){
//     const birthDate = 2024 - age
//     console.log(`Naciste en ${birthDate}`);
// }

// calcularFechaNacimiento(28); // Es el llamado de la funcion, para que se ejecute

// const person2Age = 35;
// const person2Name = 'Angie'

// calcularFechaNacimiento(person2Age)

// const person3Age = 46;
// const person3Name = 'Alvaro'

// calcularFechaNacimiento(person3Age)


// ----------------------------------------------------------------
// const person1 = 'Pablo';
// const person2 = 'Pedro';
// const person3 = 'Ana';

// Escribe una funcion que reciba un nombre  y que salude a la persona
// ejemplo: console.log('Hola', personName)
// function sayHello

// function sayHello (name) {
//     console.log(`Hola ${name}`);
// }

// sayHello('Juan') // Hola Juan
// sayHello(person1) // Hola Pablo
// sayHello(person2) // Hola Pedro
// sayHello(person3) // Hola Ana


// PROCESO DE FACTURACION EN MELI

// function factura (precio){
//     console.log(`El valor que vas a pagar es ${precio}`);
// }

// 1. Primera vez que mostramos la factura
// confirmacion de pago

// factura(194400) // EL valor que vas a pagar es 194400

// 2. Segunda vez que mostrmos la factura
// La pasarela de pagos

// factura(194400)

// 3. Tercera mostrando la factura
// Factura electronica
// factura(194400)

// -------------------------------------------------------------
// 1. Vamos a crear una funcion que calcule el IMC de una persona
// imc = peso / (alturaM * alturaM) y mostrarle al usuario
// 2. Con ese IMC de la persona, mostrandole por medio de una condicion
// si su IMC esta elevado (>10) console.log('Su IMC esta elevado')

// return: En una funcion se utiliza para devolver un valor desde la funcion 
//         al lugar donde fue llamada (siempre lo voy a colocar al final del bloque)


// function calcImc (peso, altura){
//     const imc = peso / (altura * altura); // 18.285714285714285
//     console.log('su IMC es: ', imc)
//     return imc // 18.285714285714285
// }

// const result = calcImc(56, 1.75) // 18.285714285714285
// console.log(result);

// if(result > 10){
//     console.log('Su IMC esta elevado')
// } else {
//     console.log('Su IMC esta BIEN')
// }


// ---------------------------------------------------------

// Ejmplo de como retornar varios valores de mi funcion (muy poco inusual que queramos esto)
// Crea una funcion que calcule la edad del usuario dentro de 10 años y mostrarle el resultado  además tambien mostrarle su edad hace 10 años y mostarle el resultado, retornar los resultados

// function calcular (age){ // 45
//     const masDiez = age + 10 // 55
//     const menosDiez = age - 10 // 35
//     return [masDiez, menosDiez];
// }

// const valor = calcular(45) // -> [55, 35]

// console.log('Tu edad dentro de 10 años sera', valor[0]) // 55
// console.log('Tu edad hace 10 años fue', valor[1]); 35



// ----------------------------------------------------------------
// Podemos enviar como parametros a mi funcion un arreglo
function calcularValor (array){
    console.log(array)
}

calcularValor([1,5,2]) // Pueden enviar arreglos a la funcion