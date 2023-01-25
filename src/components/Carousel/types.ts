export interface ICarouselBtnsProps {
  count: number;
  activeIndex: number;
  handleActiveIndex: (arg: number) => void;
}

export interface ICarouselProps {
  children: JSX.Element[];
  activeIndex: number;
  setActiveIndex: (arg: number) => void;
}
