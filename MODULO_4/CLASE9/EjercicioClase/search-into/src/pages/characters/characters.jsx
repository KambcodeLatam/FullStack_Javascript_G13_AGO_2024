import React, { useState } from 'react'
import RickAndMortyCharacterCard from '../../components/rickAndMortyCharacterCard/rickAndMortyCharacterCard'
import Search from '../../components/search/search'

const Characters = () => {

  const [nameSearch, setNameSearch] = useState('');

  return (
    <div>
        <Search setNameSearch={setNameSearch} />
        <RickAndMortyCharacterCard nameSearch={nameSearch} />
    </div>
  )
}

export default Characters