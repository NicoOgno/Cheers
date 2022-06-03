import React from 'react';

import styles from './cheersCocktailCard.module.css';

export default function CheersCocktailCard({drink: { name, alcohol, recipe, difficulty }}) {
  return (
        <div className={styles.card}>
          <h3>{name}, <h4><i>{alcohol}</i></h4></h3>
          <br></br><br></br>
          <p>{recipe}</p>
          <br></br><br></br>
          <h6>{difficulty}</h6>
        </div>
  );
}
