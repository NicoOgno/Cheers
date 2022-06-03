import React from 'react';
import { gql, useQuery } from '@apollo/client';

import CheersCocktailCard from '../cheersCocktailCard/CheersCocktailCard';
import styles from './cheersCocktailList.module.css';

const FETCH_CHEERS_COCKTAILS_QUERY = gql`
query CheersCocktails($author: String) {
  cheersCocktails (author: $author) {
    author
    name
    alcohol
    recipe
    difficulty
  }
}`

export default function CheersCocktailList() {
  const { error, data } = useQuery(FETCH_CHEERS_COCKTAILS_QUERY);

  if (!data) {
    return <h1>Drinks are coming!</h1>
  }

  let cheersList = [];
  const { cheersCocktails } = data
  const drinkList = cheersCocktails.map(drink =>
  <CheersCocktailCard key={drink.name} drink={drink}/>
  );

  for (let i = 0; i < drinkList.length; i++) {
    if (drinkList[i].props.drink.author === 'cheersCocktails') cheersList.push(drinkList[i]);
  }
  if (error) console.log(error);

  return (
    <div className={styles.cards}>{cheersList}</div>
  );
}
