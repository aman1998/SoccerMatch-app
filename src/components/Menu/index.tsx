import { FC } from 'react';
import classNames from 'classnames';

import { IMenuProps } from './types';

const Menu: FC<IMenuProps> = ({ menuActive, setMenuActive }) => (
  <div
    className={classNames('menu', {
      'menu--active': menuActive,
    })}
    onClick={() => setMenuActive(false)}
  >
    <div className="menu__content" onClick={(e): void => e.stopPropagation()}>
      hello
    </div>
  </div>
);

export default Menu;
