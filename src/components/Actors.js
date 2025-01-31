import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) =>
      <div className="actor" key={index}>
        <p>{actor.name}</p>
        <p>{actor.movies}</p>
      </div>
      )}
    </div>
  );
};

export default Actors;
