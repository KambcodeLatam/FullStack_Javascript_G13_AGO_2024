// .reduce() es un metodo de los arrays que se usa para reducir o transformar todos los elementos
// de un array a un único valor

//Sintaxis
// array.reduce((acumulador, elementoActual)=>{
//    Logica 
// }, valorInicial)

//acumulador: Guarda el resultado que va acumulando
//elementoActual: Corresponde a cada elemento que va dentro del array.
//valorInicial(opcional): el valor inicial del acumulador. (Si no indicamos cual es el
// valor inicial, toma el primer elemento del array)

const numeros = [ 1, 5 ,10, 8, 6];

const suma = numeros.reduce((acumulador, numeroActual)=> {
    return acumulador + numeroActual
})

console.log(suma)

const valorMaximo = numeros.reduce((acumulador, numeroActual)=> {
    return Math.max(acumulador, numeroActual)
})

console.log({ valorMaximo });


const palabras = ['Hola', 'desde', 'javascript'];

const frase = palabras.reduce((acumulador, palabraActual) => {
    return acumulador + ' ' + palabraActual
});

console.log(frase)


const letras = ['a', 'b', 'c', 'c', 'a', 'c', 'a', 'b', 'c', 'a','c', 'a'];

const conteoDeLetras = letras.reduce((acumulador, letraActual)=> {

    if(!acumulador[letraActual]){
        acumulador[letraActual] = 1
    }else{
        acumulador[letraActual]++
    }
    return acumulador
},{})

console.log(conteoDeLetras)



