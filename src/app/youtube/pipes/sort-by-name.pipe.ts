import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '../../shared/models/search-response.model';

@Pipe({
  name: 'sortByName',
})
export class SortByNamePipe implements PipeTransform {

  public transform(value: IVideo[], name: string): IVideo[] {
    if (value && name) {
      if (typeof name === 'string') {
        return value.filter((obj: IVideo): boolean => obj.snippet.title.toLowerCase().includes(name.toLowerCase()));
      }
    }
    return value;
  }

}
