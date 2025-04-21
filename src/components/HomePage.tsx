import React from 'react';
import Header from './Header/Header';
import Features from './Features/Features';
import ContactForm from './ContactForm/ContactForm';
import SEO from './SEO/SEO';

const HomePage: React.FC = () => {
    // Структурированные данные для образовательного сервиса (Schema.org)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "EdBuk",
        "description": "Создание онлайн-школы с уникальным брендом и полным контролем над функционалом и монетизацией",
        "url": "https://edbuk.ru",
        "sameAs": [
            "https://t.me/@bukovysovmaks",
            "https://vk.com/id387175481"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Москва",
            "streetAddress": "пр. Маршала Тухачевского, 18"
        },
        "email": "bukovtsov03@gmail.com",
        "telephone": "+79066078097",
        "offers": {
            "@type": "Offer",
            "name": "Создание образовательной платформы",
            "description": "Разработка полноценной образовательной платформы с вашим уникальным брендом и всеми необходимыми функциями"
        }
    };

    return (
        <>
            <SEO
                title="Создание онлайн-школы с уникальным брендом"
                description="Разработка образовательных платформ с полным контролем над брендом, функционалом и монетизацией. Создайте свою уникальную онлайн-школу с EdBuk."
                keywords={[
                    "онлайн-школа", "образовательная платформа", "создание образовательного сайта",
                    "платформа для курсов", "разработка образовательного портала", "EdBuk",
                    "личный бренд", "учебная платформа", "система дистанционного обучения"
                ]}
                canonicalUrl="/"
                structuredData={structuredData}
            />
            <Header />
            <Features />
            <ContactForm />
        </>
    );
};

export default HomePage;
