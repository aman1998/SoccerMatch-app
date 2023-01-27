import { IBestHighlightsData, IHighlightsData } from '@store/highlights/types';
import { ILeaguesData } from '@store/leagues/types';

export interface IMainPageProps {
  highlightsListData: IHighlightsData[];
  bestHighlightsListData: IBestHighlightsData[];
  leaguesData: ILeaguesData[];
}
