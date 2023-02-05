import { OutputSelector, SelectorArray } from 'reselect';

import { TRequestHandler } from '@config/types';

export interface IBestHighlightsData {
  embedUrl: string;
  imgUrl: string;
  title: string;
}

export interface IHighlightsData {
  title: string;
  embedUrl: string;
  imgUrl: string;
  type: string;
  name: string;
  time: string;
  isBest: boolean;
}

export type IFinish = {
  finish: boolean;
};

export interface ILeaguesHighlightsPayload {
  id: string;
  data: IHighlightsData[];
}

export interface ILeaguesHighlightsError {
  id: string;
  error: string;
}

export interface IHighlightsState {
  highlightsList: IFinish & TRequestHandler<IHighlightsData>;
  leaguesHighlights: Record<string, TRequestHandler<IHighlightsData> & IFinish>;
}

export type THighlightsOutputSelector<T> = OutputSelector<
  SelectorArray,
  T,
  (s: IHighlightsState) => T
>;
