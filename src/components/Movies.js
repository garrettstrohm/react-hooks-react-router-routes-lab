import React from "react";
import { movies } from "../data";
import MovieCards from "./MovieCards"

function Movies() {

  const moviesList = movies.map(movie => <MovieCards key={movie.title} title={movie.title} time={movie.time} genres={movie.genres}/>)
    
  
  return (
  <div>
    <h1>Movies Page</h1>
    {moviesList}
  </div>
  );
}

export default Movies;
