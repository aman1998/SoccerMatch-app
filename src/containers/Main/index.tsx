import { NextPage } from 'next';
import { IMainPageProps } from '@containers/Main/types';

import Layout from '@components/Layout';
import CardList from '@components/CardList';
import { sitename } from '@components/Layout/consts';

import { useScrollEvent } from '@hooks/useScrollEvent';

const Main: NextPage<IMainPageProps> = ({ highlightsListData }) => {
  useScrollEvent({
    fetching: false,
    finish: false,
    fetchList: () => console.log('hello'),
  });

  return (
    <Layout title={`${sitename} - Футбольные обзоры`}>
      <CardList list={highlightsListData} />
    </Layout>
  );
};

export default Main;
