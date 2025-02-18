// import { 
//     createReadStream, 
//     createWriteStream, 
//     readFile, 
//     writeFile, 
//     appendFile, 
//     unlink 
// } from 'fs'
import { readFile } from 'fs/promises'
// Readable streams == podemos acceder a la informacion y verla o leerla
// writable streams == escribir en un archivo
// duplex streams == lectura y escritura simultanea
// transform streams == transformar la informacion antes de escribirla

// const buffer = Buffer.from('hola mundo')
// console.log(buffer)
// console.log(buffer.toString())

// const stream = createReadStream('./text.txt')

// stream.on('data', (chunk) => {
//     console.log("-------Nuevo Dato---------")
//     console.log(chunk)
//     console.log(chunk.toString())
// })
// stream.on('end', () => {
//     console.log("Fin del archivo")
// })

// const stream = createWriteStream('./newText.txt')
// stream.write('Hola mundo\n')
// stream.write('Adios mundo\n')
// stream.end()

// readFile('./newText.txt', 'utf-8', (error, data) => {
//     if(error){
//         console.log("Error al leer el archivo")
//         console.error(error)
//         return;
//     }
//     console.log(data)
// })

// writeFile('./newText2.txt', 'Hola Mundo desde js', 'utf-8', (error) => {
//     if(error){
//         console.log("Error al escribir el archivo")
//         console.error(error)
//         return;
//     }
//     console.log("Archivo escrito exitosamente")
// })
// console.log("Fin del programa")

// appendFile('./newText2.txt', '\nEditado desde node 2', 'utf-8', (error) => {
//     if(error){
//         console.log("Error al escribir el archivo")
//         console.error(error)
//         return;
//     }

//     console.log("Archivo escrito exitosamente")
// })

// unlink('./newText2.txt', (error) => {
//     if(error){
//         console.log("Error al eliminar el archivo")
//         console.error(error)
//         return;
//     }
//     console.log("Archivo eliminado exitosamente")
// })

// CRUD = CREATE, READ, UPDATE,   DELETE

const read = await readFile('./newText.txt', 'utf-8')
readFile('./text.txt').then((data) => console.log(data.toString()))
console.log(read)

