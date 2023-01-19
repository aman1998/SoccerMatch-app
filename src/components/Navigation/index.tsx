import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { links } from '@components/Navigation/consts';
import { ILink } from '@components/Navigation/types';

const Navigation: FC = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <nav className="navigation">
      <ul>
        {links.map((item: ILink) => (
          <li
            key={item.id}
            className={`navigation__item ${asPath === item.link && 'navigation__item--active'}`}
          >
            <Link className="navigation__link" href={item.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
