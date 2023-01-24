import { FC } from 'react';

import { IYoutubeProps } from '@components/Youtube/types';

const Youtube: FC<IYoutubeProps> = ({ embedId, className = '' }) => (
  <div className={`youtube ${className}`}>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&loop=1&modestbranding=1&rel=0&showinfo=0`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video player"
    />
  </div>
);

export default Youtube;
