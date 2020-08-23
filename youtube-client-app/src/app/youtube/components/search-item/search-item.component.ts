import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ISnippet, IStatistics } from '../../../models/search-item.model';
import { IVideo } from '../../../models/search-response.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent implements OnInit {

  @Input() public videoData: IVideo;

  public statistics: IStatistics;
  public snippet: ISnippet;
  public _day: number;

  public set day(publicDate: number) {
    const curDate: number = Date.now();
    this._day = Math.round((curDate - publicDate) / 1000 / 60 / 60 / 24);
  }

  public get day(): number {
    return this._day;
  }

  public get borderClass(): string {
    const border: object = {
      'new-date': this.day < 7,
      'medium-date': this.day > 7 && this.day < 30,
      'old-date': this.day > 180,
    };
    for (const className in border) {
      if (border[className]) { return className; }
    }
  }

  public ngOnInit(): void {
    this.statistics = this.videoData.statistics;
    this.snippet = this.videoData.snippet;
    this.day = new Date(this.snippet.publishedAt).valueOf();
  }
}
