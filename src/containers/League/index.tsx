import { NextPage } from 'next';
import { ILeaguePageProps } from '@containers/League/types';

import CardList from '@components/CardList';
import Layout from '@components/Layout';

import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { useScrollEvent } from '@hooks/useScrollEvent';

import {
  leagueHighlightsDataSelector,
  leagueHighlightsFetchingSelector,
  leagueHighlightsFinishSelector,
} from '@store/highlights/selectors';
import { getLeagueHighlightsFetching } from '@store/highlights/reducers';

import { getCountryTranslate } from '@utils/language';

const League: NextPage<ILeaguePageProps> = ({ highlights, leagueID }) => {
  const highlightsListFetching = useAppSelector(leagueHighlightsFetchingSelector(leagueID));
  const highlightsListFinish = useAppSelector(leagueHighlightsFinishSelector(leagueID));
  const highlightsList = useAppSelector(leagueHighlightsDataSelector(leagueID)) ?? [];

  const dispatch = useAppDispatch();

  console.log('highlightsListFinish =>', highlightsListFetching);

  useScrollEvent({
    fetching: highlightsListFetching,
    finish: highlightsListFinish,
    fetchList: () => dispatch(getLeagueHighlightsFetching(leagueID)),
  });

  return (
    <Layout title={`${getCountryTranslate(leagueID)} - футбольные обзоры`}>
      <CardList list={[...highlights, ...highlightsList]} />
    </Layout>
  );
};

export default League;
