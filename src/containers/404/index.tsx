import { FC } from 'react';

import Header from '@components/Header';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/Carousel/components/CarouselItem';

const Custom404: FC = () => (
  <div className="container">
    <Header />
    <div className="custom404">
      <h1 className="custom404__title">Ошибка 404</h1>
      <div className="custom404__text">К сожалению, запрашиваемая страница не найдена</div>
    </div>
    <Carousel>
      <CarouselItem>1</CarouselItem>
      <CarouselItem>2</CarouselItem>
      <CarouselItem>3</CarouselItem>
    </Carousel>
  </div>
);

export default Custom404;
