import { TRequestHandler } from '../../config/types';

export interface ILeaguesData {
  link: string;
  name: string;
  imgUrl: string;
}

export interface ILeaguesState {
  list: TRequestHandler<ILeaguesData[]>;
}
