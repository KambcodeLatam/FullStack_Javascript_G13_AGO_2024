import { writeFile, unlink } from 'fs/promises'

const writeToFile = async (filename, data) => {
    try {
        await writeFile(filename, data)
        return 'Archivo creado exitosamente'
    } catch(error){
        console.log(error)
        return 'Error al crear el archivo'
    }
}
// console.log(await writeToFile('ejemplo.txt', "esto es un ejemplo"))

const deleteFile = async (filename) => {
    try {
        await unlink(filename)
        return 'Archivo eliminado exitosamente'
    }catch(error){
        console.log(error)
        return 'Error al eliminar el archivo'
    }

}

console.log(await deleteFile('ejemplo.txt'))

// import axios from 'axios'

// const promesa1 = new Promise(resolve => resolve('dato 1') )
// const promesa2 = new Promise(resolve => resolve('dato 2') )
// const promesa3 = new Promise(resolve => resolve('dato 3') )
// const promesa4 = new Promise(resolve => resolve('dato 4') )

// Promise.race([promesa1, promesa2, promesa3, promesa4])
//     .then(datos => console.log(datos))


// const pokeapi = fetch('https://pokeapi.co/api/v2/pokemon/1')
//     .then(response => response.json())
//     .then(data => console.log(data.name))

// const pokeapi2 = await fetch('https://pokeapi.co/api/v2/pokemon/2')
// const pokemonInfo = await pokeapi2.json()
// console.log(pokemonInfo.name)

// const pokeapi3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
// console.log(pokeapi3.data.name)


// const verificarNumero = (numero) => {
//     return new Promise((resolve, reject) => {
//         if(numero % 2 === 0){
//             resolve('Es un número par')
//         }else{
//             reject(new Error('Es un número impar'))
//         }
//     })
// }
// verificarNumero(16)
//     .then(result => console.log(result))
//     .catch(error => console.error("Error", error.message))
// try {
//     const numeroPar = await verificarNumero(17)
//     console.log(numeroPar)   
// } catch (error) {
//     console.error("Error", error.message)
// }


// const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([
//             { nombre: 'Juan', edad: 25 },
//             { nombre: 'Maria', edad: 30 }
//         ])
//     }, 1000)
// })
// data.then(data => console.log(data))



// const function1 =  function async(err, sales_month3) {
//     if (!err) {
//       var totals = {
//         auto: sales_month_1.auto + sales_month2.auto + sales_month3.auto,
//         salud: sales_month_1.salud + sales_month2.salud + sales_month3.salud,
//         vida: sales_month_1.vida + sales_month2.vida + sales_month3.vida,
//         hogar: sales_month_1.hogar + sales_month2.hogar + sales_month3.hogar
//       };
//       cb({ months: [sales_month_1, sales_month2, sales_month3], totals: totals });
//     } else {
//       throw err;
//     }
//   }
//   const function2 = function(err, sales_month2) {
//     if (!err)
//       DashboardService.getSalesMonthPF(user, months[2], year, 
//     );
//     else
//       throw err;
//   }
// function getSalesTrimestrePF(user, trimestre, year) {
//     return new Promise(function(cb) {
//       var emptyData = { auto: 0, salud: 0, vida: 0, hogar: 0 };
//       var months = DashboardService.getMonthsTrimestre(trimestre);
//       DashboardService.getSalesMonthPF(user, months[0], year, function(err, sales_month_1) {
//         if (!err)
//           DashboardService.getSalesMonthPF(user, months[1], year, 
//             function2()
//         );
//           await function1()
//         else
//           throw err;
//       });
//     });
//   }
  

// const pokemon = async () => {
//     return await axios.get('https://pokeapi.co/api/v2/pokemon/1')
// }
// const firstPokemon = await pokemon()
// let pokemon2
// pokemon().then((dataPokemon) => {
//     console.log('-------------------')
//     console.log(dataPokemon.data.name)
//     console.log('-------------------')
//     pokemon2 = dataPokemon
//     console.log(pokemon2)
// })
// console.log(pokemon2)

// console.log(pokemon())
// console.log(1)
// console.log(firstPokemon.data.name)
// console.log(1)
