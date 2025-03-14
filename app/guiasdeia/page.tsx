'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function GuiasDeIA() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bem-vindo ao Guia de IA</h1>
      <p style={styles.text}>
        Aqui você aprenderá como utilizar a Inteligência Artificial para potencializar seus estudos, trabalho e gerar renda extra.
      </p>

      {/* Botão de compra (Agora sempre leva para o Kiwify com o link correto) */}
      <button
        style={styles.buyButton}
        onClick={() => window.location.href = 'https://pay.kiwify.com.br/36vnFrK'}
      >
        Comprar Agora
      </button>

      {/* Botão para voltar à página inicial */}
      <button style={styles.backButton} onClick={() => router.push('/')}>
        Voltar para a Página Inicial
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
  backButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
  },
};
