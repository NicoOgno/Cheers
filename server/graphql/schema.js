const { gql } = require('apollo-server-express');

module.exports = gql`
type Query {
  cheersCocktails(author: String): [Cocktail]!
  alcoholCocktails(alcohol: String): [Cocktail]!
  drink(name: String): Cocktail #Este es para buscar un cocktail en específico
  userCocktails(author: String): [Cocktail]# revisar esto IMPORTANTE
}

input RegisterInput {
  username: String!
  password: String!
  confirmPassword: String!
  email: String!
}

input CocktailInput {
  name: String!
  alcohol: String!
  recipe: String!
  difficulty: String
}

type Mutation {
  makeCocktail(cocktailInput: CocktailInput): Cocktail!
  register(registerInput: RegisterInput): User!
  login(username: String!, password: String!): User!
}

type User {
  id: ID!
  email: String!
  token: String!
  username: String!
}

type Cocktail {
  id: ID!
  author: String!
  name: String!
  alcohol: String!
  recipe: String!
  difficulty: String
}
`