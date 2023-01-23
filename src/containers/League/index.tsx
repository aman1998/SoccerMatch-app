import { NextPage } from 'next';

import Layout from '@components/Layout';
import { ICardProps } from '@components/Card/types';
import CardList from '@components/CardList';

const League: NextPage<{ data: ICardProps[] }> = ({ data }) => (
  <Layout title="hello">
    <CardList list={data} />
  </Layout>
);

export default League;
