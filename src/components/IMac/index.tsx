import { FC, ReactNode } from 'react';

const IMac: FC<{ children: ReactNode }> = ({ children }) => (
  <article className="imac">
    <div className="imac__header-frame">
      <div className="imac__display">{children}</div>
    </div>
    <div className="imac__footer-frame" />
    <div className="imac__stand" />
  </article>
);

export default IMac;
