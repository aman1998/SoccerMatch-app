import { FC } from 'react';
import Image from 'next/image';

const url =
  // eslint-disable-next-line max-len
  'https://i.ytimg.com/vi/7bSYiVzyK_M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKSYvKBW1xRHrVh4VPCzjvnUY5Iw';

const IMac: FC = () => (
  <article className="imac">
    <div className="imac__header-frame">
      <div className="imac__display">
        <Image
          src={url}
          fill
          quality={100}
          alt="game-cover"
          className="imac__image"
          sizes="(max-width: 100%, width: 100%)"
          priority
        />
      </div>
    </div>
    <div className="imac__footer-frame" />
    <div className="imac__stand" />
  </article>
);

export default IMac;
