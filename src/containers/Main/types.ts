import { IBestHighlightsData, IHighlightsData } from '@store/highlights/types';

export interface IMainPageProps {
  highlights: IHighlightsData[];
  isFinish: boolean;
  bestHighlights: IBestHighlightsData[];
}
