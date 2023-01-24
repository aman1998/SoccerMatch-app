import { FC } from 'react';
import Head from 'next/head';

const Seo: FC<{ seoTitle: string }> = ({ seoTitle }) => (
  <Head>
    <title>{seoTitle}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content="Футбольные обзоры матчей топ-лиг" />
    <meta name="keywords" content="футбол, обзор" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
  </Head>
);

export default Seo;
