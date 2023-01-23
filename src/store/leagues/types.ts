import { TRequestHandler } from '../../config/types';

export interface ILeaguesData {
  link: string;
  name: string;
}

export interface ILeaguesState {
  list: TRequestHandler<ILeaguesData[]>;
}
