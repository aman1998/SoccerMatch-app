import { FC } from 'react';

import { ILayoutProps } from '@components/Layout/types';
import Header from '@components/Header';
import Seo from '@components/Ceo';

const Layout: FC<ILayoutProps> = ({ children, title }) => (
  <>
    <Seo seoTitle={title} />
    <div className="container">
      <Header />
      <main>{children}</main>
      <footer style={{ marginTop: '8px' }} />
    </div>
  </>
);

export default Layout;
