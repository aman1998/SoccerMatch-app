import { NextPage } from 'next';

import Layout from '@components/Layout';
import CardList from '@components/CardList';
import { ICardProps } from '@components/Card/types';

const Main: NextPage<{ data: ICardProps[] }> = ({ data }) => (
  <Layout title={'Футбольные обзооры'}>
    <CardList list={data} />
  </Layout>
);

export default Main;
