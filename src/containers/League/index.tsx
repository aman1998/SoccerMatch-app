import { NextPage } from 'next';
import { ILeaguePageProps } from '@containers/League/types';

import CardList from '@components/CardList';
import Layout from '@components/Layout';

import { getCountryTranslate } from '@utils/language';

const League: NextPage<ILeaguePageProps> = ({ highlights, leagueID }) => (
  <Layout title={`${getCountryTranslate(leagueID)} - футбольные обзоры`}>
    <CardList list={highlights} />
  </Layout>
);

export default League;
