import { FC } from 'react';
import classNames from 'classnames';

import { IBurgerProps } from './types';

const Navbar: FC<IBurgerProps> = ({ menuActive, setMenuActive }) => (
  <div className="burger" onClick={() => setMenuActive(!menuActive)}>
    <div
      className={classNames('burger__menu', {
        'burger__menu--active': menuActive,
      })}
    >
      <div className="burger__bar"></div>
      <div className="burger__bar"></div>
      <div className="burger__bar"></div>
    </div>
  </div>
);

export default Navbar;
