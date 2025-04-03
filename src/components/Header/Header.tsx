import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>Ваш Уникальный Бренд</h1>
                <p className="tagline">Создайте узнаваемую платформу с полным контролем над монетизацией</p>
                <div className="contacts">
                    <p>Email: contact@yourbrand.com</p>
                    <p>Телефон: +7 (999) 123-45-67</p>
                </div>
            </div>
        </header>
    );
};

export default Header;