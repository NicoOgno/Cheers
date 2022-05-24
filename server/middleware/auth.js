const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const SECRET = process.env.SECRET_KEY || 'This is not safe';

const authMiddleware = ({ req }) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      const user = jwt.verify(token, SECRET);
      return user;
    } catch (error) {
      throw new AuthenticationError('Token not valid');
    }
  }
  throw new Error('Unauthorized: Error 401');
};

module.exports = authMiddleware;