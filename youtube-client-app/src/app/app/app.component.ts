import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public videoName: string;
  public sort: string;
  public sortWord: string;

  public getName(name: string): void {
  this.videoName = name;
  }

  public sortBy(type: string): void {
  this.sort = type;
  }

  public sortByWord(name: string): void {
  this.sortWord = name;
  }
}
