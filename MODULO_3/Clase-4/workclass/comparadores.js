
// Operadores Lógicos

// AND - OR - NOT
// AND &&
// OR ||
// NOT !

let a = false;
let b = true;

console.log(a && b);
console.log( a || b) ;
console.log( !b)

// Operadores de comparación
// Lo usamos para comparar dos valores y devolver un booleano

// Igualdad ( == o ===)
// Desigualdad ( !== o !=  )
// Mayor que >
// Menor que < 
 
console.log( 'igualdad', 5 == '5');
console.log( 'igualdad estricta', 5 === '5');

// Devuelve true si los valores son diferentes sin importar el tipo de dato
console.log('desigualdad', 5 != '5');

// Devuelve true si los valores o sus tipos son diferentes
console.log('desigualdad estricta', 5 !== '5');


// Mayor que
console.log( 'mayor que', 10 > 5);
// Mayor o igual que
console.log( 'mayor o igual que', 10 >= 10 );
// Menor que
console.log( 'menor que', 10 < 5);
// Menor o igual que
console.log( 'mayor o igual que', 10 <= 10 );

let age = 17;
let gender = 'f';

if(age >=18 || gender === 'm'){
    console.log('Es mayor de edad y/o es hombre');
} else {
    console.log('No es mayor de edad o no es hombre')
}

// Condicionales
// Permiten ejecutar diferentes bloques de código basados en ciertas condiciones

// 1) if-else

let temperature = 2;

if(temperature > 25){
    console.log('Hace calor')
} else if(temperature >= 8 && temperature<=24){
    console.log( 'Está fresco')
}else {
    console.log('Hace frío')
}

// 2.Condicional ternario

let number = 8;
const result = (number % 2 === 0) ? 'Par' : 'Impar';
const result2 = (number % 2 === 0) && 'Par' ;
const result3 = (number % 2 === 0) ? 'Par' : null ;

console.log({ result });
console.log({ result2 });
console.log({ result3 });

// Operador de fusion Nula (??)
    // Si un valor es null o undefined podemos asignar un retorno de información
let user;
console.log( user ?? 'Usuario indefinido')

user = 'Jessica'
console.log( user ?? 'Usuario indefinido')


// Proposiciones Logicas

let isMember = true;
let hasDiscount = false;

const finalPrice1 = ( isMember && hasDiscount ) ? 50 : ( isMember || hasDiscount) ? 70 : 100;
console.log({ finalPrice1 });








