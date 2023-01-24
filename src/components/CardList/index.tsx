import { FC } from 'react';

import { ICardProps } from '@components/Card/types';
import Card from '@components/Card';

const CardList: FC<{ list: ICardProps[] }> = ({ list }) => (
  <section className="card-list">
    {list.map((item: ICardProps, index: number) => (
      <Card
        key={index}
        embedUrl={item.embedUrl}
        title={item.title}
        score={item.score}
        imgUrl={item.imgUrl}
        league={item.league}
        name={item.name}
        time={item.time}
      />
    ))}
  </section>
);

export default CardList;
