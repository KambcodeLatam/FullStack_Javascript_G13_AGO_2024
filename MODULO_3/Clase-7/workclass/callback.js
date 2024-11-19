// 3 técnicas para implementar asincronismo
// 1. callbacks
// 2. promises (then, catch)
// 3. async await  


//Callbacks?
// Es una función que se pasa como argumento a otra función y que se ejecuta después 
//de que la función principal haya terminado su tarea


const greet = (name, callback) => {
    console.log(`Hola ${name}`);
    callback();
}

function sayGoodbay() {
    console.log('Adiós')
}

// greet('Jessica', sayGoodbay );


const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

const findUser = (id, userData) => {
    const user = users.find(user => user.id === id);

    if (!user) {
        userData(`Usuario con id ${id} no se encuentra`, null);
        return
    }

    userData(null, user);

}

function userData(err, user) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(user)
}

// findUser(1,userData)

// findUser(1, (err ,user)=> {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(user)
// })

const divideNumbers = (a, b, callback) => {
    if (b === 0) {
        callback(new Error("No se puede dividir en cero"), null);
    } else {
        callback(null, a / b)
    }
}

function resultDivide(err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log('resultado: ', result)
    }
}

// divideNumbers(10, 0,resultDivide  )



const delayedMessage = (callback) => {
    console.log('hola')
    setTimeout(() => {
        console.log('Mensaje retrasado');
        callback();
    }, 5000)
}

function afterMessage() {
    console.log(" Esto se ejecuta despues del mensaje retrasado");
};

// delayedMessage(afterMessage);


const fetchData = (callback) => {
    console.log('Obteniendo datos....');

    setTimeout(() => {
        const data = users;
        callback(data)
    }, 3000)
}

function processData(data) {
    console.log("Datos:", data)
}

// fetchData(processData);

const saludarClaudia = () => console.log('Hola Claudia');
const saludarJuanPablo = () => console.log('Hola Juan Pablo');
const saludarJuanManuel = () => console.log('Hola Juan Manuel');
const saludarLuis = () => console.log('Hola Luis');


const saludarEstudiante = (callback) => {
    console.log('Cargando saludo...');
    callback()
}

// saludarEstudiante(saludarClaudia);
// saludarEstudiante(saludarJuanPablo);
// saludarEstudiante(saludarJuanManuel);
// saludarEstudiante(saludarLuis);


const lenguajes = ['phyton', 'javascript', 'php', 'go', 'R'];
// const lenguajes = [];

const imprimirLenguaje = (err, lenguaje) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(lenguaje)
};

const languajesWithFor = (list, callback) => {
    if (!list.length) {
        callback(new Error("No hay datos de lenguajes"), null)
    } else {
        for (let lenguaje of list) {
            callback(null ,lenguaje);
        }
    }
}

// languajesWithFor(lenguajes, imprimirLenguaje);





//Callback hell: Si los callbacks están anidados, el código va a ser difícil de leer y mantener.

const suma = (val, callback) => {
    if(val) {
        callback(val + 5, null)
    } else {
        callback ( null, new Error ('No hay valor ingresado'))
    }
}

const resta = (val, callback) => {
    if(val) {
        callback(val - 5, null)
    } else {
        callback ( null, new Error ('No hay valor ingresado'))
    }
}

const multiplicacion = (val, callback) => {
    if(val) {
        callback(val * 5, null)
    } else {
        callback ( null, new Error ('No hay valor ingresado'))
    }
}



// suma( null, (resultadoSuma, error)=> {
//     if(!error){
//         resta(resultadoSuma, (resultadoResta, errorResta)=> {
//             if(!errorResta){
//                 multiplicacion(resultadoResta, (resultadoMultiplicación, errorMultiplicación)=> {
//                     if(!errorMultiplicación){
//                         console.log('Resultado total de operaciones:', resultadoMultiplicación )
//                     }
//                 })
//             }
//         } )
//     } else {
//         console.log(new Error("No se ingreso ningún valor"))
//     }
// })

const atenderUsuario = (callback) => {
    setTimeout(()=>{
       console.log('Atendiendo usuario 1')
       callback()
    }, 3000)
}

const atenderUsuario2 = (callback) => {
    setTimeout(()=>{
       console.log('Atendiendo usuario 2')
       callback()
    }, 1000)
}

const atenderUsuario3 = () => {
    setTimeout(()=>{
       console.log('Atendiendo usuario 3')
    }, 2000)
}

atenderUsuario(()=>{
    atenderUsuario2(()=> {
        atenderUsuario3();
    })
})
