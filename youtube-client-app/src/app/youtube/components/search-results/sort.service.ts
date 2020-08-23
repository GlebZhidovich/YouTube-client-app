import { IVideo } from '../../../models/search-response.model';

export class SortService {

  public sort(arr: [string, string], videoArr: IVideo[]): IVideo[] {
    const newVideoArr: IVideo[] = [...videoArr];
    if (arr.includes('date')) {
      newVideoArr
        .sort((a: IVideo, b: IVideo): number => {
          if (arr.includes('up')) {
            return new Date(a.snippet.publishedAt).valueOf() - new Date(b.snippet.publishedAt).valueOf();
          } else {
            return new Date(b.snippet.publishedAt).valueOf() - new Date(a.snippet.publishedAt).valueOf();
          }
        });
    } else {
      newVideoArr
        .sort((a: IVideo, b: IVideo): number => {
          if (arr.includes('up')) {
            return parseInt(a.statistics.viewCount, 10) - parseInt(b.statistics.viewCount, 10);
          } else {
            return parseInt(b.statistics.viewCount, 10) - parseInt(a.statistics.viewCount, 10);
          }
        });
    }
    return newVideoArr;
  }
}
