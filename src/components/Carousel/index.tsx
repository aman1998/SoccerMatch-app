/* eslint-disable */
import { Children, cloneElement, FC } from 'react';

import CarouselBtns from '@components/Carousel/components/CarouselBtns';
import { ICarouselProps } from '@components/Carousel/types';

const Carousel: FC<ICarouselProps> = ({ children, activeIndex, setActiveIndex }) => {
  const count = Children.count(children);

  const handleActiveIndex = (newIndex: number): void => {
    const childrenLength = Children.count(children);
    if (newIndex === activeIndex) return;
    if (newIndex < 0) {
      setActiveIndex(childrenLength - 1);
      return;
    } else if (newIndex >= childrenLength) {
      setActiveIndex(0);
      return;
    } else if (newIndex === childrenLength - 1) {
      setActiveIndex(childrenLength - 1);
      return;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel__inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {Children.map(children, (child) => cloneElement(child, { width: '100%' }))}
      </div>
      {count > 1 && (
        <CarouselBtns
          handleActiveIndex={handleActiveIndex}
          activeIndex={activeIndex}
          count={count}
        />
      )}
    </div>
  );
};

export default Carousel;
