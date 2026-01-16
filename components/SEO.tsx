import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOData } from '../types';

interface SEOProps {
    data: SEOData;
    lang: string;
}

const SEO: React.FC<SEOProps> = ({ data, lang }) => {
    const { title, description, keywords, image, url } = data;
    const siteUrl = 'https://khatwa.vercel.app/'; // Replace with actual domain
    const currentUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <html lang={lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords.join(', ')} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Canonical URL */}
            <link rel="canonical" href={currentUrl} />
        </Helmet>
    );
};

export default SEO;
