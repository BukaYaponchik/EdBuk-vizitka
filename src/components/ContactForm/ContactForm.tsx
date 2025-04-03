import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        agreementChecked: false
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            agreementChecked: e.target.checked
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
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
                                    <a href="mailto:info@edbuk.com">info@edbuk.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h4>Телефон</h4>
                                    <a href="tel:+79991234567">+7 (999) 123-45-67</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">🏢</div>
                                <div>
                                    <h4>Офис</h4>
                                    <p>г. Москва, ул. Технологическая, 42</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://t.me/edbuk" className="social-link">Telegram</a>
                            <a href="https://wa.me/79991234567" className="social-link">WhatsApp</a>
                            <a href="https://vk.com/edbuk" className="social-link">VK</a>
                        </div>
                    </div>

                    <div className="form-container">
                        {formSubmitted ? (
                            <div className="success-message">
                                <h3>Спасибо за вашу заявку!</h3>
                                <p>Мы свяжемся с вами в ближайшее время.</p>
                            </div>
                        ) : (
                            <>
                                <h3>Оставить заявку</h3>
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

                                    <button type="submit" className="cta-button">Отправить заявку</button>
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
