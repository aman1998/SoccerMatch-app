import { FC, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

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
            <li
              className={classNames('navigation__item', {
                'navigation__item--active': asPath === `/`,
              })}
            >
              <Link className="navigation__link" href={`/`} prefetch={false}>
                Все
              </Link>
            </li>
            {leaguesList.map((item: ILeaguesData) => (
              <li
                key={item.name}
                className={classNames('navigation__item', {
                  'navigation__item--active': asPath === `/leagues/${item.link}`,
                })}
              >
                <Link className="navigation__link" href={`/leagues/${item.link}`} prefetch={false}>
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
