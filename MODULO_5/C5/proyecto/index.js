// import 'dotenv/config'

// const env = process.env.ENVIRONMENT
// if(env === 'dev') {
//     console.log('Estamos corriendo en modo de desarrollo')
// }
// if(env === 'prod') {
//     console.log('Estamos corriendo en modo de producción, te cuidado con lo que haces')
// }

const args = process.argv.splice(2)

// const peso = args[0]
// const altura = args[1]

const [ peso, altura ] = args
if(!peso || !altura){
    console.error("Error: Uso: node index.js <peso en kg> <altura en metros>")
    process.exit(1)
}
const pesoKg = parseFloat(peso)
const alturaMetros = parseFloat(altura)
if(isNaN(pesoKg) || isNaN(alturaMetros)){
    console.error("Error: Los valores ingresados deben ser números")
    process.exit(1)
}
const imc = pesoKg / (alturaMetros ** 2)
console.log(imc)
let categoria = ""

if(imc < 18.5){
    categoria = "Bajo Peso"
} else if(imc >= 18.5 && imc <= 24.9){
    categoria = "Peso Normal"
} else if(imc > 24.9 && imc <= 30){
    categoria = "Sobrepeso"
} else {
    categoria = "Obesidad"
}

console.log(`Tu IMC es ${imc.toFixed(2)} y te clasificas como ${categoria}`)
