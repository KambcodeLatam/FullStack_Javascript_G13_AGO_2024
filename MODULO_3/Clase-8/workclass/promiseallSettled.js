// Muestra el resultado de todas las promesas, independientemente si se resuelven o se rechazan.

//Ventajas
// Siempre tenemos resultado de las promesas
// No interrumpe el flujo si quiero manejar errores de forma individual
// útil para el analisis de operaciones mixtas

//Desventajas
// Mayor complejidad para el manejo de los resultados
// No devuelve valores directamente


const promesaExitosa = new Promise((resolve)=> resolve('Exitoso'))
const promesaFallida = new Promise((resolve,reject) => reject("Error"))
const otraPromesa = new Promise((resolve)=> resolve('Otra opción'))

Promise.allSettled([promesaExitosa, promesaFallida, otraPromesa])
    .then((resultado)=> console.log(resultado))

// Ejemplo 

const consulta1 = () => {
    return new Promise((resolve) => setTimeout(()=>{
        resolve('Consulta 1 completada')
    },500))
}
const consulta2 = () => {
    return new Promise((resolve, reject) => setTimeout(()=>{
        reject('Error consulta 2')
    },800))
}

const consulta3 = () => {
    return new Promise((resolve, reject) => setTimeout(()=>{
        reject('Error consulta 3')
    },800))
}

Promise.allSettled([consulta1(), consulta2(), consulta3()])
    .then((resultados) => {
        const exitosas = resultados.filter((resultado) => resultado.status === 'fulfilled');
        const fallidos = resultados.filter((resultado) => resultado.status === 'rejected');

        console.log('Consultas exitosas:' ,exitosas)
        console.log('Consultas fallidas:' ,fallidos)
    })