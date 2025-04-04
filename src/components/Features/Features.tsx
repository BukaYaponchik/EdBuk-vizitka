import React from 'react';
import './Features.css';

const Features: React.FC = () => {
    return (
        <>
            <section className="features" id="features">
                <div className="container">
                    <h2>Преимущества нашей платформы</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                🚀
                            </div>
                            <h3>Полный контроль над брендом</h3>
                            <p>Создавайте узнаваемый продукт с уникальным дизайном и гибкой монетизацией: подписки, вебинары, пакеты обучения.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                🎯
                            </div>
                            <h3>Гибкость платформы</h3>
                            <p>Добавляйте тесты, геймификацию, закрытые чаты, прямые продажи без комиссии площадки. Создавайте то, что нужно именно вам.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                📈
                            </div>
                            <h3>Уникальная аудитория</h3>
                            <p>Расширяем ваше присутствие через таргет в соцсетях, email-рассылки и SEO.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                🔒
                            </div>
                            <h3>Безопасность данных</h3>
                            <p>Ваш контент и данные учеников надежно защищены. Храните материалы и информацию в безопасности.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                💫
                            </div>
                            <h3>Персонализация обучения</h3>
                            <p>Создавайте адаптивные курсы и индивидуальные траектории обучения для ваших студентов.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                🌐
                            </div>
                            <h3>Масштабирование</h3>
                            <p>Легко масштабируйте вашу образовательную платформу от десятков до тысяч пользователей.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <div className="container">
                    <h2>Наши услуги</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">💻</div>
                            <h3>Создание онлайн-школы</h3>
                            <p>Разработка полноценной образовательной платформы с вашим уникальным брендом и всеми необходимыми функциями.</p>
                            <ul>
                                <li>Индивидуальный дизайн</li>
                                <li>Личный кабинет пользователя</li>
                                <li>Система тестирования</li>
                                <li>Автоматизация обучения</li>
                            </ul>
                            <div className="service-shine"></div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">💳</div>
                            <h3>Интеграция платежных систем</h3>
                            <p>Настройка приема платежей без комиссии площадки - получайте 100% от стоимости ваших курсов.</p>
                            <ul>
                                <li>Поддержка различных способов оплаты</li>
                                <li>Настройка подписок и рекуррентных платежей</li>
                                <li>Защищенные транзакции</li>
                                <li>Автоматическая отчетность</li>
                            </ul>
                            <div className="service-shine"></div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔧</div>
                            <h3>Техническая поддержка</h3>
                            <p>Круглосуточная поддержка вашей платформы. Мы решаем все технические вопросы, чтобы вы могли сосредоточиться на контенте.</p>
                            <ul>
                                <li>24/7 техническая поддержка</li>
                                <li>Регулярные обновления</li>
                                <li>Резервное копирование данных</li>
                                <li>Мониторинг производительности</li>
                            </ul>
                            <div className="service-shine"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
