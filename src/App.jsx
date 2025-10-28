import React from 'react';
import ReactDOM from 'react-dom/client';
import KahveUrunu from './kahveurunu.jsx';

// Burası Menü Sayfası (Ebeveyn)
function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' , backgroundColor: '#000000' , textAlign: 'center'}}>
      <h1>Kahve Menümüz</h1>
      
      {/* KahveUrunu bileşenine 'isim' ve 'fiyat' adında 
        iki adet prop gönderiyoruz.
      */}
      <KahveUrunu isim="Americano" fiyat="75" />
      <KahveUrunu isim="Latte" fiyat="85" />
      <KahveUrunu isim="Espresso" fiyat="65" />
    </div>
  );
}

export default App;

