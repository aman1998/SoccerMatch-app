import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import CardLeague from '@components/CardLeague';

import { useAppDispatch, useAppSelector } from '@hooks/useRedux';

import { getLeaguesFetching } from '@store/leagues/reducers';
import { leaguesListDataSelector, leaguesListFetchingSelector } from '@store/leagues/selectors';
import { ILeaguesData } from '@store/leagues/types';

import { getCountryTranslate } from '@utils/language';

const Navigation: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const leaguesList = useAppSelector(leaguesListDataSelector);
  const loading = useAppSelector(leaguesListFetchingSelector);

  useEffect(() => {
    if (!leaguesList) dispatch(getLeaguesFetching());
  }, []);

  return (
    <nav className="navigation">
      <ul>
        {!loading && leaguesList?.length && (
          <>
            {leaguesList.map((item: ILeaguesData) => (
              <>
                <li key={item.name}>
                  <div onClick={() => router.push(`/leagues/${item.link}`)}>
                    <CardLeague imgUrl={item.imgUrl} name={getCountryTranslate(item.name)} />
                  </div>
                </li>
                <li key={item.name}>
                  <div onClick={() => router.push(`/leagues/${item.link}`)}>
                    <CardLeague imgUrl={item.imgUrl} name={getCountryTranslate(item.name)} />
                  </div>
                </li>
                <li key={item.name}>
                  <div onClick={() => router.push(`/leagues/${item.link}`)}>
                    <CardLeague imgUrl={item.imgUrl} name={getCountryTranslate(item.name)} />
                  </div>
                </li>
              </>
            ))}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
