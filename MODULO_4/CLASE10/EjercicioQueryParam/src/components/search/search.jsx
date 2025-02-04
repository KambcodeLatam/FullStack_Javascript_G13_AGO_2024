import React from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";

const Search = ({ setNameSearch, nameSearch }) => {
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameSearch) {
      navigate(`/character?character=${nameSearch}`);
    } else {
      navigate("/");
    }
  };

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
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
              placeholder="Search..."
            />
            <button className="btnSearch" type="submit">
              search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
