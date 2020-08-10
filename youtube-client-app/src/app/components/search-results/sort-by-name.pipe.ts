import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName',
})
export class SortByNamePipe implements PipeTransform {

  public transform(value: string, ...args: any[]): any {
	return null;
  }

}
