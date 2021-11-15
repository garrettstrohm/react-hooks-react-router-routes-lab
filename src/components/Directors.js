import React from "react";
import { directors } from "../data";
import DirectorsCard from "./DirectorsCard";

function Directors() {

  const directorsList = directors.map(director => <DirectorsCard key={director.name} name={director.name} movies={director.movies}/>)

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors;
