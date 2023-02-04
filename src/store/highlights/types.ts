import { TNullable, TRequestHandler } from '@config/types';

export interface IHighlightsData {
  title: string;
  embedUrl: string;
  imgUrl: string;
  type: string;
  name: string;
  time: string;
  isBest: boolean;
}

export interface IHighlightsList extends TRequestHandler<IHighlightsData> {
  finish: boolean;
  latestDoc: TNullable<IHighlightsData>;
}

export interface IHighlightsState {
  highlightsList: IHighlightsList;
}
