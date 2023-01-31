import { TRequestHandler } from '@config/types';

export interface IBestHighlightsData {
  embedUrl: string;
  imgUrl: string;
  title: string;
}

export interface IHighlightsData {
  title: string;
  score: string;
  embedUrl: string;
  imgUrl: string;
  league: string;
  name: string;
  time: string;
}

export interface IHighlightsState {
  bestHighlightsList: TRequestHandler<IBestHighlightsData>;
}
