import { FC } from 'react';
import { useRouter } from 'next/router';

import CardLeague from '@components/CardLeague';
import { links } from '@components/Navigation/consts';
import { ILink } from '@components/Navigation/types';

import { getCountryTranslate } from '@utils/language';

const Navigation: FC = () => {
  const router = useRouter();

  return (
    <nav className="navigation">
      <ul>
        {links.map((item: ILink) => (
          <li key={item.name}>
            <div onClick={() => router.push(`/leagues/${item.link}`)}>
              <CardLeague img={item.img} name={getCountryTranslate(item.name)} />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
