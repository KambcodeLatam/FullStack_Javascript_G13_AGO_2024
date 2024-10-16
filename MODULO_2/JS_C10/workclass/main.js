// Arrow Function || Funciones tipo flecha

// Funcion Tradicional
// function isAdult (age) {
//     return age > 18 // true
// }

// const personIsAdult = isAdult(15);
// console.log(`Una persona de 20 años es mayor de edad?, ${personIsAdult}`);

// Arrow Function
// Es una nueva forma de escribir funciones en JS, es más sencillo su estruictura, podemos almacenar una funcion en una variable, Sintaxis es mas concisa. Heredan su propio contexto .this

// const esAdulto = (edad) => {
//     return edad > 18
// }

// console.log(esAdulto(20)) // true

// Cuando la funcion es muy reducida, simplemente tiene un console.log
// const sayHello = () => console.log('Hola soy una funcion tipo flecha')

// sayHello();


// RETO 1.
// Crea una funcion tipo flecha que calcule el valor de un producto
// precio producto + precio envio


// -----------------------------------------------------------------------------------
// Tipos de datos
// 1. String
// 2. Numerico
// 3. Boleanos
// 4. Arreglos
// 5. Funciones
// 6. Objetos


// Objetos en JS
// Un objeto es una estructura que permite almacenar colecciones de datos y funcionalidad relaciones. Se compone de propiedades o atributos que tienen un valor determinado

// const product = {
//     name: 'celular',
//     color: ['negro', 'verde', 'blanco', 'gris'],
//     marca: 'Iphone',
//     cantidadStock: 150,
//     precio: 5000000,
//     descuento: 10, // 10%
//     disponibleEntregaInmediata: true
// }

// console.log('Marca del producto: ', product.marca);

// Reto:
// Si el producto esta disponible para que entrega inmediata vamos a imprimir 
// 'Lo recibiras hoy'
// si no, vamos a imprimir 'Lo recibiras despues'

// if(product.disponibleEntregaInmediata){
//     console.log('Lo recibiras hoy')
// } else {
//     console.log('Lo recibiras despues')
// }

// Operaciones con los objetos

// 1. Puedo sobreescribir un valor de una propiedad
// product.marca = 'Xiaomi'
// 2. Puedo agregar una propiedad al objeto
// product.sePuedeFinanciar = false;
// 3. Puedo quitar una propiedad al objeto
// delete product.descuento;
// console.log(product);

// ------------------------------------------------------------------------

const dog = {
    name: 'firulais',
    age: 5,
    color: 'negro',
    raza: 'criollo',
    estaVacunado: true,
    // saludar: function (){ // funcion tradicional
    //     console.log(`Hola soy ${dog.name}`)
    // }
    saludar: () => { // Funcion tipo flecha
        console.log(`Hola soy ${dog.name}`)
    }
}

// console.log('El nombre del perro es: ', dog.name) // Firulais
// console.log('La edad del perro es: ', dog.age) // 5
// dog.saludar(); // Hola soy firulais

// ------------------------------------------------------------------------

const product = {
    name: 'celular',
    identificador: 2323,
    color: ['negro', 'verde', 'blanco', 'gris'],
    marca: 'Iphone',
    cantidadStock: 150,
    precio: 5000000,
    descuento: 500000, // 10%
    disponibleEntregaInmediata: true,
    obtenerPrecioTotal: () => {
        return product.precio - product.descuento // 4500000
    },
    isColorAvailable: (colorSolicitado) => {
        const colorDisponible = product.color.includes(colorSolicitado); // false
        return colorDisponible // true
    }
}

// console.log(`El precio total del producto es: ${product.obtenerPrecioTotal()}`)

// const disponibleEnVerde = product.isColorAvailable('verde')
// console.log(`Esta disponible en color verde? ${disponibleEnVerde}`);

// const disponibleEnMorado = product.isColorAvailable('morado')
// console.log(`Esta disponible en color morado? ${disponibleEnMorado}`);

// --------------------------------------------------------------------------------
// Podemos crear un objeto que tenga un arreglo

const colores = {
    name: 'colores',
    color: ['negro', 'blanco', 'morado'], // arreglo dentro de objeto
    disponible: 3,
}

// Podemos crear un arreglo que contenga objetos

const animales = [
    {animal: 'elefante', age: 12, color: 'gris'}, // 0
    {animal: 'perro', age: 7, color: 'negro'}, // 1
    {animal: 'gato', age: 10, color: 'blanco'} // 2
]

console.log(animales[1]) // {animal: 'perro', age: 7, color: 'negro'}