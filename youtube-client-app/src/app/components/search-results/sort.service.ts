import { IVideo } from '../../models/search-response.model';

export class SortService {

  public sort(name: string, videoArr: IVideo[]): IVideo[] {
  const arr: IVideo[] = [...videoArr];
	if (name.includes('date')) {
		arr
		.sort((a: IVideo, b: IVideo): number => {
			if (name.includes('Up')) {
			return new Date(a.snippet.publishedAt).valueOf() - new Date(b.snippet.publishedAt).valueOf();
			} else {
			return new Date(b.snippet.publishedAt).valueOf() - new Date(a.snippet.publishedAt).valueOf();
			}
		});
	} else {
		arr
		.sort((a: IVideo, b: IVideo): number => {
			if (name.includes('Up')) {
			return parseInt(a.statistics.viewCount, 10) - parseInt(b.statistics.viewCount, 10);
			} else {
			return parseInt(b.statistics.viewCount, 10) - parseInt(a.statistics.viewCount, 10);
			}
		});
	}
	return arr;
  }
}
