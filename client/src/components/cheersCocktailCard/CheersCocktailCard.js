import React from 'react';

import styles from './cheersCocktailCard.module.css';

export default function CheersCocktailCard({drink: { name, alcohol, recipe, difficulty }}) {
  return (
        <div className={styles.card}>
          <h3>{name},</h3> <h4><i>{alcohol}</i></h4>
          <br></br>
          <p>{recipe}</p>
          <br></br>
          <h6>{difficulty}</h6>
        </div>
  );
}
