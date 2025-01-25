import React from 'react'
import './characterCard.css'
import Image from '../image/image'
import Title from '../title/title'
import Detail from '../detail/detail'

const CharacterCard = ({ img, title, status, gender }) => {
    
  return (
    <div className='cardArchitecture'>
        <div className='image'>
            <Image img={img} />
        </div>
        <div className='circle'>
            {status}
        </div>
        <div className='content'>
            <div className='title'>
                <Title title={title} />
            </div>
            <div className='detail'>
                <Detail status={status} gender={gender} />
            </div>
        </div>

    </div>
  )
}

export default CharacterCard