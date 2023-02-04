import { NextPage } from 'next';
import { IMainPageProps } from '@containers/Main/types';

import Layout from '@components/Layout';
import CardList from '@components/CardList';
import { sitename } from '@components/Layout/consts';
import Info from '@components/Layout/Info';

const Main: NextPage<IMainPageProps> = ({ highlights, bestHighlights }) => (
  <Layout title={`${sitename} - Футбольные обзоры`}>
    <Info bestHighlights={bestHighlights} />
    <CardList list={highlights} />
  </Layout>
);

export default Main;
