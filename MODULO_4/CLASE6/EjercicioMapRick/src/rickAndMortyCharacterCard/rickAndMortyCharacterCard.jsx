import React, { useEffect, useState } from 'react'
import CharacterCard from '../characterCard/characterCard'

const RickAndMortyCharacterCard = () => {

    const [characterList, setCharacterList] = useState([])

    console.log(characterList);
    

    useEffect(() => {
        
        async function apiRick() {
            try {
                const url = 'https://rickandmortyapi.com/api/character/'
                const response = await fetch(url)
                const data = await response.json()

                setCharacterList(data.results)
                console.log(data,'data');
                

            }catch(error){
                console.log(error)
            } 
        }
        apiRick();
    },[])
    

  return (
    <div className='card'>
        {
            characterList.map((character) => {
                console.log(character,'character');
                
                return (
                    <CharacterCard
                        img={character.image}
                        title={character.name}
                        status={character.status}
                        gender={character.gender}
                    />
                )
            })
        }
        
    </div>
  )
}

export default RickAndMortyCharacterCard