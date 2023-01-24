import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import { ICardProps } from '@components/Card/types';
import CardList from '@components/CardList';

import { getCountryTranslate } from '@utils/language';

const League: NextPage<{ data: ICardProps[] }> = ({ data }) => {
  const router = useRouter();

  const title = getCountryTranslate(String(router.query.id));

  return (
    <Layout title={`${title} - футбольные обзоры`}>
      <CardList list={data} />
    </Layout>
  );
};

export default League;
