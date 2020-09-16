import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '../../shared/models/search-response.model';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {

  public transform(value: IVideo[], type: string): IVideo[] {
    if (value && type) {
      value
        .sort((a: IVideo, b: IVideo): number => {
          if (type.includes('up')) {
            return new Date(a.snippet.publishedAt).valueOf() - new Date(b.snippet.publishedAt).valueOf();
          } else {
            return new Date(b.snippet.publishedAt).valueOf() - new Date(a.snippet.publishedAt).valueOf();
          }
        });
    }
    return value;
  }

}
