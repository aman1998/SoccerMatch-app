import { IBestHighlightsData, IHighlightsData } from '@store/highlights/types';

export interface ILeaguePageProps {
  data: IHighlightsData[];
  bestHighlightsList: IBestHighlightsData[];
}
