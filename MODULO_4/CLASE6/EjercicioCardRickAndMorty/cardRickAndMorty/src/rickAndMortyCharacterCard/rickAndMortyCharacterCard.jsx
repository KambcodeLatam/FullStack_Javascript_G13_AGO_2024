import React, { useEffect, useState } from 'react'
import CharacterCard from '../characterCard/characterCard'

const RickAndMortyCharacterCard = () => {

    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    

    useEffect(() => {
        
        async function apiRick() {
            try {
                const url = 'https://rickandmortyapi.com/api/character/1'
                const response = await fetch(url)
                const data = await response.json()

                setImg(data.image)
                setTitle(data.name)
                setGender(data.gender)
                setStatus(data.status)
            }catch(error){
                console.log(error)
            } 
        }

        apiRick();
    },[])
    

  return (
    <div className='card'>
        <CharacterCard img={img} title={title} gender={gender} status={status} />
    </div>
  )
}

export default RickAndMortyCharacterCard