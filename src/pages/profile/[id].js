import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import componentsStyles from '../../styles/Components.module.css'; // Importa estilos compartilhados

function Profile({ animal }) {
  return (
    <div>
      <Header />
      <div className={componentsStyles.profileContainer}>
        <p className={componentsStyles.profileText}>Nome do animal: {animal.nome}</p>
        <p className={componentsStyles.profileText}>Usuário: {animal.usuario}</p>
        <p className={componentsStyles.profileText}>Descrição: {animal.descricao}</p>
      </div>
      <Footer />
    </div>
  );
}

  export const getStaticProps = async (context) => {
    // Faça a requisição à nova API para obter dados específicos do animal
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal');
    const data = await res.json();
    const animal = data[context.params.id];
  
    return {
      props: { animal },
    };
  };
  
  export async function getStaticPaths() {
    // Faça a requisição à nova API para obter todos os animais
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal');
    const data = await res.json();
    const animals = data;
  
    // Crie os paths para os IDs dos animais
    const paths = animals.map((animal, index) => ({
      params: { id: String(index) },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export default Profile;