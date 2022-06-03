import React from 'react';
import { useNavigate } from 'react-router-dom';
import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import LiquorRoundedIcon from '@mui/icons-material/LiquorRounded';
import DeckRoundedIcon from '@mui/icons-material/DeckRounded';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from './navbar.module.css'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#4B1FA2',
      darker: '#053e85',
    },
    secondary: {
      main:'#410039',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className={styles.navigation}>
      <ThemeProvider theme={theme}>
      <Button color='primary'>
      <span className={styles.brandName} onClick={()=> {navigate('/')}}>Cheers</span>
      </Button>
      <div
        className={styles.navigationMenu}>
        <ul>
          <li>
            <Button color='primary' onClick={() => {navigate('/');}}>
              <DeckRoundedIcon/><i>Home</i>
            </Button>
          </li>
          <li>
            <Button color='primary' onClick={() => {navigate('/login');}}>
              <SportsBarRoundedIcon/><i>Login</i>
              </Button>
          </li>
          <li>
            <Button color='primary' onClick={() => {navigate('/register');}}>
              <LiquorRoundedIcon/><i>Register</i>
              </Button>
          </li>
        </ul>
      </div>
      </ThemeProvider>
    </nav>
  );
}
