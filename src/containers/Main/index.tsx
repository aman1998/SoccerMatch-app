import { NextPage } from 'next';
import { IMainPageProps } from '@containers/Main/types';

import Layout from '@components/Layout';
import CardList from '@components/CardList';
import { sitename } from '@components/Layout/consts';
import Info from '@components/Layout/Info';

import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { useScrollEvent } from '@hooks/useScrollEvent';

import {
  highlightsListDataSelector,
  highlightsListFetchingSelector,
  highlightsListFinishSelector,
} from '@store/highlights/selectors';
import { getHighlightsFetching } from '@store/highlights/reducers';

const Main: NextPage<IMainPageProps> = ({ highlights, bestHighlights }) => {
  const dispatch = useAppDispatch();
  const fetching = useAppSelector(highlightsListFetchingSelector);
  const highlightsData = useAppSelector(highlightsListDataSelector);
  const finish = useAppSelector(highlightsListFinishSelector);

  useScrollEvent({
    fetching,
    finish,
    fetchList: () => dispatch(getHighlightsFetching()),
  });
  return (
    <Layout title={`${sitename} - Футбольные обзоры`}>
      <Info bestHighlights={bestHighlights} />
      <CardList list={[...highlights, ...highlightsData]} />
    </Layout>
  );
};

export default Main;
