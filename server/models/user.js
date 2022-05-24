const mongoose = require('./index');

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
},
{
  timestamps: true,
  versionKey: false,
});

const UserDB = mongoose.model('user', UserSchema);

module.exports = UserDB;