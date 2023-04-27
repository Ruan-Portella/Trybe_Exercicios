import React from 'react';
import ThemeProvider from './context/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import './style.css';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Image />
      <Footer />
    </ThemeProvider>
  );
}

