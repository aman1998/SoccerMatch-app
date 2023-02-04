import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { links } from '@components/Navigation/consts';
import { ILink } from '@components/Navigation/types';
import Logo from '@components/Logo';

import { getCountryTranslate } from '@utils/language';

import { IMenuProps } from './types';

const Menu: FC<IMenuProps> = ({ menuActive, setMenuActive }) => (
  <div
    className={classNames('menu', {
      'menu--active': menuActive,
    })}
    onClick={() => setMenuActive(false)}
  >
    <div className="menu__content" onClick={(e): void => e.stopPropagation()}>
      <Logo />
      <nav className="menu-navigation">
        <ul>
          {links.map((item: ILink) => (
            <li key={item.id} className="menu-navigation__item">
              <Link
                prefetch={false}
                href={`/leagues/${item.link}`}
                className="menu-navigation__link"
                onClick={() => setMenuActive(false)}
              >
                {getCountryTranslate(item.link)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

export default Menu;
