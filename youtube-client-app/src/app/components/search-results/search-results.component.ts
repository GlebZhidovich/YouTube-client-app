import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges, ViewChild,
} from '@angular/core';
import * as data from '../../../shared/data.json';
import { IVideo } from '../../models/search-response.model';

interface IJson {
  default: {
	items: IVideo[];
  };
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnChanges {
  public videosData: IVideo[];

  @Input() public videoName: string;
  @Input() public sort: string;

  public setVideosData(name: string): void {
  this.videosData = (data as unknown as IJson).default.items;
  }

  public sortBy(name: string): void {
	if (name) {
  if (name.includes('date')) {
	this.videosData
		.sort((a: IVideo, b: IVideo): number => {
		  if (name.includes('Up')) {
		return new Date(a.snippet.publishedAt).valueOf() - new Date(b.snippet.publishedAt).valueOf();
		} else {
		return new Date(b.snippet.publishedAt).valueOf() - new Date(a.snippet.publishedAt).valueOf();
		}
	});
  } else {
  this.videosData
	.sort((a: IVideo, b: IVideo): number => {
		if (name.includes('Up')) {
		return parseInt(a.statistics.viewCount, 10) - parseInt(b.statistics.viewCount, 10);
		} else {
		return parseInt(b.statistics.viewCount, 10) - parseInt(a.statistics.viewCount, 10);
		}
  });
	}
   }
  }

  public ngOnChanges(changes: SimpleChanges): void {
  const data: [string, SimpleChange][] = Object.entries(changes);
  data.forEach((arr: [string, SimpleChange]): void => {
  const [name, data]: [string, SimpleChange] = arr;
  if (name === 'sort') {
  if (this.videosData) {
  this.sortBy(data.currentValue);
  }
  }
  if (name === 'videoName') {
  if (data.currentValue) { this.setVideosData(data.currentValue); }
  }
  });
  }
}
