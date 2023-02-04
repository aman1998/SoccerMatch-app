import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Logo from '@components//Logo';
import Burger from '@components/Burger';
import Menu from '@components/Menu';

const Header: FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  useEffect(() => {
    if (menuActive) document.body.classList.add('menu-open');
    else document.body.classList.remove('menu-open');
  }, [menuActive]);

  const router = useRouter();

  return (
    <header className="header">
      <div
        className="header__logo"
        onClick={() => {
          if (router.pathname !== '/') router.push('/');
        }}
      >
        <Logo />
      </div>
      <Burger menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
    </header>
  );
};

export default Header;
