import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Добавьте логику обработки формы
        console.log(formData);
    };

    return (
        <section className="contact-form">
            <div className="container">
                <h2>Оставьте заявку</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                    </div>
                    <div className="form-group">
            <textarea
                placeholder="Сообщение"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
            />
                    </div>
                    <button type="submit" className="cta-button">Отправить</button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;