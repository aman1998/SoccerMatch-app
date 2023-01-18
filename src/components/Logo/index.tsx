import { FC } from 'react';

import { ILogoProps } from '@components/Logo/types';

const Logo: FC<ILogoProps> = ({ text = true }) => (
  <div className="logo-wrapper">
    <div className="logo">
      <div className="logo--top">
        <div className="logo__circle logo__circle--left" />
        <div className="logo__circle" />
      </div>
      <div className="logo--bottom">
        <div className="logo__circle" />
        <div className="logo__circle logo__circle--right" />
      </div>
    </div>
    {text && (
      <div className="logo-text">
        <b>SoccerMatch</b>
        <br />
        .online
      </div>
    )}
  </div>
);

export default Logo;
