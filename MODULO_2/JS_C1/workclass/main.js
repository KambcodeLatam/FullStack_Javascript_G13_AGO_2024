// Tipos de datos en JS

// 1. String o Cadena de texto (entre comillas dobles o simples)
// - "Kambcode"
// - 'Kambcode'
// - 'Este es un parrafo'

// 2. Numericos
// - 35
// - 2024
// - 1000000
// - 3.1416
// - 0.000003

// 3. Boleanos (Nos responden a una pregunta)
// - true -> Verdadero
// - false -> Falso

// -----------------------------------------------------------

// Variables (var)
// Es la forma de almacenar un dato para modificarlo, utilizarlo o presentarlo

// declarar y asignar un valor a una variable
var precio; // declarar una variable, es crear una  variable
precio = 21; // asignando un dato a la variable

var precio2 = 35; // declarando y asigna un valor a mi variable


// Manera larga
// document.write('Precio de los audifonos es: ');
// document.write(precio); // presentando una variable

// Manera corta
document.write('Precio de los audifonos es: ', precio); // presentando una variable

// Para nombrar una variable, utilizamos la notación camelCase

var costoDeEnvio = 10;
var iva = 4;

// Ejemplos con Cadenas de texto

var nombreProducto = 'Audifonos azules con microfono'
document.write('<br>', nombreProducto); // Saltos de linea con el tag <br>

// -------------------------------------------------------
// Reasignar variables
nombreProducto = 'BENGOO G9000 Auriculares estéreo para juegos'; // Reasignar un valor a la variable
document.write('<br>', nombreProducto);

// ------------------------------------------------------
// Operar datos y operar variables
// suma +
// resta -
// multipli. *
// division /


// Crea una varible que obtenga el costoTotal = precio + costoEnvio
var costoTotal = precio + costoDeEnvio // 21 + 10 = 31
document.write('<br>El costo total es: ', costoTotal);

// Tmabien podemos operar variables con datos
// Crea una variable que contenga el doble del costoTotal
var costoTotalX2 = costoTotal * 2 // 31 * 2 = 62
document.write('<br> El costo total X2 es: ', costoTotalX2);

// ----------------------------------------------------------
// alertas en JS
// alert('Esto es una alerta');

var nombreUsuario = prompt('Esto es una alerta, porfavor escriba su nombre'); // Daniel
document.write('<h2>', nombreUsuario,'</h2>');

