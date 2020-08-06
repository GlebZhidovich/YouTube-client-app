import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ISnippet, IStatistics } from '../../models/search-item.model';
import { IVideo } from '../../models/search-response.model';

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

  public ngOnInit(): void {
	this.statistics = this.videoData.statistics;
	this.snippet = this.videoData.snippet;
  }
}
