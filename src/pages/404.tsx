import { FC } from 'react';

import Header from '@components/Header';

const Custom404: FC = () => (
  <div className="container">
    <Header />
    <div className="custom404">
      <h1 className="custom404__title">Ошибка 404</h1>
      <div className="custom404__text">К сожалению, запрашиваемая страница не найдена</div>
    </div>
  </div>
);

export default Custom404;
