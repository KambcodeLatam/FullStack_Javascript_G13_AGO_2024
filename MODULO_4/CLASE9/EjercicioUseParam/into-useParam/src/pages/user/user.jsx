import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {

    const param = useParams();

    console.log(param);

    const idParam = param.id;
    

  return (
    <div>
        <h1>
            Componente User
        </h1>
        <h2>
            el parametro que me llego es : {idParam}
        </h2>
    </div>
  )
}

export default User