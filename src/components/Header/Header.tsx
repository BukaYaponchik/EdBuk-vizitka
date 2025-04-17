import React from 'react';
import './Header.css';

interface HeaderProps {
    isWebsitesPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isWebsitesPage = false }) => {
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
                    {isWebsitesPage ? (
                        <>
                            <h1>Создаем <span>современные сайты</span> любой сложности</h1>
                            <p className="tagline">Профессиональная разработка корпоративных сайтов, интернет-магазинов и веб-сервисов под ключ</p>
                        </>
                    ) : (
                        <>
                            <h1>Создайте свою <span>онлайн-школу</span> с уникальным брендом</h1>
                            <p className="tagline">Полный контроль над брендом, функционалом и монетизацией вашей образовательной платформы</p>
                        </>
                    )}
                    <a href="#contact" className="cta-button">Оставить заявку</a>
                </div>
                <div className="hero-image">
                    {isWebsitesPage ? (
                        <div className="website-preview">
                            <div className="website-mockup">
                                <div className="mockup-header">
                                    <div className="mockup-logo">EdBuk Web</div>
                                    <div className="mockup-nav">
                                        <div className="nav-item active">Главная</div>
                                        <div className="nav-item">Услуги</div>
                                        <div className="nav-item">Портфолио</div>
                                    </div>
                                    <div className="mockup-burger"></div>
                                </div>
                                <div className="mockup-content">
                                    <div className="mockup-hero">
                                        <div className="mockup-hero-text"></div>
                                        <div className="mockup-hero-img"></div>
                                    </div>
                                    <div className="mockup-cards">
                                        <div className="mockup-card"></div>
                                        <div className="mockup-card"></div>
                                        <div className="mockup-card"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="glow-effects"></div>
                        </div>
                    ) : (
                        <div className="platform-preview">
                            <div className="platform-mockup">
                                <div className="mockup-header">
                                    <div className="mockup-logo">EdBuk Studio</div>
                                    <div className="mockup-nav">
                                        <div className="nav-item active">Курсы</div>
                                        <div className="nav-item">Статистика</div>
                                        <div className="nav-item">Настройки</div>
                                    </div>
                                    <div className="mockup-user"></div>
                                </div>
                                <div className="mockup-content">
                                    <div className="mockup-sidebar">
                                        <div className="sidebar-item active">Все курсы</div>
                                        <div className="sidebar-item">Активные</div>
                                        <div className="sidebar-item">Архив</div>
                                        <div className="sidebar-item">Аналитика</div>
                                    </div>
                                    <div className="mockup-main">
                                        <div className="mockup-card"></div>
                                        <div className="mockup-card"></div>
                                        <div className="mockup-card"></div>
                                        <div className="mockup-card"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="glow-effects"></div>
                        </div>
                    )}
                </div>
            </div>
            <div className="contacts container">
                <p>Email: <a href="mailto:bukovtsov03@gmail.com">bukovtsov03@gmail.com</a></p>
                <p>Телефон: <a href="tel:+79066078097">+7 (906) 607-80-97</a></p>
            </div>
        </header>
    );
};

export default Header;
