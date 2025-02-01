import React from 'react'

const Image = ({ urlImage }) => {
    
  return (
    <div>
        <img src={urlImage} alt='imagen' style={{ width: '50%', height: 'auto' }} />
    </div>
  )
}

export default Image