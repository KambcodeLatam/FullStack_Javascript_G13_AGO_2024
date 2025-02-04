import React, { useState } from 'react'
import RickAndMortyCharacterCard from '../../components/rickAndMortyCharacterCard/rickAndMortyCharacterCard'
import Search from '../../components/search/search'

const Characters = () => {

  const [nameSearch, setNameSearch] = useState('');

  return (
    <div>
        <Search nameSearch={nameSearch} setNameSearch={setNameSearch} />
        <RickAndMortyCharacterCard nameSearch={nameSearch} />
    </div>
  )
}

export default Characters