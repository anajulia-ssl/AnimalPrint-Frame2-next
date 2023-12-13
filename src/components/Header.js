// components/Header.js
import React from 'react';
import Link from 'next/link';
import componentsStyles from '../styles/Components.module.css'; // Importa estilos compartilhados

function Header() {
  return (
    <div className={componentsStyles.header}>
      <div className={componentsStyles.homeLink}>
        <Link href="/">
          <h2>Home</h2>
        </Link>
      </div>
      <h1>AnimalPrint</h1>
    </div>
  );
}

export default Header;
