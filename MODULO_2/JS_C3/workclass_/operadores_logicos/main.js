// const paisDeOrigen = prompt('Escribe el pais donde naciste'); // peru
// const edad = Number(prompt('Digita tu edad')); // 28

// Operador && = Se tienen que cumplir todas las condiciones (todas sean true)
//               para que la condicion general sea true
//if(false)
// if(paisDeOrigen === 'colombia' && edad < 18){
//     document.write('<br>Tienes que pagar $8.000 entre semana');
// } else {
//     document.write('<br>Tienes que pagar $15.000 entre semana');
// }

// Operador || = Siempre cuando una de todas las condiciones sea true,
//               toda la condicion en general va a ser true

// if(false)
// if(paisDeOrigen === 'colombia' || edad > 64 || edad < 18){
//     document.write('El valor de tu entrada es $5.000')
// } else {
//     document.write('El valor de tu entrada es $10.000')
// }

// -------------------------------------------------------------------
// Reto:
// calcular el precio de entrada a un evento, el programa debe preguntar
// el genero (m/f/o) y tambien debe preguntar la edad

// - $10.000 -> Si el genero es igual a 'f' ó si la persona tiene más de 64 años
// - $20.000 -> para el resto de personas

// Enviar pantallazos por el grupo de whatsaap.

// const gender = prompt('Digita tu genero (m/f/o)');
// const age = Number(prompt('Digita tu edad'));

// if(gender === 'f' || age > 64){
//     document.write('Tu entrada vale $10.000')
// } else {
//     document.write('Tu entrada vale $20.000')
// }

// const suscripcion = true

// if(age > 18 || age < 64 && paisDeOrigen === 'colombia'){
//     document.write('Esto es un prueba');
// }