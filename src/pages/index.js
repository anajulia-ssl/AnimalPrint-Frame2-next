// pages/index.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import componentsStyles from '../styles/index.module.css'; // Importa estilos compartilhados

function Home() {
  return (
    <div className={componentsStyles.body}>
      <Header />
      <div className={componentsStyles.container}>
        <h1>Bem-vindo ao AnimalPrint!</h1>
        <p>Explore a lista de objetos:</p>
        <Link href="/objects" className={componentsStyles.link}>
          <p className={componentsStyles.listItem}>Lista de Objetos</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
