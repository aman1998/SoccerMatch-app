export interface IBestHighlightsData {
  embedUrl: string;
  imgUrl: string;
  score: string;
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
  bestHighlightsList: IBestHighlightsData[];
}
