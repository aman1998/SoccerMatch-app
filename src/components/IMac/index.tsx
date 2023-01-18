import { FC } from 'react';
// import Image from 'next/image';
//
// import ImageSrc from '@public/images/hq720.webp';

const IMac: FC = () => (
  <div className="imac">
    <div className="screen">
      <div className="black-bg">
        <div className="display">
          <div className="content">
            {/*<Image src={ImageSrc} alt="imac" width={480} height={224} />*/}
          </div>
        </div>
      </div>
    </div>
    <div className="base-container">
      <div className="top-base"></div>
    </div>
  </div>
);

export default IMac;
