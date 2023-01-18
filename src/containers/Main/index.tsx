import { NextPage } from 'next';

import Layout from '@components/Layout';
import IMac from '@components/IMac';

const Main: NextPage<{ title: string }> = ({ title }) => (
  <Layout title={'Футбольные обзооры'}>
    <section className="">
      <div>
        <h1>Футбольные обзоры топ-лиг</h1>
      </div>
      <IMac />
    </section>
  </Layout>
);

export default Main;
