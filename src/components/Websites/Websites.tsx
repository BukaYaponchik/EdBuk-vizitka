import React from 'react';
import './Websites.css';

const Websites: React.FC = () => {
    return (
        <>
            <section className="websites-features" id="features">
                <div className="container">
                    <h2>Преимущества наших сайтов</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                🎨
                            </div>
                            <h3>Уникальный дизайн</h3>
                            <p>Создаем современные сайты с индивидуальным дизайном, которые выделяются на фоне конкурентов и запоминаются пользователям.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                📱
                            </div>
                            <h3>Адаптивность</h3>
                            <p>Все сайты адаптированы под мобильные устройства, планшеты и десктоп – идеальное отображение на любом экране.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                ⚡
                            </div>
                            <h3>Высокая производительность</h3>
                            <p>Быстрая загрузка страниц, оптимизация кода и медиафайлов – ваш сайт будет работать молниеносно.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                🔍
                            </div>
                            <h3>SEO-оптимизация</h3>
                            <p>Изначально заботимся о видимости вашего сайта в поисковых системах, что увеличивает органический трафик.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                🔄
                            </div>
                            <h3>Удобная CMS</h3>
                            <p>Интуитивно понятная система управления контентом – обновляйте сайт без знаний программирования.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span className="icon-glow"></span>
                                💼
                            </div>
                            <h3>Бизнес-интеграции</h3>
                            <p>Подключаем CRM, аналитику, онлайн-оплату и другие сервисы для автоматизации бизнес-процессов.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="websites-services" id="services">
                <div className="container">
                    <h2>Типы сайтов</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">🏪</div>
                            <h3>Корпоративные сайты</h3>
                            <p>Солидное представительство вашей компании в интернете с подробной информацией о бизнесе, услугах и преимуществах.</p>
                            <ul>
                                <li>Продуманная структура разделов</li>
                                <li>Полная информация о компании</li>
                                <li>Портфолио и кейсы</li>
                                <li>Интеграция с CRM</li>
                            </ul>
                            <div className="service-shine"></div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🛒</div>
                            <h3>Интернет-магазины</h3>
                            <p>Полнофункциональные онлайн-магазины для продажи товаров и услуг с удобной системой управления.</p>
                            <ul>
                                <li>Каталог с фильтрацией и поиском</li>
                                <li>Система корзины и заказов</li>
                                <li>Интеграция платежных систем</li>
                                <li>Личный кабинет покупателя</li>
                            </ul>
                            <div className="service-shine"></div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📊</div>
                            <h3>Веб-сервисы и порталы</h3>
                            <p>Сложные веб-приложения с расширенным функционалом для решения специфических бизнес-задач.</p>
                            <ul>
                                <li>Сложная бизнес-логика</li>
                                <li>Система уровней доступа</li>
                                <li>Интеграция с API сторонних сервисов</li>
                                <li>Масштабируемая архитектура</li>
                            </ul>
                            <div className="service-shine"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Websites;
