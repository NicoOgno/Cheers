import React from 'react';

import styles from './userCocktailCard.module.css';

export default function UserCocktailCard({drink: { author, name, alcohol, recipe, difficulty }}) {
  return (
    <div className={styles.card}>
      <h2>{author}</h2>
      <h3>{name},</h3> <h4><i>{alcohol}</i></h4>
      <br></br>
      <p>{recipe}</p>
      <br></br>
      <h6>{difficulty}</h6>
    </div>
  )
}
