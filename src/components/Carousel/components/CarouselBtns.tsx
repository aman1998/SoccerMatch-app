/* eslint-disable */
import { FC } from 'react';

import Arrow from '@components/Arrow';
import { EArrowDirections } from '@components/Arrow/types';

import { getArrayFromCount } from '@utils/array';
import { ICarouselBtnsProps } from "@components/Carousel/types";
import classNames from "classnames";

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
      {getArrayFromCount(count).map((item) => (
        <div
          key={item}
          className={classNames( "carousel-indicators__item", {"carousel-indicators__item--active": item === activeIndex})}
          onClick={() => {
            handleActiveIndex(item);
          }}
        />
      ))}
    </div>
  </div>
);

export default CarouselBtns;