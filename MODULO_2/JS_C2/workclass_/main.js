// .toFixed() -> Control de decimales

// var age = 58;
// var middleAge = age / 3; // 19.333333333333332
// var middleAgeRounder = middleAge.toFixed(); // 19.33333
// document.write('La tercera parte de la edad es: ', middleAge.toFixed(3));

// --------------------------------------------------------------
// Cohersion de Datos -> Unir 2 cadenas de texto

// var fullName = 'Kambcode' + 'Latam' // KambcodeLatam
// document.write(fullName)
// var numero = '32' + '24'
// document.write('<br>', numero) // 3224
// var year = '20' + 24 // 44 || 2024
// document.write('<br>', year);

// Cree que un programa que le pida al usuario su edad y luego con esa
// edad, calcule y muestrele al usuario su edad dentro de 10 años
// Number() -> Convertir Cadenas de texto a Numeros
// parseInt()
// parseFloat()

// var userAge = Number(prompt('Digita tu edad')); // 35
// var userAgeNumber = Number(userAge) // 35
// var userAgePlusTen = userAge + 10; // 35 + 10 = 45

// document.write('<br> Tu edad es: ', userAge);
// document.write('<br> Tu edad dentro de 10 años es: ', userAgePlusTen);

// -------------------------------------------------------------------

// Como comparar variables -> Nos responder con un valor boleanos(true/false)
// Igualdad == El compara los valores, sin tener en cuenta los Tipos de Datos
// Igualdad exacta === Compara los valores y los tipos de Datos
// Mayor que >
// Menor que <
// Mayor o igual >=
// Menor o igual <=
// Diferencia != El compara los valores, sin tener en cuenta los Tipos de Datos
// Diferencia exacta !== Compara los valores y los tipos de Datos
// Modulo %

// Diferencia entre igual e igualdad exacta
// document.write(15 == '15'); // true
// document.write('25' === 25); // false
// document.write('colombia' == 'Colombia') // false
// document.write('colombia' === 'Colombia') // false

// Diferencia vs Diferencia exacta
// document.write(15 != '15') // false
// document.write(15 !== '15') // true

// --------------------------------------------------------

// Condicionales if / else
// if(Condiciòn (true / false)){
// Es el bloque de codigo que va a funcionar si la condición es true
//}

// Crea un programa que le pregunte al usuario su edad, si este es mayor
// o igual a 18 años, enviar un mensaje por un document.write 
// 'Usted es mayor de edad', si es menor de edad enviar un mensaje por un document.write 
// 'Usted es menor de edad'

// var age = Number(prompt('Digita tu edad')); // 35

// if(age >= 18){ // false
//     document.write('Usted es mayor de edad');
// } else{
//     document.write('Usted es menor de edad')
// }

// document.write('<br> FIN DEL PROGRAMA')

// ----------------------------------------------

// var fruta = prompt('Digita una fruta'); // uva
// var manzanas = 'manzanas'

// if(fruta === manzanas){
//     document.write('Usted va a comprar una uva')
// } else {
//     document.write('Usted compró otra fruta')
// }


// ------------------------------------------------------

// Repaso condicionales
// Escribir un programa que pida al usuario dos números y muestre por pantalla 
// su división. Si el divisor es cero el programa debe mostrar un error, ejemplo 
// "Error: el divisor no puede ser cero".

var number1 = Number(prompt('Ingrese el Primer Numero')); // diviendo = 20
var divisor = Number(prompt('Ingrese el Segundo Numero')); // diviendo = 3

if(divisor === 0){
    document.write('Error: el divisor no puede ser cero');
} else{
    var division = number1 / divisor
    document.write('El resultado de la division es: ', division.toFixed(2));
}
