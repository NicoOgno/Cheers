const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

//TODO Check how to use errors with Apollo Client

const CocktailDB = require('../models/cocktail');
const UserDB = require('../models/user');