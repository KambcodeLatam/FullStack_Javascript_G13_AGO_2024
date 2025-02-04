import React from 'react'
import Image from '../image/image'
import Titulo from '../titulo/titulo'
import Detalle from '../detalle/detalle'
import './characterCard.css'

const CharacterCard = ({image, name, status, gender}) => {
  return (
    <div className='card'>
      <Image urlImage={image}/>
      <Titulo nombre={name}/>
      <Detalle status={status} gender={gender}/>
    </div>
  )
}

export default CharacterCard