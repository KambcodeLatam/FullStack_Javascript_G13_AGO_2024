const axios = require('axios');

const API = "https://pokeapi.co/api/v2/pokemon";
// https://pokeapi.co/api/v2/pokemon/bulbasaur

let pokemons;

// async function getPokemons(){}

const getPokemons = async () => {
    try {
        const response = await axios.get(API);
        const arrayPromise = response.data.results.map(async(pokemon)=> {
            const  dataPokemon = await axios.get(`${API}/${pokemon.name}`);
            console.log(dataPokemon)
            return {
                ...pokemon,
                name: pokemon.name.toUpperCase(),
                ...dataPokemon.data
            }

        })

        pokemons = await Promise.all(arrayPromise)
    //   console.log(pokemons)
        // return pokemons;

    } catch (error) {
        console.error('Error', error)
    }
}
getPokemons()

