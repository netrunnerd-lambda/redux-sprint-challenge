import React from 'react';

export const Smurf = ({ name, age, height }) => (
  <section className="smurf">
    <h3>{name}</h3>
    <p>{age} Smurf Years Old</p>
    <p>{height}</p>
  </section>
);
