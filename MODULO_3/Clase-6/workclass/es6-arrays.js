// .forEach - .map - .filter ,  .find , .some y .every

// forEach => Ejecutar una función para cada elemento de un array
const numbers = [1, 2 , 3 , 4 ];

for ( let i = 0; i < numbers.length ; i++) {
    console.log(numbers[i]*2);
}

numbers.forEach(num => console.log(num*2));

//map => Crear un nuevo array aplicando una función a cada elemento del array original

const names = [ 'ana', 'luis', 'alejandro', 'pedro'];


let namestoUppercase =[];
for( let name of names ){
    namestoUppercase.push(name.toUpperCase());
}
console.log({namestoUppercase})

const names2 = names.map((item)=> item.toUpperCase());
console.log({names2})

const products = [
    {
        name: 'Teclado',
        price:80
    },
    {
        name: 'Mouse',
        price:100
    },
    {
        name: 'Pantalla',
        price:300
    },
]

const nameProducts = products.map((item) => {
    return {
        name: item.name,
        price: item.price * 1.2 
    }
});


console.log({nameProducts})

//Filter => Crear un nuevo array con elementos que cumplan una condición
const numbers2 = [1, 2 , 3 , 4 ];
const eventNumbers = [];

for(let number of numbers2){
    if(number % 2 === 0) {
        eventNumbers.push(number)
    }
}
console.log({eventNumbers})

const eventNumbersFilter = numbers2.filter((number)=> number % 2 ===0 );


console.log({eventNumbersFilter});

const products2 = [
    {
        name: 'Teclado',
        price:80
    },
    {
        name: 'Mouse',
        price:100
    },
    {
        name: 'Pantalla',
        price:300
    },
]

const expensiveProducts = products2.filter((item)=> item.price >= 100);
console.log({expensiveProducts})


//Find => Encuentra el primer elemento que cumpla con una condición

const lenguajes = ['phyton','go', 'javascript', 'javascript', 'java'];

let firstCoincidence;
for (let item of lenguajes) {
    if(item === 'javascript'){
        firstCoincidence = item;
        break;
    }
}

console.log({firstCoincidence})

const firstCoincidenceFind = lenguajes.find((item) => item === 'javascript');
console.log({firstCoincidenceFind})

//SOME => verifica si hay un elemento que cumple con la condición. Siempre retorna un booleano

const number3 = [5, 12, 35, 50 ,400];

let hasBigNumber = false;
for(let number of number3) {
    if(number >= 50){
        hasBigNumber = true;
        break;
    }
}

console.log({hasBigNumber})

const hasBigNumberSome = number3.some((item)=> item >= 50);

console.log({hasBigNumberSome})

// Every => Verifica que todos los elementos de mi arreglo cumplen una condición. Siempre retorna un booleano.
const products3 = [
    {
        name: 'Teclado',
        price:80
    },
    {
        name: 'Mouse',
        price:100
    },
    {
        name: 'Pantalla',
        price:300
    },
]

let allPositive = true;
for(let product of products) {
    if(product.price <= 100){
        allPositive = false;
        break
    }
}

console.log({allPositive})
let allPositiveEvery = products.every((item) => item.price >=50)
console.log({allPositiveEvery})


//Ejercicio

// const products = [
//     { name: "Laptop", price: 1000, stock: 5 },
//     { name: "Mouse", price: 25, stock: 0 },
//     { name: "Keyboard", price: 75, stock: 3 },
//     { name: "Monitor", price: 200, stock: 2 }
//   ];

// 1. Usar filter para obtener los productos en stock > 0
// 2. Usar un map para aumentar el precio de cada producto un 10%
// 3. Usar un find para encontrar el producto Keyboard
// 4. Usar un some para verificar si hay un producto agotado
// 5. Usar un every para validar si los productos cuestan mas de 20
// 6. Recorrer con forEach e imprimir los nombres de los productos 
