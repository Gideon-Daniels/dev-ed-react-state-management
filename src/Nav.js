import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = ({ name, price }) => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="nav">
      <h3>Movies</h3>
      <p>List of Movies : {movies.length} </p>
    </div>
  );
};

export default Nav;
