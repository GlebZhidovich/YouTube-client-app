import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoDate',
})
export class VideoDatePipe implements PipeTransform {

  private dateToDay(date: number): number {
    const curDate: number = Date.now();
    return Math.round((curDate - date) / 1000 / 60 / 60 / 24);
  }

  public transform(value: string): string {
    const date: number = new Date(value).valueOf();
    const day: number = this.dateToDay(date);
    const border: object = {
      '#005eff': day < 7,
      '#2d8000': day > 7 && day < 30,
      '#ffff00': day > 30 && day < 180,
      '#ff0000': day > 180,
    };
    for (const color in border) {
      if (border[color]) {
        return color;
      }
    }
  }

}
