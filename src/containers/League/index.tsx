import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ILeaguePageProps } from '@containers/League/types';

import CardList from '@components/CardList';
import Layout from '@components/Layout';

import { useAppDispatch, useAppSelector } from '@hooks/useRedux';

import { getBestHighlightsList } from '@store/highlights/reducers';
import { bestHighlightsListSelector } from '@store/highlights/selectors';

import { getCountryTranslate } from '@utils/language';

const League: NextPage<ILeaguePageProps> = ({ data, bestHighlightsList }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const list = useAppSelector(bestHighlightsListSelector);

  useEffect(() => {
    if (!list.length) {
      dispatch(getBestHighlightsList(bestHighlightsList));
    }
  }, []);

  const title = getCountryTranslate(String(router.query.id));

  return (
    <Layout title={`${title} - футбольные обзоры`} showInfo={false}>
      <CardList list={data} />
    </Layout>
  );
};

export default League;
