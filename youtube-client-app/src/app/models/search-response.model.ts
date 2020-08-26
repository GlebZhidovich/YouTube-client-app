import { ISnippet, IStatistics } from './search-item.model';

export interface IVideo {
  id: string;
  statistics: IStatistics;
  snippet: ISnippet;
}
