'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Você Está Prestes a Descobrir Como a <span style={styles.highlight}>Inteligência Artificial</span> Pode Transformar Seu Mundo! 🚀
      </h1>
      <p style={styles.text}>
        Explore como a IA pode acelerar seus estudos, melhorar seu trabalho e até gerar novas fontes de renda!
      </p>

      <button style={styles.buyButton} onClick={() => router.push('/guiasdeia')}>
        Como usar IA para trabalhar, estudar ou até ganhar dinheiro
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#121212',
    color: '#fff',
    textAlign: 'center' as 'center',
    padding: '20px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  highlight: {
    color: '#1e90ff',
  },
  text: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    lineHeight: '1.5',
  },
  buyButton: {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#0a2a66',
    color: 'white',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
  },
};
