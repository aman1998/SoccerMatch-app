import { NextPage } from 'next';
import { IMainPageProps } from '@containers/Main/types';
import { useEffect } from 'react';

import Layout from '@components/Layout';
import CardList from '@components/CardList';
import { sitename } from '@components/Layout/consts';

import { useAppDispatch, useAppSelector } from '@hooks/useRedux';

import { getBestHighlightsList } from '@store/highlights/reducers';
import { bestHighlightsListSelector } from '@store/highlights/selectors';
import { getLeaguesData } from '@store/leagues/reducers';
import { leaguesListDataSelector } from '@store/leagues/selectors';

const Main: NextPage<IMainPageProps> = ({
  highlightsListData,
  bestHighlightsListData,
  leaguesData,
}) => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(bestHighlightsListSelector);
  const leagues = useAppSelector(leaguesListDataSelector);

  useEffect(() => {
    if (!leagues?.length) {
      dispatch(getLeaguesData(leaguesData));
    }
    if (!list.length) {
      dispatch(getBestHighlightsList(bestHighlightsListData));
    }
  }, []);

  return (
    <Layout title={`${sitename} - Футбольные обзоры`}>
      <CardList list={highlightsListData} />
    </Layout>
  );
};

export default Main;
