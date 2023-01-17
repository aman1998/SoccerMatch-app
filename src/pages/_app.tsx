import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '@common/styles/layout.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>NextJS App From Scratch</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
