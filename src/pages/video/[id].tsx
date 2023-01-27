import dynamic from 'next/dynamic';

const VideoPage = dynamic(() => import('@containers/Video'), {
  ssr: false,
});

export default (): any => <VideoPage />;
