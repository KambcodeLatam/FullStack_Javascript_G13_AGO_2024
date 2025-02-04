import React, { useEffect, useState } from "react";
import CharacterCard from "../characterCard/characterCard";
import { useLocation } from "react-router-dom";

const RickAndMortyCharacterCard = ({ nameSearch }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  /* variable, funcion que modifica la variable, valor inicial */
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const apiRick = async () => {
      console.log(nameSearch,'nameSearch');
      const characterQuery = queryParams.get("character");
      const url = characterQuery
        ? `https://rickandmortyapi.com/api/character/?name=${characterQuery}`
        : "https://rickandmortyapi.com/api/character/";

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data?.results) {
          setCharacter(data.results);
        } else {
          setCharacter([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    apiRick();
  }, [location.search]);

  return (
    <div>
      {character
        .filter((res) => {
          return res.name.toLowerCase() === ""
            ? res
            : res.name.toLowerCase().includes(nameSearch);
        })
        .map((character) => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              status={character.status}
              gender={character.gender}
              image={character.image}
            />
          );
        })}
    </div>
  );
};

export default RickAndMortyCharacterCard;
