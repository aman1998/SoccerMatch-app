import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlurImg from 'public/blur.png';

import { ICardProps } from '@components/Card/types';

const Card: FC<ICardProps> = ({ embedUrl, title, imgUrl, time, name, type }) => (
  <Link href={`/video/${embedUrl}`} className="card-link">
    <div className="card">
      <div className="card__header">
        <div className="card__league">{`${name} ${type}`}</div>
        <div className="card__time">{time}</div>
      </div>
      <div className="card__footer">
        <div className="card__title">{title}</div>
      </div>
      <Image
        src={imgUrl}
        fill
        quality={50}
        alt="game-cover"
        className="card__image"
        sizes="(max-width: 410px)"
        placeholder="blur"
        blurDataURL={BlurImg.blurDataURL}
      />
      <div className="card__corner">
        <div className="card__arrow">→</div>
      </div>
    </div>
  </Link>
);

export default Card;
