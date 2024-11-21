// Promesas: Un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca.
// 3 estados:
// 1. Pending(pendiente): Cuando una promesa se está ejecutando
// 2. Fullfilled (resuelta): Cuando una operación se ejecuta exitosamente
// 3. Rejected ( rechazada ): Cuando una operación falla

// Sintaxis de una promesa
// Se usan con el constructor Promise

const miPromesa = new Promise((resolve, reject) => {
    let cumplir = true;
    if (cumplir) {
        resolve("Operación exitosa");
    } else {
        reject("Error en la operación")
    }
})


miPromesa
    .then((resultado) => {
        console.log("Exito: ", resultado)
    })
    .catch((error) => {
        console.log("Error: ", error)
    })

//Ejemplo 1

const usuarios = [
    {
        id: 1,
        nombre: 'Ana',
        activo: true
    },
    {
        id: 2,
        nombre: 'Carlos',
        activo: false
    },
    {
        id: 3,
        nombre: 'Juan',
        activo: true
    }
];

const obtenerUsuarios = () => {
    return new Promise((resolve, reject) => {
        if (usuarios.length) {
            resolve(usuarios)
        } else {
            reject("No se encontraron usuarios")
        }
    })
}

obtenerUsuarios()
    .then((usuarios) => {
        const usuariosActivos = usuarios.filter((usuario) => usuario.activo === true);
        if (!usuariosActivos) {
            throw new Error("No hay usuarios activos")
        }
        return usuariosActivos
    })
    .then((activos) => {
        console.log("Usuarios activos:", activos)
    })
    .catch((error) => console.log("Error:", error))


//Ejemplo 2

const productos = [
    {
        id: 1,
        nombre: 'Camisa',
        precio: 200,
    },
    {
        id: 2,
        nombre: 'Pantalon',
        precio: 300,
    },
    {
        id: 3,
        nombre: 'Zapatos',
        precio: 600,
    }
]

const buscarProducto = (id) => {
    return new Promise((resolve, reject) => {

        const product = productos.find((product) => product.id === id);

        if (product) {
            resolve(product)
        } else {
            reject(`El producto con id ${id} no existe`)
        }

    })
}

buscarProducto(5)
    .then((producto) => console.log(producto))
    .catch((error) => console.error("Error:", error));


//Ejemplo 3

const precios = [200, 500, 700, 100];
// const precios = [];

const obtenerPrecios = () => {
    return new Promise((resolve, reject) => {
        if (precios.length) {
            calculoConIVA = precios.map((precio) => precio * 1.19)
            resolve(calculoConIVA)
        } else {
            reject(" No hay precios disponibles")
        }
    })
}

obtenerPrecios()
    .then((precios) => console.log('Valores con IVA:', precios))
    .catch((err) => console.error("Error", err))


//VENTAJAS
// Código legible
// Manejo de errores

//DESVENTAJAS
// Complejidad inicial

//Metodos (Promise.all, Promise.race, Promise.allSettled)

