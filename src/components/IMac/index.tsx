import { FC } from 'react';

import Carousel from '@components/Carousel';
import CarouselItem from '@components/Carousel/components/CarouselItem';

import { useAppSelector } from '@hooks/useRedux';

import { bestHighlightsListSelector } from '@store/highlights/selectors';
import { IBestHighlightsData } from '@store/highlights/types';

const IMac: FC = () => {
  const bestHighlights = useAppSelector(bestHighlightsListSelector);

  return (
    <article className="imac">
      <div className="imac__header-frame">
        <div className="imac__display">
          <Carousel>
            {bestHighlights.map((item: IBestHighlightsData, index) => (
              <CarouselItem key={index}>
                <img src={item.imgUrl} alt="game-cover" className="imac__image" />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="imac__footer-frame" />
      <div className="imac__stand" />
    </article>
  );
};

export default IMac;
