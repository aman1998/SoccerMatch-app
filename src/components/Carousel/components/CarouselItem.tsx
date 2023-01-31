import { CSSProperties, FC, ReactNode } from 'react';

const CarouselItem: FC<{ children: ReactNode; style?: CSSProperties }> = ({ children, style }) => (
  <div className="carousel-item" style={style}>
    {children}
  </div>
);

export default CarouselItem;
