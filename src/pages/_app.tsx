import React, { FC } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';

import { wrapper } from '@store/index';

import '../styles/main.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Head>
        <title>NextJS App From Scratch</title>
      </Head>
      <NextNProgress color="#1e9e70" height={1} showOnShallow={true} />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
