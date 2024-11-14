// Objetos literales
// Estructuras de datos que permiten almacenar datos grupos de datos
// Sintaxis simple con pares clave -valor 

let persona = {
    nombre: 'Jessica',
    edad: 25,
    idioma: 'Español',
    saludar: () => console.log('Hola!!'),
    direccion: {
        zip: '110011',
        ubicacion: 'Bogotá'
    },
    hobbies: ['nadar', 'leer', 'dormir'],
    casado: false,
}

console.log( persona.nombre);
console.log( persona['nombre'], 'opción 2');
console.log( persona.direccion.ubicacion)
console.log( persona['direccion']['ubicacion'])
console.log( persona.hobbies[2])

const x = 'casado';
console.log(persona[x]);

persona.saludar();

// Añadir o modificar propiedades
persona.lenguajes = [ 'javascript', 'php', 'java'];
persona.edad = 31,

console.log({persona});

// Eliminar propiedades

delete persona.idioma;
console.log({persona}, 'se elimino idioma');

//Crear pares de valores
const entriesPares = Object.entries(persona);
console.log(entriesPares);

// Listar todas las propiedades

const propiedades = Object.getOwnPropertyNames(persona);
const propiedades2 = Object.keys(persona);
const values = Object.values(persona);
console.log(propiedades, {propiedades2}, {values});


const resp ={
    status: 'success',
}

if( Object.keys(resp).length > 0 ){
    console.log('Hacer algo')
};


for( const item of persona.lenguajes){
    console.log({item});
}




