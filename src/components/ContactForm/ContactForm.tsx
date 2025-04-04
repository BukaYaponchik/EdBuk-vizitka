import React, { useState } from 'react';
import './ContactForm.css';
import { api } from '../../api/api';

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    agreementChecked: boolean;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        agreementChecked: false
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, agreementChecked: e.target.checked }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            await api.sendRequest(formData);

            setFormSubmitted(true);
            setTimeout(() => {
                setFormSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: '',
                    agreementChecked: false
                });
            }, 5000);
        } catch (err) {
            setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="contact-form" id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Свяжитесь с нами</h2>
                        <p>Готовы создать вашу уникальную образовательную платформу? Оставьте заявку, и мы свяжемся с вами для обсуждения деталей.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:bukovtsov03@gmail.com">bukovtsov03@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h4>Телефон</h4>
                                    <a href="tel:+79066078097">+7 (906) 607-80-97</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">🏢</div>
                                <div>
                                    <h4>Офис</h4>
                                    <p>г. Москва, пр. Маршала Тухачевского, 18</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://t.me/@bukovysovmaks" className="social-link">
                                <span className="social-link-text">Telegram</span>
                            </a>
                            <a href="https://wa.me/79066078097" className="social-link">
                                <span className="social-link-text">WhatsApp</span>
                            </a>
                            <a href="https://vk.com/id387175481" className="social-link">
                                <span className="social-link-text">VK</span>
                            </a>
                        </div>
                    </div>

                    <div className="form-container">
                        <div className="form-glow-effect"></div>
                        {formSubmitted ? (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <h3>Спасибо за вашу заявку!</h3>
                                <p>Мы свяжемся с вами в ближайшее время.</p>
                            </div>
                        ) : (
                            <>
                                <h3>Оставить заявку</h3>
                                {error && <div className="error-message">{error}</div>}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Ваше имя</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Введите ваше имя"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="example@mail.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">Телефон</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="+7 (___) ___-__-__"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company">Название компании</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            placeholder="Название вашей компании (если есть)"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Сообщение</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Расскажите кратко о вашем проекте"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group checkbox-group">
                                        <input
                                            type="checkbox"
                                            id="agreement"
                                            checked={formData.agreementChecked}
                                            onChange={handleCheckboxChange}
                                            required
                                        />
                                        <label htmlFor="agreement">Я согласен с политикой конфиденциальности</label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="cta-button"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span>Отправка...</span>
                                        ) : (
                                            <>
                                                <span>Отправить заявку</span>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="logo">EdBuk</div>
                        <p>Создайте свою уникальную образовательную платформу</p>
                        <p className="copyright">© 2025 EdBuk. Все права защищены.</p>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default ContactForm;
