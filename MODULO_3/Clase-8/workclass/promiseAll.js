//Definición: Ejecuta varias promesas en paralelo y se resuelve cuando todas se completan.
// Si una promesa falla... Promise.all será rechazado.

//Ventajas: 
// - Cuando manejamos llamados a algunas operaciones que dependen de todas las respuestas (Ej: Llamados a múltiples API)
// - Eficiencia.

//Desventajas
// Falla total si una promesa se rechaza
// No podemos manejar parciales. 

const promesa1 = Promise.resolve(3);
const promesa2 = Promise.resolve("Hola");
const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hecho')
    }, 3000)
});

Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => console.log(resultados))
    .catch((error) => console.log("Error", error))


//Ejemplo 1

const productos = ['Camisa', 'Zapatos', 'Pantalon'];
const precios = [80, 500, 200];
// const stock = [ 200, 800, 30];
const stock = [];

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        if (productos.length) {
            resolve(productos)
        } else {
            reject("No hay productos")
        }
    })
}

const obtenerPrecios = () => {
    return new Promise((resolve, reject) => {
        if (precios.length) {
            resolve(precios)
        } else {
            reject("No hay precios")
        }
    })
}

const obtenerStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.length) {
            resolve(stock)
        } else {
            reject("No hay precios")
        }
    })
}

Promise.all([obtenerProductos(), obtenerPrecios(), obtenerStock()])
    .then(([productos, precios, stock]) => {
        console.log({ productos, precios, stock })
    })
    .catch((error) => console.error("Error:", error))

//Ejemplo2

const preciosProducto = [200, 500, 700, 100];
const preciosProducto2 = [200, 500, 700, 100];
// const preciosProducto2 = [];

const calcularIva = () => {
    return new Promise((resolve, reject) => {
        if (preciosProducto.length) {
            const preciosIva = preciosProducto.map((precio) => precio * 1.19)
            resolve(preciosIva)
        } else {
            reject("No hay precios")
        }
    })
}

const aplicarDescuento = () => {

    return new Promise((resolve, reject) => {
        if (preciosProducto2.length) {
            const preciosDescuento = preciosProducto2.map((precio) => precio * 0.5)
            resolve(preciosDescuento)
        } else {
            reject("No hay precios")
        }
    })

}

Promise.all([calcularIva(), aplicarDescuento()])
    .then((resultados) => {

        const nuevoValor = resultados

        console.log({nuevoValor})
    }
    )
    .catch((error) => console.error("Error", error))

