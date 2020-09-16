import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {

  public transform(value: string): string {
    return new Date(value).toLocaleString('en-En', {
      weekday: 'long',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  }

}
