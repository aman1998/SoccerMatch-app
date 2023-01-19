import { FC } from 'react';
import Head from 'next/head';

const Seo: FC<{ seoTitle: string }> = ({ seoTitle }) => (
  <Head>
    <title>{seoTitle}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta content={seoTitle} key={seoTitle} />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
  </Head>
);

export default Seo;
