import React from 'react';

export const Smurf = ({ name, age, height, onClick }) => (
  <section className="smurf">
    <h3>{name}</h3>
    <p>{age} Smurf Years Old</p>
    <p>{height}</p>
    <div className="smurfActs">
      <button name="DELETE" onClick={onClick}>
        DELETE
      </button>
    </div>
  </section>
);
