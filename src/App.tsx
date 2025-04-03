import React from 'react';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <Features />
        <ContactForm />
      </div>
  );
}

export default App;