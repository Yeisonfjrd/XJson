import React from 'react';
import { AuthButtonServer } from '@/components/auth-button-server';

export default function Login() {
  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">Inicia sesión en XJson</h1>
      <p className="mb-6 text-sm text-gray-500">Por favor, inicia sesión para continuar</p>
      <AuthButtonServer />
    </section>
  );
}