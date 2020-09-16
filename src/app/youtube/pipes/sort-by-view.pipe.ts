import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '../../shared/models/search-response.model';

@Pipe({
  name: 'sortByView',
})
export class SortByViewPipe implements PipeTransform {

  public transform(value: IVideo[], type: string): IVideo[] {
    if (value && type) {
      value
        .sort((a: IVideo, b: IVideo): number => {
          if (type.includes('up')) {
            return parseInt(a.statistics.viewCount, 10) - parseInt(b.statistics.viewCount, 10);
          } else {
            return parseInt(b.statistics.viewCount, 10) - parseInt(a.statistics.viewCount, 10);
          }
        });
    }
    return value;
  }

}
