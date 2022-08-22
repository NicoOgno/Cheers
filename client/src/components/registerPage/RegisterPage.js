import { Button } from '@mui/material';
import React from 'react';

import styles from './registerPage.module.css';

const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
  email:''
}

export default function RegisterPage() {

  return (
    <div>
      <form className={styles.registerForm}>
        <input
          className={styles.registerInput}
          placeholder='username'
          name='username'
        />
        <input
          className={styles.registerInput}
          placeholder='email'
          name='email'
        />
        <input
          className={styles.registerInput}
          placeholder='password'
          name='password'
        />
        <input
          className={styles.registerInput}
          placeholder='confirmPassword'
          name='confirmPassword'
        />
        <Button type='submit' className={styles.registerButton} variant='contained'>Submit</Button>
      </form>
    </div>
  );
}
