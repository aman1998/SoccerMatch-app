import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';

import { wrapper } from '@store/index';

import '../styles/main.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <NextNProgress
        color="#1e9e70"
        height={1}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
