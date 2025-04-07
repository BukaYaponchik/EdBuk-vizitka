import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import ContactForm from './components/ContactForm/ContactForm';
import AdminPanel from './components/AdminPanel/AdminPanel';

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Features />
            <ContactForm />
        </>
    );
};

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/admin" element={<AdminPanel />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
