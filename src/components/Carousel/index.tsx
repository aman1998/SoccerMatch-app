/* eslint-disable */
import { Children, cloneElement, FC, useState } from 'react';

import CarouselBtns from '@components/Carousel/components/CarouselBtns';

const Carousel: FC<{ children: any }> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
      <CarouselBtns
        handleActiveIndex={handleActiveIndex}
        activeIndex={activeIndex}
        count={Children.count(children)}
      />
    </div>
  );
};

export default Carousel;
