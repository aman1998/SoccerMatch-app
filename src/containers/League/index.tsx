import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ILeaguePageProps } from '@containers/League/types';

import CardList from '@components/CardList';
import Header from '@components/Header';
import Seo from '@components/Ceo';

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
    <>
      <Seo seoTitle={`${title} - футбольные обзоры`} />
      <div className="container">
        <Header />
        <CardList list={data} />
      </div>
    </>
  );
};

export default League;
