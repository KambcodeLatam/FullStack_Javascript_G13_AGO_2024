import React, { useEffect, useState } from 'react'
import CharacterCard from '../characterCard/characterCard';

const RickAndMortyCharacterCard = ({nameSearch}) => {

  console.log(nameSearch,'nameSearch');

    /* variable, funcion que modifica la variable, valor inicial */
  const [character, setCharacter] = useState([]);  

  useEffect(() => {
    
  async function apiRick() {
    const url = 'https://rickandmortyapi.com/api/character/';

    const response = await fetch(url);
    const data = await response.json();
   
    setCharacter(data.results);
  }

  apiRick();
    
  }, [])

  return (
    <div>
        {
          character.filter((res) => {
            return res.name.toLowerCase() === ''
            ? res
            : res.name.toLowerCase().includes(nameSearch)
          }).map((character) => {
            return <CharacterCard key={character.id} name={character.name} status={character.status} gender={character.gender} image={character.image} />
          })
        }
    </div>
  )
}

export default RickAndMortyCharacterCard