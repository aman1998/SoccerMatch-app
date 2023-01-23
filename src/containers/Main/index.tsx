import { NextPage } from 'next';

import Layout from '@components/Layout';
import CardList from '@components/CardList';
import { ICardProps } from '@components/Card/types';
import { sitename } from '@components/Layout/consts';

const Main: NextPage<{ data: ICardProps[] }> = ({ data }) => (
  <Layout title={`${sitename} - Футбольные обзоры`}>
    <CardList list={data} />
  </Layout>
);

export default Main;
