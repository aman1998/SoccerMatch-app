import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ICardProps } from '@components/Card/types';

const Card: FC<ICardProps> = ({ score, embedUrl, title, imgUrl, time, name, showScore = true }) => (
  <Link href={`/video/${embedUrl}`} className="card-link">
    <div className="card">
      <div className="card__header">
        <div className="card__league">{name}</div>
        <div className="card__time">{time}</div>
      </div>
      <div className="card__footer">
        <div className="card__title">
          {title} {showScore ? score : ''}
        </div>
      </div>
      <Image
        src={imgUrl}
        fill
        quality={50}
        alt="game-cover"
        className="card__image"
        sizes="(max-width: 100%, width: 100%)"
      />
      <div className="card__corner">
        <div className="card__arrow">→</div>
      </div>
    </div>
  </Link>
);

export default Card;
