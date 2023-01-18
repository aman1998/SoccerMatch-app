import Head from 'next/head';
import { FC } from 'react';

import { ILayoutProps } from '@components/Layout/types';
import { sitename } from '@components/Layout/consts';
import Header from '@components/Header';

const Layout: FC<ILayoutProps> = ({ children, title }) => {
  const seoTitle = `${sitename}: ${title}`;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content={seoTitle} key={seoTitle} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="background" />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
