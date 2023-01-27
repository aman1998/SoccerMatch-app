import { FC } from 'react';
import { useRouter } from 'next/router';

import CardLeague from '@components/CardLeague';

import { useAppSelector } from '@hooks/useRedux';

import { leaguesListDataSelector } from '@store/leagues/selectors';
import { ILeaguesData } from '@store/leagues/types';

import { getCountryTranslate } from '@utils/language';

const Navigation: FC = () => {
  const router = useRouter();

  const leaguesList = useAppSelector(leaguesListDataSelector);

  if (!leaguesList?.length) return <></>;

  return (
    <nav className="navigation">
      <ul>
        {leaguesList.map((item: ILeaguesData) => (
          <li key={item.name}>
            <div onClick={() => router.push(`/leagues/${item.link}`)}>
              <CardLeague imgUrl={item.imgUrl} name={getCountryTranslate(item.name)} />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
