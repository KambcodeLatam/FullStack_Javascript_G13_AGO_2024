import axios from 'axios'

export const suma = (numero1, numero2) => {
    return numero1 + numero2;
} 

export const getPokemon = async (name = 1) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const pokemon = response.data
        return pokemon
    } catch (error) {
        return { error: 'No se encontró el Pokémon' }
    }  
}