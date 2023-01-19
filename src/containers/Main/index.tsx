import { NextPage } from 'next';

import Layout from '@components/Layout';
import CardList from '@components/CardList';

const Main: NextPage = () => (
  <Layout title={'Футбольные обзооры'}>
    <CardList />
  </Layout>
);

export default Main;
