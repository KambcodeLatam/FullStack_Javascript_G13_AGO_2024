// JSON
const personas = [
    {
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
    },
    {
        nombre: 'Andres',
        edad: 30,
        idioma: 'Ingles',
        saludar: () => console.log('Hola!!'),
        direccion: {
            zip: '55468',
            ubicacion: 'USA'
        },
        hobbies: ['correr', 'leer',],
        casado: true,
    },
    {
        nombre: 'Maria',
        edad: 18,
        idioma: 'Español',
        saludar: () => console.log('Hola!!'),
        direccion: {
            zip: '115479',
            ubicacion: 'Cali'
        },
        hobbies: ['nadar'],
        casado: false,
    }
]

for( let i = 0; i< personas.length; i++){
    console.log('Persona', personas[i].nombre)
}

for ( item of personas){
    console.log(item.nombre, 'for-of')
}

for( let index in personas){
    console.log(personas[index].nombre)
}


// While -- Repite un bloque de código mientras se cumpla una condición

// while(personas.length <=3){
//     console.log('Persona')
// }

let i = 0;

// while  (i < 5) {
//     console.log(i)
//     i++;
// }

while ( i < personas.length) {
    console.log(personas[i].nombre)
    i++;
}

// Foreach

personas.forEach((item, index) => {
    console.log(item.nombre, 'forEach')
})

