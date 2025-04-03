import React from 'react';
import './Features.css';

const Features: React.FC = () => {
    return (
        <section className="features">
            <div className="container">
                <h2>Наши преимущества</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>🚀 Полный контроль</h3>
                        <p>Уникальный дизайн и монетизация: подписки, вебинары, пакеты</p>
                    </div>
                    <div className="feature-card">
                        <h3>🎯 Гибкость платформы</h3>
                        <p>Тесты, геймификация, закрытые чаты, прямые продажи без комиссии</p>
                    </div>
                    <div className="feature-card">
                        <h3>📈 Уникальная аудитория</h3>
                        <p>Привлекаем новую аудиторию через таргет, email-рассылки и SEO</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;