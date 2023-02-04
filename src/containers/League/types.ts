import { IHighlightsData } from '@store/highlights/types';

export interface ILeaguePageProps {
  highlights: IHighlightsData[];
  leagueID: string;
}
