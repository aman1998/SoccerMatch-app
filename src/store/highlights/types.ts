import { TNullable, TRequestHandler } from '@config/types';

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
  type: string;
  name: string;
  time: string;
}

export interface IHighlightsList extends TRequestHandler<IHighlightsData> {
  finish: boolean;
  latestDoc: TNullable<IHighlightsData>;
}

export interface IHighlightsState {
  bestHighlightsList: TRequestHandler<IBestHighlightsData>;
  highlightsList: IHighlightsList;
}
