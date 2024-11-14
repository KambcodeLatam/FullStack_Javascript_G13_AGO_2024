// Arrays
// Un array es una estructura de datos que permite almacenar varios valores en una sola variable

// const arr = new Array(10);
// console.log(arr);

let arr = [];

let colores = ['rojo', 'verde', 'azul'];
let ejemplo = [
    10,
    'Hola',
    true,
    {
        nombre: 'Ana',
        ciudad: 'Bogotá',
    },
    1 + 2,
    () => { } 
];


console.log(ejemplo)
console.log(colores[1])

// PROPIEDADES

let lenguajes = ['java', 'phyton', 'javascipt'];

// Saber el largo de mi arreglo
console.log('largo de mi arreglo', lenguajes.length)

// Agregar elementos en el array (.push, .unshift)
//.push => añadir un elemento al final de arreglo
lenguajes.push('go');

//.unshift => añadir un elemento al principio del arreglo
lenguajes.unshift('c++');

console.log({ lenguajes}, 'datos añadidos')

// ELIMINAR ELEMENTOS DEL ARRAY (.shift, .pop)

// shift => Eliminar el primer elemnto del array

lenguajes.shift();
console.log({ lenguajes}, 'dato eliminado')

//pop => Eliminamos el último elemento del array

lenguajes.pop();
console.log({ lenguajes}, 'dato eliminado2')

// splice ( punto inicial, cuanto quiero borrar),

let posicion = 1;

// lenguajes.splice(posicion, 2)
// console.log({ lenguajes}, 'dato eliminado3');


// Encontrar el index(posición) del elemento indexOf(),  El dato debe ser exactamente igual al del array 
// Si me arroja un -1 significa que no hay coincidencias.

let indice = lenguajes.indexOf('phyton')
console.log('El index de python es:', indice)

// reverse => invierte el orden de los elementos de un array. El primero pasa a ser el último y viceversa.

lenguajes.reverse()
console.log({ lenguajes}, 'datos invertidos');


//Recorrer un array  forEach()

lenguajes.forEach((item, index, arr)=> {
    console.log({item, index, arr});
});

// for ()

let languagesWithJ = [];

for( let i = 0 ; i < lenguajes.length; i++) {
    if( lenguajes[i].startsWith('j')){
        languagesWithJ.push(lenguajes[i]);
    } 
}

console.log({languagesWithJ});

// RETO
// Partiendo de este array de frutas ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango']

// 1. Cuales frutas tienen menos de 6 caracteres (length)
// 2. Cuales empiezan por la letra m (starsWith)
// El resultado en cada ejercicio debe ser un array con las frutas que pasaron las condiciones

