import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import HomePage from './components/HomePage';
import WebsitesPage from './components/WebsitesPage';
import AdminPanel from './components/AdminPanel/AdminPanel';

// Компонент для перенаправления на основе параметров URL
const RedirectHandler: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Получаем текущие параметры URL
        const queryParams = new URLSearchParams(location.search);
        const service = queryParams.get('service');

        if (service) {
            // Перенаправляем на нужную страницу в зависимости от параметра
            if (service.toLowerCase().includes('сайт') ||
                service.toLowerCase().includes('website') ||
                service.toLowerCase().includes('landing') ||
                service.toLowerCase().includes('shop')) {
                navigate('/websites');
            } else if (service.toLowerCase().includes('курс') ||
                service.toLowerCase().includes('школ') ||
                service.toLowerCase().includes('обучен') ||
                service.toLowerCase().includes('course') ||
                service.toLowerCase().includes('learn')) {
                navigate('/');
            }
        }
    }, [location.search, navigate]);

    return null;
};

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/websites" element={<WebsitesPage />} />
                        <Route path="/admin" element={<AdminPanel />} />
                    </Routes>
                    <RedirectHandler />
                </div>
            </Router>
        </HelmetProvider>
    );
};

export default App;
