import { FC, ReactNode } from 'react';

const CarouselItem: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="carousel-item">{children}</div>
);

export default CarouselItem;
