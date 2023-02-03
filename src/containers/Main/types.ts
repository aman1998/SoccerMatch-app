import { IBestHighlightsData, IHighlightsData } from '@store/highlights/types';

export interface IMainPageProps {
  highlightsListData: IHighlightsData[];
  isFinish: boolean;
  bestHighlightsListData?: IBestHighlightsData[];
}
