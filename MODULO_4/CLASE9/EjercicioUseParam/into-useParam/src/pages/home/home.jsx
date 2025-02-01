import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const idUser = 10;

  return (
    <div>
      <h1>Componente Home</h1>
      <ul>
        <li>
          <Link to={`/user/${idUser}`}>
            Usuário
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
