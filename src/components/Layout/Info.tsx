import { FC } from 'react';

import Navigation from '@components/Navigation';
import IMac from '@components/IMac';

const Info: FC = () => (
  <section className="info">
    <div className="info__left">
      <h1 className="info__title">
        Футбольные обзоры <br />
        топ-лиг
      </h1>
      <p className="info__text">Смотрите обзоры ведущих чемпионатов на нашем сайте!</p>
      <div className="info__navigation">
        <Navigation />
      </div>
    </div>
    <IMac />
  </section>
);

export default Info;
