import { FC } from 'react';

import Header from '@components/Header';
import Seo from '@components/Ceo';
import { sitename } from '@components/Layout/consts';

const Custom404: FC = () => (
  <div className="container">
    <Seo seoTitle={`${sitename} - 404`} />
    <Header />
    <div className="custom404">
      <h1 className="custom404__title">Ошибка 404</h1>
      <div className="custom404__text">К сожалению, запрашиваемая страница не найдена</div>
    </div>
  </div>
);

export default Custom404;
