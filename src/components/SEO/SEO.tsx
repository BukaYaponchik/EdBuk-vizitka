import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  ogImage = '/logo.svg',
  ogType = 'website',
  canonicalUrl,
  structuredData,
}) => {
  const site = {
    siteUrl: 'https://edbuk.ru', // замените на ваш домен
    siteName: 'EdBuk',
  };

  const pageTitle = `${title} | ${site.siteName}`;
  const keywordsString = keywords.join(', ');
  const fullCanonicalUrl = canonicalUrl ? `${site.siteUrl}${canonicalUrl}` : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${site.siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Основные метатеги */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywordsString} />}

      {/* Канонический URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph теги */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:type" content={ogType} />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:site_name" content={site.siteName} />

      {/* Twitter карточка */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Другие метатеги */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Russian" />

      {/* Структурированные данные */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
