import {suma, getPokemon } from './funciones.js'


const respuesta = suma(10, 45)

console.log(respuesta);

const pokemon = await getPokemon()
if(pokemon.name){
    console.log(`El Pokémon ${pokemon.name} fue encontrado.`);

}else {
    console.log(pokemon);
}


