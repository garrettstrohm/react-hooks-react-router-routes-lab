import React from "react";
import { actors } from "../data";
import ActorCard from "./ActorCard";

function Actors() {

  const actorsList = actors.map(actor => <ActorCard key={actor.name} name={actor.name} movies={actor.movies}/>)

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
