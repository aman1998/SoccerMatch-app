import { NextPage } from 'next';
import { IMainPageProps } from '@containers/Main/types';

import Layout from '@components/Layout';
import CardList from '@components/CardList';
import { sitename } from '@components/Layout/consts';

const Main: NextPage<IMainPageProps> = ({ highlightsListData }) => (
  <Layout title={`${sitename} - Футбольные обзоры`}>
    <CardList list={highlightsListData} />
  </Layout>
);

export default Main;
