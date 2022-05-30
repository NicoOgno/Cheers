const db = require('./models/index');
const Cocktails = require('./models/cocktail');
const dotenv = require('dotenv').config();

const adminCocktails = [
  {
    author: 'cheers',
    name: 'Gin Tonic',
    alcohol: 'Gin',
    recipe: 'Gin, tonic, ice and lemon peel',
    difficulty: 'moderate'
  },
  {
    author: 'cheers',
    name: 'Pisco Sour',
    alcohol: 'Pisco',
    recipe: '3 of pisco, 1 of sugar syrup and 1 of lemon',
    difficulty: 'difficult'
  },
  {
    author: 'cheers',
    name: 'Margarita',
    alcohol: 'Tequila',
    recipe: '2 of tequila, 1 of triple sec, 1 of lemon, salt and ice',
    difficulty: 'moderate'
  },
  {
    author: 'cheers',
    name: 'Lemmy',
    alcohol: 'Jack Daniels',
    recipe: '2 ounces of Jack Daniels, 10 ounces of coke and a bit of angostura bitters',
    difficulty: 'moderate'
  }
];

db
  .connect(process.env.DBURL)
  .then(() => {})
  .then(async () => {
    for (let i = 0; i < adminCocktails.length; i++) {
      await Cocktails.create(adminCocktails[i]);
    }
  })
  .then(() => { console.log('Database has been populated') });