import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content container">
                <div className="logo">EdBuk</div>
                <nav className="nav-menu">
                    <a href="#features">Преимущества</a>
                    <a href="#services">Услуги</a>
                    <a href="#contact">Контакты</a>
                </nav>
            </div>
            <div className="hero container">
                <div className="hero-text">
                    <h1>Создайте свою онлайн-школу с уникальным брендом</h1>
                    <p className="tagline">Полный контроль над брендом, функционалом и монетизацией вашей образовательной платформы</p>
                    <a href="#contact" className="cta-button">Оставить заявку</a>
                </div>
                <div className="hero-image">
                    <div className="platform-preview"></div>
                </div>
            </div>
            <div className="contacts container">
                <p>Email: <a href="mailto:info@edbuk.com">info@edbuk.com</a></p>
                <p>Телефон: <a href="tel:+79991234567">+7 (999) 123-45-67</a></p>
            </div>
        </header>
    );
};

export default Header;
