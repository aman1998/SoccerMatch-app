import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ILeaguePageProps } from '@containers/League/types';

import CardList from '@components/CardList';
import Layout from '@components/Layout';

import { getCountryTranslate } from '@utils/language';

const League: NextPage<ILeaguePageProps> = ({ data }) => {
  const router = useRouter();

  const title = getCountryTranslate(String(router.query.leagueID));

  return (
    <Layout title={`${title} - футбольные обзоры`}>
      <CardList list={data} />
    </Layout>
  );
};

export default League;
