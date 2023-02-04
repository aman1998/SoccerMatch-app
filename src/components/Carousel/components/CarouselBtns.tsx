import { FC } from 'react';
import classNames from 'classnames';

import Arrow from '@components/Arrow';
import { EArrowDirections } from '@components/Arrow/types';
import { ICarouselBtnsProps } from '@components/Carousel/types';

import { getArrayFromCount } from '@utils/array';

const CarouselBtns: FC<ICarouselBtnsProps> = ({ handleActiveIndex, activeIndex, count }) => (
  <div className="carousel-btns">
    <div
      className="carousel-arrow carousel-arrow--left"
      onClick={() => {
        handleActiveIndex(activeIndex - 1);
      }}
    >
      {<Arrow direction={EArrowDirections.left} />}
    </div>
    <div
      className="carousel-arrow carousel-arrow--right"
      onClick={() => {
        handleActiveIndex(activeIndex + 1);
      }}
    >
      <Arrow direction={EArrowDirections.right} />
    </div>
    <div className="carousel-indicators">
      {getArrayFromCount(count).map((item: number) => (
        <div
          key={item}
          className={classNames('carousel-indicators__item', {
            'carousel-indicators__item--active': item === activeIndex,
          })}
          onClick={() => {
            handleActiveIndex(item);
          }}
        />
      ))}
    </div>
  </div>
);

export default CarouselBtns;
