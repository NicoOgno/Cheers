import React from 'react'

import styles from './navbar.module.css'


export default function Navbar() {
  return (
    <nav className={styles.navigation}>
      <a href="/home" className={styles.brandName}>
        Cheers
      </a>
      <div
        className={styles.navigationMenu}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
