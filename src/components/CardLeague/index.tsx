import { FC } from 'react';
import { useRouter } from 'next/router';

import { ICardLeagueProps } from '@components/CardLeague/types';

const CardLeague: FC<ICardLeagueProps> = ({ img, link }) => {
  const router = useRouter();

  const styling = {
    backgroundImage: `url('${img.src}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="card-league" style={styling} onClick={() => router.push(`/leagues/${link}`)} />
  );
};

export default CardLeague;
