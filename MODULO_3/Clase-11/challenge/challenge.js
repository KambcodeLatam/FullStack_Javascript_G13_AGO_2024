const axios = require('axios');

const API = 'https://rickandmortyapi.com/api'

let characthers;

async function getCharacters(){
    try {
        const response = await axios.get(`${API}/character`);
        // console.log(response.data.results)

        characthers = await response.data.results.map((character)=>{
            return {
                nombre: character.name,
                especie: character.species,
                episodios: character.episode,
                locacion: character.location,
                orige: character.origin
            }
        });

        // console.log({characthers})
        const humanos = characthers.filter((item)=> item.especie === 'Human');
        // console.log(`Personajes humanos: `, humanos );

        const personajesPorEspecie= characthers.reduce((acumulador, personaje)=> {
            acumulador[personaje.especie] = (acumulador[personaje.especie] || 0 ) + 1;
            
            return acumulador
        },{});

        // console.log({personajesPorEspecie});

        const personajesOrdenados = response.data.results.map((item)=>({
            nombre: item.name,
            episodios: item.episode.length
        })).sort((a, b) => b - a.episodios)

        console.log({personajesOrdenados})

    } catch (error) {
        console.error('Error', error)
    }
}

getCharacters()

