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

  public setVideosData(name: IVideo[]): void {
  this.videosData = (data as unknown as IJson).default.items;
  }

  public ngOnChanges(changes: SimpleChanges): void {
  const data: [string, SimpleChange][] = Object.entries(changes);
  data.forEach((arr: [string, SimpleChange]): void => {
  const [name, data]: [string, SimpleChange] = arr;
  if (name === 'videoName') {
  if (data.currentValue) { this.setVideosData(data.currentValue); }
  }
  });
  }
}
