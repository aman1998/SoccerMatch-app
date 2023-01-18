import { NextPage } from 'next';

import Layout from '@components/Layout';

const Main: NextPage<{ title: string }> = ({ title }) => (
  <Layout title={'Футбольные обзооры'}>
    <div>Hello, {title}</div>
  </Layout>
);

export default Main;
