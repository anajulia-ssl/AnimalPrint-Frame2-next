// components/Footer.js
import React from 'react';
import componentsStyles from '../styles/Components.module.css'; // Importa estilos compartilhados

function Footer() {
  return (
    <div className={componentsStyles.footer}>
      <p>Ana Julia Souza, Ana Julia Torezan, Sara Silva</p>
      <p>Frameworks2 - Ricardo Nascimento</p>
    </div>
  );
}

export default Footer;
