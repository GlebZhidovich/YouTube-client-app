import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public videoName: string;
  public sort: string;

  constructor(private cdr: ChangeDetectorRef) {

  }

  public getName(name: string): void {
  this.videoName = name;
  }

  public sortBy(type: string): void {
  this.sort = type;
  this.cdr.detectChanges();
  // console.log(type);
  }
}
