const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

//TODO Check how to use errors with Apollo Client

const CocktailDB = require('../models/cocktail');
const UserDB = require('../models/user');
const authMiddleware = require('../middleware/auth');
const { validateRegisterInput, validateLoginInput } = require('../util/validators');
const SECRET = process.env.SECRET_KEY || 'This is not safe';
const cheersCocktails = process.env.CHEERS;

const getADrink = async (_, args) => {
  try {
    if ( args.name.trim() === '') {
      throw new Error('Drink name must not be empty')
    }
    const drink = await CocktailDB.findOne({name: args.name});
  return drink;
  } catch (error) {
    console.log(`${error} in resolvers`);
  }

};

const getAList = async (_, args) => {
  try {
    if (args.alcohol.trim() === '') {
      throw new Error('Alcohol must not be empty')
    }
    const drinkList = await CocktailDB.find({alcohol: args.alcohol});
  return drinkList;
  } catch (error) {
    console.log(`${error} in resolvers`);
  }

};

const getTheCheers = async () => {
  try {
    const drinks = await CocktailDB.find({ author: cheersCocktails });
  return drinks;
  } catch (error) {
    console.log(`${error} in resolvers`);
  }
};

const createCocktail = async (_, { cocktailInput: { name, alcohol, recipe, difficulty }}, context) => {
  try {
    const user = authMiddleware(context);
    const { username } = user;
    console.log(user, 'this is the user');
    const drinkUniqueName = await CocktailDB.findOne({name});

    if (drinkUniqueName) {
      throw new Error ('The drink already exists choose another name')
    }
// TODO check how to get the user ID
    const drink = await CocktailDB.create({ author: username, name, alcohol, recipe, difficulty });
    return drink;
  } catch (error) {
    console.log(`${error} in resolvers`);
  }

};

const registerUser = async (_, { registerInput: { username, email, password, confirmPassword}}) => {
  try {
    const { errors, valid } = validateRegisterInput(username, email, password, confirmPassword);
    if (!valid) throw new UserInputError('Validation error', { errors });

    const userUsername = await UserDB.findOne({username});

    if (userUsername) {
      throw new UserInputError('Username already exists', {
        errors: {
          username: 'This username already exists'
        }
      })
    }

    const userEmail = await UserDB.findOne({email});

    if (userEmail) {
      throw new UserInputError('Check if your email is correct', { errors })
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await UserDB.create({username, email, password: hashPassword})
    const token = jwt.sign({
      id: newUser.id,
      email: newUser.email,
      username: newUser.username
    }, SECRET, { expiresIn: '2h'});
    // TODO erase this console log
console.log(newUser);
    return {
      ...newUser._doc,
      id: newUser._id,
      token
    }
  } catch (error) {
    console.log(`${error}`);
  }
};

const userLogin = async (_, { username, password }) => {
  try {
    const { errors, valid } = validateLoginInput(username, password);

    if (!valid) throw new UserInputError('Validation error', { errors });

    const user = await UserDB.findOne({ username });
    const hashCompare = await bcrypt.compare(password, user.password);

    if (!user || !hashCompare) {
      errors.general = 'Username or Password wrong';
      throw new UserInputError('Username or Password wrong', { errors })
    }
    const token = jwt.sign({
      id: user.id,
      email: user.email,
      username: user.username
    }, SECRET, { expiresIn: '2h'});

    return {
      ...user._doc,
      id: user._id,
      token
    }
  } catch (error) {
    console.log(`${error} in resolvers`);
  }
};

const getUserCocktails = async (_, args) => {
  try {
    if (args.author.trim() === '') {
      throw new Error ('Field author must not be empty')
    }
    const authorCocktails = await CocktailDB.find({ author: args.author });
    if (authorCocktails.length < 1) {
      console.log(authorCocktails);
      throw new Error('No cocktails found', {
        errors: {
          cocktailError: 'Cocktail not found'
        }
      });
    }
    return authorCocktails;
  } catch (error) {
    console.log(`${error} in resolvers.`);
  }
};

const resolvers = {
  Query: {
    cheersCocktails: getTheCheers,
    drink: getADrink,
    alcoholCocktails: getAList,
    userCocktails: getUserCocktails,
  },
  Mutation: {
    makeCocktail: createCocktail,
    register: registerUser,
    login: userLogin,
  }
}

module.exports = resolvers;