// const { Schema } = require('./index');
const mongoose = require('./index');

const CocktailSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  alcohol: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
},
{
  timestamps: true,
  versionKey: false,
});

const CocktailDB = mongoose.model('cocktail', CocktailSchema);

module.exports = CocktailDB;