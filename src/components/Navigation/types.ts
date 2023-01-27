import { StaticImageData } from 'next/image';

export interface ILink {
  id: number;
  name: string;
  link: string;
  img: StaticImageData;
}
