import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/characterCard/characterCard";
import { useLocation, useNavigate } from "react-router-dom";
import "./searchParam.css";

const SearchParam = () => {
  const [nameSearch, setNameSearch] = useState([]);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?character=${query}`);
    } else {
      navigate("/");
    }
  };
  
  useEffect(() => {
    const apiRick = async () => {
      const characterQuery = queryParams.get("character");
      const url = characterQuery
        ? `https://rickandmortyapi.com/api/character/?name=${characterQuery}`
        : "https://rickandmortyapi.com/api/character/";

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data?.results) {
          setNameSearch(data.results);
        } else {
          setNameSearch([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    apiRick();
  }, [location.search]);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="box">
          <div className="container-1">
            <span className="icon">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="search"
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
            <button className="btnSearch" type="submit">
              search
            </button>
          </div>
        </div>
      </form>
      {nameSearch.map((character) => {
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

export default SearchParam;
