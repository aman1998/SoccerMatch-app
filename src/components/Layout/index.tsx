import { FC } from 'react';

import { ILayoutProps } from '@components/Layout/types';
import { sitename } from '@components/Layout/consts';
import Header from '@components/Header';
import Seo from '@components/Ceo';
import Info from '@components/Layout/Info';

const Layout: FC<ILayoutProps> = ({ children, title, showInfo = true }) => {
  const seoTitle = `${sitename} - ${title}`;

  return (
    <>
      <Seo seoTitle={seoTitle} />
      <div className="wrapper">
        <div className="container">
          <Header />
          {showInfo && <Info />}
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
