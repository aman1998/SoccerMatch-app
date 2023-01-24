import { FC, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '@hooks/useRedux';

import { getLeaguesFetching } from '@store/leagues/reducers';
import { leaguesListDataSelector, leaguesListFetchingSelector } from '@store/leagues/selectors';
import { ILeaguesData } from '@store/leagues/types';

import { getCountryTranslate } from '@utils/language';

const Navigation: FC = () => {
  const router = useRouter();
  const { asPath } = router;
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
            <li className={`navigation__item ${asPath === `/` && 'navigation__item--active'}`}>
              <Link className="navigation__link" href={`/`}>
                Все
              </Link>
            </li>
            {leaguesList.map((item: ILeaguesData) => (
              <li
                key={item.name}
                className={`navigation__item ${
                  asPath === `/leagues/${item.link}` && 'navigation__item--active'
                }`}
              >
                <Link className="navigation__link" href={`/leagues/${item.link}`}>
                  {getCountryTranslate(item.name)}
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
