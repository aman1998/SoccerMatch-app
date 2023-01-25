import { NextPage } from 'next';
import { IMainPageProps } from '@containers/Main/types';
import { useEffect } from 'react';

import Layout from '@components/Layout';
import CardList from '@components/CardList';
import { sitename } from '@components/Layout/consts';

import { useAppDispatch } from '@hooks/useRedux';

import { getBestList } from '@store/highlights/reducers';

const Main: NextPage<IMainPageProps> = ({ highlightsListData, bestHighlightsListData }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBestList(bestHighlightsListData));
  }, []);

  return (
    <Layout title={`${sitename} - Футбольные обзоры`}>
      <CardList list={highlightsListData} />
    </Layout>
  );
};

export default Main;
