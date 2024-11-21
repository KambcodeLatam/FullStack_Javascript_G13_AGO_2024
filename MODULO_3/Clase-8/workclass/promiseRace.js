// Se resuelve o rechaza tan pronto una de las promesas se complete

//Ventajas: 
// - Velocidad: Cuando se necesita el resultado de la primera promesa en completarse.
// - Límite de tiempo: Podemos establecer un límite de espera

//Desventajas: 
// - Resultados inconsistentes: Si se rechaza una promesa no se accede  a las demas
// - No es útil para operaciones combinadas.

const promesa = new Promise((resolve)=> setTimeout(()=> {
    resolve('Rapido')
}, 100))

const promesa2 = new Promise((resolve)=> setTimeout(()=> {
    resolve('Lento')
}, 500))

Promise.race([promesa, promesa2])
    .then((resultado) => console.log(resultado))
    .catch((error)=> console.error('Error:', error))

//Ejemplo 1 

const tarea1 = () => {
    return new Promise((resolve) => setTimeout(()=> resolve('Tarea 1 completada'), 300))
}

const tarea2 = () => {
    return new Promise((resolve) => setTimeout(()=> resolve('Tarea 2 completada'), 200))
}

Promise.race([tarea1(), tarea2()])
    .then((resultado) => console.log('Primera tarea completada:', resultado))

    