"use client"
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';
import '../configureAmplify';

// Importa tus estilos globales
import '../app/globals.css'; // Asegúrate de que la ruta sea la correcta

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Agrega los elementos head aquí, como el título, metadatos, etc. */}
      </Head>
      <body className={inter.className}>
        <Navbar /> {/* Renderiza la Navbar primero */}
        {children} {/* Luego, renderiza el contenido de los posts */}
      </body>
    </html>
  );
}
