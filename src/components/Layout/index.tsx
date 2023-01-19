import { FC } from 'react';

import { ILayoutProps } from '@components/Layout/types';
import { sitename } from '@components/Layout/consts';
import Header from '@components/Header';
import IMac from '@components/IMac';
import Navigation from '@components/Navigation';
import Seo from '@components/Ceo';

const Layout: FC<ILayoutProps> = ({ children, title }) => {
  const seoTitle = `${sitename} - ${title}`;

  return (
    <>
      <Seo seoTitle={seoTitle} />
      <div className="wrapper">
        <div className="container">
          <Header />
          <section className="info">
            <div className="info__left">
              <h1 className="info__title">
                Футбольные обзоры <br />
                топ-лиг
              </h1>
              <p className="info__text">Смотрите обзоры ведущих чемпионатов на нашем сайте!</p>
              <Navigation />
            </div>
            <IMac />
          </section>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
