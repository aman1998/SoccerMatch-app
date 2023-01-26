import { FC } from 'react';
import Link from 'next/link';

import Logo from '@components//Logo';
import Burger from '@components/Burger';

const Header: FC = () => (
  <header className="header">
    <Link href={'/'} className="header__logo">
      <Logo />
    </Link>
    <Burger />
  </header>
);

export default Header;
