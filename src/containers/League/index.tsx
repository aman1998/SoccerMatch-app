import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import CardList from '@components/CardList';

import { IHighlightsData } from '@store/highlights/types';

import { getCountryTranslate } from '@utils/language';

const League: NextPage<{ data: IHighlightsData[] }> = ({ data }) => {
  const router = useRouter();

  const title = getCountryTranslate(String(router.query.id));

  return (
    <Layout title={`${title} - футбольные обзоры`}>
      <CardList list={data} />
    </Layout>
  );
};

export default League;
