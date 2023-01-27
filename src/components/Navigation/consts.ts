import SpainImg from 'public/spain.jpg';
import EnglandImg from 'public/england.jpeg';
import FranceImg from 'public/france.jpg';
import ItalyImg from 'public/italy.jpg';
import GermanyImg from 'public/germany.jpg';

import { ILink } from './types';

export const links: ILink[] = [
  {
    id: 1,
    name: 'England',
    link: 'england',
    img: EnglandImg,
  },
  {
    id: 2,
    name: 'Spain',
    link: 'spain',
    img: SpainImg,
  },
  {
    id: 3,
    name: 'Italy',
    link: 'italy',
    img: ItalyImg,
  },
  {
    id: 4,
    name: 'Germany',
    link: 'germany',
    img: GermanyImg,
  },
  {
    id: 5,
    name: 'France',
    link: 'france',
    img: FranceImg,
  },
];
