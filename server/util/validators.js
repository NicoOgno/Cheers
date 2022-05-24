const usernameRegEx = /^[0-9a-zA-Z_]{3,16}$/;
const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateRegisterInput = (username, email, password, confirmPassword) => {
  const errors = {};
  if (!username.match(usernameRegEx)) {
    errors.username = 'Username must be between 3 to 16 characters, they can be alpha numeric including the underscore sign';
  }
  if(!email.match(mailformat)) {
    errors.email = 'Not valid email address';
  }
  if (!password.match(passwordRegx)) {
    errors.password = 'Password should be between 6 and 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
};

const validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Username must not be empty';
  }
  if (password.trim() === '') {
    errors.password = 'Password must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
};


module.exports = {
  validateRegisterInput,
  validateLoginInput,
};