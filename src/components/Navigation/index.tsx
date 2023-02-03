import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { links } from '@components/Navigation/consts';
import { ILink } from '@components/Navigation/types';

const Navigation: FC = () => {
  const router = useRouter();

  return (
    <nav className="navigation">
      <ul>
        {links.map((item: ILink) => (
          <li key={item.name} onClick={() => router.push(`/leagues/${item.link}`)}>
            <Image
              className="card-league"
              src={item.img}
              alt={'league-logo'}
              height={120}
              width={120}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
