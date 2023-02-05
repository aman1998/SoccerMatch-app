import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { links } from '@components/Navigation/consts';
import { ILink } from '@components/Navigation/types';
import Logo from '@components/Logo';

import { getCountryTranslate } from '@utils/language';

import { IMenuProps } from './types';

const Menu: FC<IMenuProps> = ({ menuActive, setMenuActive }) => {
  const router = useRouter();

  return (
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
            <li
              className={classNames('menu-navigation__item', {
                'menu-navigation__item--active': router.asPath === `/`,
              })}
            >
              <Link
                prefetch={false}
                href={`/`}
                className="menu-navigation__link"
                onClick={() => setMenuActive(false)}
              >
                Главная
              </Link>
            </li>
            {links.map((item: ILink) => (
              <li
                key={item.id}
                className={classNames('menu-navigation__item', {
                  'menu-navigation__item--active': router.asPath === `/leagues/${item.link}`,
                })}
              >
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
};

export default Menu;
