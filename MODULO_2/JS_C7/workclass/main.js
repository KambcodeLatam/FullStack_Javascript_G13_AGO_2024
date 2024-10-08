// Arreglos, Arrays, Listas

// Tipos de datos:
// 1. String o Cadenas
// let name = 'Kambcode'
// 2. Numericos:
// let age = 38
// 3. Boleanos:
// console.log(5>2) // true
// 4. Arreglos

// Array -> Arreglos
// Los arreglos son listas o estructuras de datos que premiten almacenar multiples valores, del mismo tipo de dato o de diferentes de datos en una sola variable

// Ejemplo una variable que tiene una lista de productos

// const shoppingList = ['leche', 'pan', 'arroz', 'manzanas', 'fresas', 'uvas'];
// console.log('Este es mi primer arreglo', shoppingList);

// const years = [2020, 2021, 2022, 2023, 2024];
// console.log(years);

// const mixedArray = ['kambcode', 3, true, 45, 'Latam', false];
// console.log(mixedArray);

// const arrayVacio = []; // Lista o Arreglo Vacio

// Utilidades de los Arreglos

// 1. Como saber cuantos elementos tiene un arreglo .length
// const shoppingList = ['leche', 'pan', 'arroz', 'manzanas', 'fresas', 'uvas'];
// console.log(shoppingList)
// console.log(shoppingList.length) // 6

// 2. Para agregar elementos a un array usamos el metodo .push()
// shoppingList.push('bananos', 'sandia', 'huevos', 'mandarinas');
// console.log(shoppingList); 
// console.log(shoppingList.length)

// 3. Podemos consultar un elemento en particular de nuestro arreglo
// posiciones  = [0,                       1,                  2]
// const todoList = ['Hacer la tarea', 'lavarme los dientes', 'dormir'];
// console.log(todoList.length) // 3
// console.log('El primer elemento de nuestro arreglo es:', todoList[0]) // Hacer la tarea
// console.log('El segundo elemento de nuestro arreglo es:', todoList[1]) // lavarme los dientes
// console.log('El tercer elemento de nuestro arreglo es:', todoList[2]) // dormir
// console.log('El cuarto elemento de nuestro arreglo es:', todoList[3]) // undefined -> No existe

// 4. Podemos reemplzar un element de un array
// todoList[1] = 'acostarme';
// console.log(todoList) // 'hacer la tarea', 'acostarme', 'dormir'

// 5. Podemos consultar o buscar si un elemento existe .includes()

// -------------------------------------------------------------------------------------------

// Crear un programa similar a un carrito de compras, que le pregunte al usuario 3 productos y que estos se vayan agregando a nuestro arreglo

const shoppingList = []; // arreglo vacio

for(let i = 1; i <= 3; i++){
    const element = prompt('Ingresa un producto a agregar');
    shoppingList.push(element); // [arroz, azucar, sal]
    console.log('Mi lista de compras', shoppingList)
}

// document.write('La cantidad de elementos que tiene nuestro arreglo:', shoppingList.length);

for(let i = 0; i < shoppingList.length; i++){
    document.write(`<li> ${shoppingList[i]} </li>`) // arroz, azucar, sal
}

// Quiero consultar si en la lista (arreglo) esta azucar

console.log('El arreglo contiene el elemento azucar?', shoppingList.includes('azucar'))
console.log('El arreglo contiene el elemento pan?', shoppingList.includes('pan'))

// Manera poco eficiente
// document.write(`<li> ${shoppingList[0]} </li>`) // arroz
// document.write(`<li> ${shoppingList[1]} </li>`) // azucar
// document.write(`<li> ${shoppingList[2]} </li>`) // sal

// ----------------------------------------------------------------------------
// RETO:
// Generar un arreglo (lista) que contenga los numeros del 1 al 1000
// console.log(myArray) -> [1, 2, 3, 4, 5, 6....1000]

// const myArray = [];

// for(let number = 1; number <= 1000; number = number + 1){
//     myArray.push(number);
// }

// console.log(myArray);

// ----------------------------------------------------------------------------


