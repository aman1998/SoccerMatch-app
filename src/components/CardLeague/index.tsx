import { FC } from 'react';
import Image from 'next/image';

import { ICardLeagueProps } from '@components/CardLeague/types';

const CardLeague: FC<ICardLeagueProps> = ({ imgUrl, name }) => (
  <div className="card-league">
    <Image
      src={imgUrl}
      alt={'card-league'}
      fill
      quality={100}
      className="card-league__image"
      sizes="(max-width: 100%, width: 100%)"
    />
    <p className="card-league__text">{name}</p>
  </div>
);

export default CardLeague;
