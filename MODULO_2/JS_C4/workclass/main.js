// Template Literals ``
// Es la manera en que nosotros podemos interpolar (mezclar)variables y los diferentes tipos de datos que hemos visto

// const name = 'Daniel';
// const age = 35;

// document.write('Hola ', name, ' tu edad es: ', age, ' Este es un dato tipo sting');
// document.write(`<br>Hola ${name} tu edad es: ${age} Este es un dato tipo string`);

// if -> else if -> else

// Realzar un programa que pregunte la nacionalidad de una persona y con esta, realizar un saludo de acuerdo a su nacionalidad

// Manera poco eficiente y más larga

// const country = prompt('Digita tu nacionalidad');

// if(country === 'colombia'){ // true
//     document.write('Eres Colombiano'); // Imprimio
// }

// if(country === 'panama'){ // false
//     document.write('Eres Panameño');
// }

// if(country === 'venezuela'){ // false
//     document.write('Eres Venezolano');
// }

// if(country === 'peru'){ // false
//     document.write('Eres Peruano');
// }

// document.write('<br> FIN DEL PROGRAMA');

// Manera más eficiente y con el codigo más sintetizado
// if -> else if -> else

// const country = prompt('Digita tu nacionalidad');

// if(country === 'colombia'){ // true
//     document.write('Eres Colombiano');
// } else if(country === 'panama'){ 
//     document.write('Eres Panameño');
// } else if(country === 'venezuela'){ 
//     document.write('Eres Venezolano');
// } else if(country === 'peru'){ 
//     document.write('Eres Peruano');
// } else{
//     document.write('No eres de ningun pais registrado');
// }

// document.write('<br> FIN DEL PROGRAMA');

// -------------------------------------------------------------
// Escribe un programa que le pregunte al usuario su edad, con esta edad decirle al usuario cuanto vale su entrada a un parque de diversiones

// - Si es menor de 5 años va a pagar 10.000
// - Si es mayor o igual de 4 años y menor de 8 años va a pagar 15.000
// - Si es mayor o igual de 8 años va a pagar 20.000

// const age = Number(prompt('Digita tu edad')); // 4

// if(age < 5){ // true
//     document.write('<br>Tu entrada vale $10.000') // Imprimir
// } else if(age >= 4 && age < 8){
//     document.write('<br>Tu entrada vale $15.000')
// } else if(age >= 8){
//     document.write('<br>Tu entrada vale $20.000')
// }

// RETO:
// Escribe un programa que calcule el precio de entrada a un bar
// Tiene que preguntar el genero de la persona (male/female)
// Preguntar la edad

// - Los menores de 18 años (sean hombre o mujeres) -> NO PUEDEN INGRESAR
// - Las mujeres siempre entran gratis
// - Los mayores de 18 años -> Pagan un cover de 30.000

// const genero = prompt('Ingresa su genero: (male o female)'); // male
// const age = Number(prompt('Ingresa su edad')); // 28

// if(age < 18){
//     document.write('No puedes ingresar');
// } else if(genero === 'female'){
//     document.write('Ingresa Gratis');
// } else {
//     document.write('Pagas 30.000');
// }

// --------------------------------------------------------------
// Reto:
// Crear un progerama que pida al usuario un color de camiseta y una talla (S/M/L/XL) El programa debe decirle a él usuario cuantas camisetas hay disponibles:
// De acuerdo a la siguiente tabla:

// - Azules de talla L -> 4 camisetas
// - Azules de talla M -> 10 camisetas
// - Azules de talla S -> 6 camisetas
// - Amarillas de talla M -> 8 camisetas
// - Verdes de talla S -> 2 camisetas
// - De los demás colores y tallas no hay disponibles

// .toLowerCase() -> Para pasar todas las letras de mayuscula a minuscula
// .toUpperCase() -> Para pasar todas las letras de minuscula a mayuscula
const size = (prompt('Escribe la talla de la camiseta')).toLowerCase();
const color = (prompt('Escribe el color')).toLowerCase(); // AZUL -> azul

if((color === 'azul' || color === 'amarillo' || color === 'verde')){
    if(color === 'azul' && (size === 'l' || size === 'L')){
        document.write('Hay 4 camisetas disponibles');
    } else if(color === 'azul' && size === 'm'){
        document.write('Hay 10 camisetas disponibles');
    } else if(color === 'azul' && size === 's'){
        document.write('Hay 6 camisetas disponibles');
    } else if(color === 'amarillo' && size === 'm'){
        document.write('Hay 8 camisetas disponibles');
    } else if(color === 'verde' && size === 's'){
        document.write('Hay 2 camisetas disponibles');
    } else {
        document.write('No hay en esta talla');
    }
} else {
    document.write('No esta disponible en este color')
}