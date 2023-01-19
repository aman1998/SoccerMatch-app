import { FC } from 'react';

import { ICardProps } from '@components/Card/types';
import Card from '@components/Card';

const games: ICardProps[] = [
  {
    title: 'Liverpool VS Real Madrid ',
    score: '2:1',
    league: 'Seria A',
    url: '7bSYiVzyK_M',
    time: '02:23',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://i.ytimg.com/vi/7bSYiVzyK_M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKSYvKBW1xRHrVh4VPCzjvnUY5Iw',
  },
  {
    title: 'Liverpool VS Real Madrid ',
    score: '2:1',
    league: 'Seria A',
    url: '7bSYiVzyK_M',
    time: '02:23',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://i.ytimg.com/vi/7bSYiVzyK_M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKSYvKBW1xRHrVh4VPCzjvnUY5Iw',
  },
  {
    title: 'Liverpool VS Real Madrid ',
    score: '2:1',
    league: 'Seria A',
    url: '7bSYiVzyK_M',
    time: '02:23',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://i.ytimg.com/vi/7bSYiVzyK_M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKSYvKBW1xRHrVh4VPCzjvnUY5Iw',
  },
  {
    title: 'Liverpool VS Real Madrid ',
    score: '2:1',
    league: 'Seria A',
    url: '7bSYiVzyK_M',
    time: '02:23',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://i.ytimg.com/vi/7bSYiVzyK_M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKSYvKBW1xRHrVh4VPCzjvnUY5Iw',
  },
  {
    title: 'Liverpool VS Real Madrid ',
    score: '2:1',
    league: 'Seria A',
    url: '7bSYiVzyK_M',
    time: '02:23',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://i.ytimg.com/vi/7bSYiVzyK_M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKSYvKBW1xRHrVh4VPCzjvnUY5Iw',
  },
  {
    title: 'Liverpool VS Real Madrid ',
    score: '2:1',
    league: 'Seria A',
    time: '02:23',
    url: '7bSYiVzyK_M',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://i.ytimg.com/vi/7bSYiVzyK_M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKSYvKBW1xRHrVh4VPCzjvnUY5Iw',
  },
  {
    title: 'Liverpool VS Real Madrid ',
    score: '2:1',
    league: 'Seria A',
    url: '7bSYiVzyK_M',
    time: '02:23',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://i.ytimg.com/vi/7bSYiVzyK_M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKSYvKBW1xRHrVh4VPCzjvnUY5Iw',
  },
];

const CardList: FC = () => (
  <section className="card-list">
    {games.map((item: ICardProps, index: number) => (
      <Card
        key={index}
        url={item.url}
        title={item.title}
        score={item.score}
        imgUrl={item.imgUrl}
        league={item.league}
        time={item.time}
      />
    ))}
  </section>
);

export default CardList;
