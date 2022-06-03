import React from 'react';
import { gql, useQuery } from '@apollo/client';

import UserCocktailCard from '../userCocktailCard/UserCocktailCard';
import styles from './userList.module.css';

const FETCH_USER_COCKTAILS_QUERY = gql`
query UserCocktails($author: String!) {
  userCocktails(author: $author) {
    name
    alcohol
    recipe
    author
  }
}`

export default function UserList() {
  const { error, data } = useQuery(FETCH_USER_COCKTAILS_QUERY);

  if (!data) {
    return <h1>Make your Drinks!</h1>
  }

  const { userCocktails } = data
  const drinkList = userCocktails.map(drink =>
  <UserCocktailCard key={drink.name} drink={drink}/>
  );

  if (error) console.log(error);

  return (
    <div className={styles.cards}>{drinkList}</div>
  );
}