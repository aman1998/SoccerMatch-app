import React from 'react';
import Head from 'next/head';
import '@common/styles/layout.scss';

const MyApp = ({ Component, pageProps }: any): JSX.Element => (
  <>
    <Head>
      <title>NextJS App From Scratch</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
