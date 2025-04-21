import React from 'react';
import Header from './Header/Header';
import Websites from './Websites/Websites';
import ContactForm from './ContactForm/ContactForm';
import SEO from './SEO/SEO';

const WebsitesPage: React.FC = () => {
    // Структурированные данные для веб-разработки (Schema.org)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "EdBuk - Разработка сайтов",
        "description": "Создание современных сайтов любой сложности: корпоративные сайты, интернет-магазины, веб-сервисы и порталы",
        "url": "https://edbuk.ru/websites",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://edbuk.ru/websites?search={search_term_string}",
            "query-input": "required name=search_term_string"
        },
        "provider": {
            "@type": "Organization",
            "name": "EdBuk",
            "logo": "https://edbuk.ru/logo.svg",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Москва",
                "streetAddress": "пр. Маршала Тухачевского, 18"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+79066078097",
                "email": "bukovtsov03@gmail.com",
                "contactType": "Customer service"
            }
        },
        "offers": [
            {
                "@type": "Offer",
                "name": "Корпоративные сайты",
                "description": "Солидное представительство вашей компании в интернете с подробной информацией о бизнесе, услугах и преимуществах"
            },
            {
                "@type": "Offer",
                "name": "Интернет-магазины",
                "description": "Полнофункциональные онлайн-магазины для продажи товаров и услуг с удобной системой управления"
            },
            {
                "@type": "Offer",
                "name": "Веб-сервисы и порталы",
                "description": "Сложные веб-приложения с расширенным функционалом для решения специфических бизнес-задач"
            }
        ]
    };

    return (
        <>
            <SEO
                title="Разработка сайтов любой сложности"
                description="Создание современных сайтов с уникальным дизайном и высокой производительностью. Корпоративные сайты, интернет-магазины, веб-сервисы и порталы."
                keywords={[
                    "разработка сайтов", "создание сайта", "корпоративный сайт",
                    "интернет-магазин", "веб-сервис", "портал", "EdBuk",
                    "адаптивный дизайн", "SEO-оптимизация", "веб-разработка"
                ]}
                canonicalUrl="/websites"
                structuredData={structuredData}
            />
            <Header isWebsitesPage={true} />
            <Websites />
            <ContactForm />
        </>
    );
};

export default WebsitesPage;
