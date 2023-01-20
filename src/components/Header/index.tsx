import { FC } from 'react';
import Link from 'next/link';

import Logo from '@components//Logo';

const Header: FC = () => (
  <header className="header">
    {
      <Link href={'/'} className="header__logo">
        <Logo />
      </Link>
    }
  </header>
);

export default Header;
