import { FC, useState } from 'react';

const Navbar: FC = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
    } else {
      setBurgerClass('burger-bar unclicked');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="burger">
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>
    </nav>
  );
};

export default Navbar;
