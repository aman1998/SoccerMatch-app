import { FC } from 'react';

import { ICardProps } from '@components/Card/types';
import Card from '@components/Card';

const CardList: FC<{ list: ICardProps[] }> = ({ list }) => (
  <section className="card-list">
    {!!list.length ? (
      list.map((item: ICardProps, index: number) => (
        <Card
          key={index}
          embedUrl={item.embedUrl}
          title={item.title}
          score={item.score}
          imgUrl={item.imgUrl}
          type={item.type}
          name={item.name}
          time={item.time}
        />
      ))
    ) : (
      <p>Пусто</p>
    )}
  </section>
);

export default CardList;
