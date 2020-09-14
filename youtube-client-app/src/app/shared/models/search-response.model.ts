import { ISnippet, IStatistics } from './search-item.model';

export interface IVideo {
  id: string;
  statistics: IStatistics;
  snippet: ISnippet;
}

export interface ICustomVideo {
  title: string;
  description: string;
  imgLink: string;
  videoLink: string;
  date: string;
}
