import { FC } from 'react';

import { ILogoProps } from '@components/Logo/types';
import { sitename } from '@components/Layout/consts';

const Logo: FC<ILogoProps> = ({ showText = true, className }) => (
  <div className="logo-wrapper">
    <div className={`logo ${className}`}>
      <div className="logo--top">
        <div className="logo__circle logo__circle--left" />
        <div className="logo__circle" />
      </div>
      <div className="logo--bottom">
        <div className="logo__circle" />
        <div className="logo__circle logo__circle--right" />
      </div>
    </div>
    {showText && (
      <div className="logo-text">
        <b>{sitename}</b>
        <br />
        .online
      </div>
    )}
  </div>
);

export default Logo;
