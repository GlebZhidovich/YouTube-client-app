import { Pipe, PipeTransform } from '@angular/core';
import { IVideo } from '../../../models/search-response.model';

@Pipe({
  name: 'sortByName',
})
export class SortByNamePipe implements PipeTransform {

  public transform(value: IVideo[], ...args: string[]): IVideo[] {
    if (value) {
      const [name]: string[] = args;
      if (typeof name === 'string') {
        return value.filter((obj: IVideo): boolean => obj.snippet.title.toLowerCase().includes(name.toLowerCase()));
      }
      return value;
    }
  }

}
