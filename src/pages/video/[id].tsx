import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const VideoPage: ComponentType = dynamic(() => import('@containers/Video'), {
  ssr: false,
});

export default (): any => <VideoPage />;
