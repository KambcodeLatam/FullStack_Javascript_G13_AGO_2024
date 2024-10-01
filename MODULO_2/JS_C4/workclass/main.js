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

const age = Number(prompt('Digita tu edad')); // 4

if(age < 5){ // true
    document.write('<br>Tu entrada vale $10.000') // Imprimir
} else if(age >= 4 && age < 8){
    document.write('<br>Tu entrada vale $15.000')
} else if(age >= 8){
    document.write('<br>Tu entrada vale $20.000')
}

// RETO:
// Escribe un programa que calcule el precio de entrada a un bar
// Tiene que preguntar el genero de la persona (male/female)
// Preguntar la edad

// - Los menores de 18 años (sean hombre o mujeres) -> NO PUEDEN INGRESAR
// - Las mujeres siempre entran gratis
// - Los mayores de 18 años -> Pagan un cover de 30.000
