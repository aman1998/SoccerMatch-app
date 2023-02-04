import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BlurImg from 'public/blur.png';

import Navigation from '@components/Navigation';
import IMac from '@components/IMac';
import CarouselItem from '@components/Carousel/components/CarouselItem';
import Carousel from '@components/Carousel';

import { IBestHighlightsData } from '@store/highlights/types';

const Info: FC<{ bestHighlights: IBestHighlightsData[] }> = ({ bestHighlights }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const router = useRouter();

  const getTitle = () => !!bestHighlights.length && bestHighlights[activeIndex].title;
  const getUrl = () => !!bestHighlights.length && bestHighlights[activeIndex].embedUrl;

  return (
    <section className="info">
      <div className="info__left">
        <h1 className="info__title">
          Футбольные обзоры <br />
          топ-лиг
        </h1>
        <p className="info__text">Смотрите обзоры ведущих чемпионатов на нашем сайте!</p>
        <div className="info__navigation">
          <Navigation />
        </div>
      </div>
      <div className="info-imac">
        <IMac>
          <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
            {bestHighlights.map((item: IBestHighlightsData, index) => (
              <CarouselItem key={index} style={{ position: 'relative' }}>
                <Image
                  src={item.imgUrl}
                  alt="game-cover"
                  className="info-imac__image"
                  fill
                  quality={50}
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 410px)"
                  placeholder="blur"
                  blurDataURL={BlurImg.blurDataURL}
                />
              </CarouselItem>
            ))}
          </Carousel>
          <div onClick={() => router.push(`/video/${getUrl()}`)} className="info-imac__title">
            {getTitle()}
          </div>
          {!!bestHighlights.length && (
            <div onClick={() => router.push(`/video/${getUrl()}`)} className="info-imac__play">
              Play
            </div>
          )}
        </IMac>
      </div>
    </section>
  );
};

export default Info;
