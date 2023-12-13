import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import componentsStyles from '../styles/Components.module.css'; // Importa estilos compartilhados

function Objects({ objects }) {
  return (
    <div className={componentsStyles.body}>
      <Header />
      <div className={componentsStyles.container}>
        <h1>Lista de Objetos</h1>
        {objects.map((object, index) => (
          <Link href={`/profile/${index}`} key={index}>
            <div className={componentsStyles.listItem}>
              <p>{object.nome}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  // Faça a requisição à API para obter todos os objetos
  const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal');
  const data = await res.json();
  const objects = data;

  // Retorna os objetos como props
  return {
    props: { objects },
  };
};

export default Objects;
