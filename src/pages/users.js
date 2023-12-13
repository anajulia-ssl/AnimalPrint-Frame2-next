// Importe as bibliotecas necessárias
import React from 'react';
import Link from 'next/link';

function Users({ animals }) {
  return (
    <div>
      <h1> Lista de Animais </h1>
      {animals && animals.map((animal, index) => (
        <Link href='/profile/[id]' as={`/profile/${index}`} key={index}>
          <div>
            <p> {animal.nome} </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
    try {
      // Faça a requisição à nova API
      const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal');
      const data = await res.json();
      console.log("Dados da API:", data);
  
      return {
        props: { animals: data || [] }, // Certifique-se de retornar um array vazio se data for undefined
      };
    } catch (error) {
      console.error("Erro ao obter dados:", error);
      return {
        props: { animals: [] },
      };
    }
  };
  

export default Users;
