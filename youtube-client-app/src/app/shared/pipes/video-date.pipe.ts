import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoDate',
})
export class VideoDatePipe implements PipeTransform {

  private _day: number;

  public set day(publicDate: number) {
    const curDate: number = Date.now();
    this._day = Math.round((curDate - publicDate) / 1000 / 60 / 60 / 24);
  }

  public get day(): number {
    return this._day;
  }

  public transform(value: string): string {
    this.day = new Date(value).valueOf();
    const border: object = {
      '#005eff': this.day < 7,
      '#2d8000': this.day > 7 && this.day < 30,
      '#ffff00': this.day > 30 && this.day < 180,
      '#ff0000': this.day > 180,
    };
    for (const color in border) {
      if (border[color]) {
        return color;
      }
    }
  }

}
