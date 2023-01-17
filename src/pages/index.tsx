import React, { useEffect } from 'react';

import { makeHighlightListFetchingSelector } from '@store/highlight/selectors';

import { useAppSelector } from '../hooks/useRedux';

const Home = (): JSX.Element => {
  const highlight = useAppSelector(makeHighlightListFetchingSelector);

  useEffect(() => {
    console.log('highlight =>', highlight);
  }, []);
  return <div>Hello, NextJS!</div>;
};

export default Home;
