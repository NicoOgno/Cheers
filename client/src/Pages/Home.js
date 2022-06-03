import React from 'react'

import CheersCocktailList from '../components/cheersCocktailList/CheersCocktailList';
import UserList from '../components/userList/UserList';

export default function Home() {
  return (
    <>
      <CheersCocktailList />
      <UserList />
    </>
  );
}
