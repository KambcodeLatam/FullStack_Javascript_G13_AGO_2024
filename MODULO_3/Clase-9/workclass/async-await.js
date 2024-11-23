const axios = require('axios/dist/browser/axios.cjs'); 

// Async-await: Simplifica el trabajo con funciones asíncronas y promesas en Javascript,

//Sintaxis async/await

//async: Declara una función asincrona y está función devuelve una promesa
//await: Pausar la ejecución hasta que la promesa se resuelve

// try/catch

function obtenerNombre() {

    return 'Ana'


}

async function getNombre() {
    const resultado = await obtenerNombre();
    console.log({ resultado })
}

getNombre();

const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

function obtenerDias() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dias)
        }, 2000)
    })
}

obtenerDias()
    .then((resultado) => {
        console.log({ resultado })
    })

const obtenerDiasAsync = async () => {
    const datos = await obtenerDias();
    
}

obtenerDiasAsync();



// llamar info de API con fetch

async function getPhoto() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/2000');
        const photo = await response.json();
        console.log({photo} )
    } catch (error) {
        console.error('Error', error)
    }  
}

getPhoto();
let pokemons;

const getUsuarios = async () => {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await data.json();
        pokemons = usuarios
        console.log({usuarios})
    } catch (error) {
        console.error({error})
    }
}



getUsuarios()

const getUsuario = async (id) => {
    try {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        const response = await fetch(url);
        const usuario = await response.json();
        console.log({usuario})
        
    } catch (error) {
       console.error('Error', error) 
    }
}

getUsuario(5);


//Promise All

function getNumber (){
    return new Promise ((resolve)=> {
        resolve(6)
    })
}

function getName (){
    return new Promise((resolve, reject)=> {
        // resolve('Diego')
        reject('No hay nombre')
    })
}

async function getNameAndNumber () {
    try {
        
       const [numero, nombre ] = await Promise.all([getNumber(), getName()])
       console.log(numero, nombre)

    } catch (error) {
        console.error(error)
    }
}

getNameAndNumber();


//RETO

// Crear 2 variables (comportamiento, calificaciones)
// Crear 2 funciones con promesas que retorne el valor del comportamiento, calificaciones 
// ( Si el resultado es true -> resolve, false -> reject)
// Crear una función con async/await y el promise all que me retorne el resultado de las funciones



// const getUsuariosAxios = async () => {
//     try {
//         const data = await axios.get("https://jsonplaceholder.typicode.com/users");
//         console.log({data}, 'Axios')
    
//     } catch (error) {
//         console.error({error})
//     }
// }

// getUsuariosAxios()