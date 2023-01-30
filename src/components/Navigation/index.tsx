import { FC } from 'react';

import CardLeague from '@components/CardLeague';
import { links } from '@components/Navigation/consts';
import { ILink } from '@components/Navigation/types';

import { getCountryTranslate } from '@utils/language';

const Navigation: FC = () => (
  <nav className="navigation">
    <ul>
      {links.map((item: ILink) => (
        <li key={item.name}>
          <CardLeague img={item.img} name={getCountryTranslate(item.name)} link={item.link} />
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
