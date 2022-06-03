import React from 'react';
import { gql, useQuery } from '@apollo/client';

import CheersCocktailCard from '../cheersCocktailCard/CheersCocktailCard';
import styles from './cheersCocktailList.module.css';

const FETCH_CHEERS_COCKTAILS_QUERY = gql`
{
  cheersCocktails {
    author
    name
    alcohol
    recipe
    difficulty
  }
}`

export default function CheersCocktailList() {
  const { error, data } = useQuery(FETCH_CHEERS_COCKTAILS_QUERY);
  console.log(data);
  if (!data) {
    return <h1>Drinks are coming!</h1>
  }
  const { cheersCocktails } = data
  const drinkList = cheersCocktails.map(drink => (
    <CheersCocktailCard key={drink.name} drink={drink}/>))
  if (error) console.log(error);
  return (
    <div className={styles.cards}>{drinkList}</div>
  )
}
