import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges, OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as data from '../../../shared/data.json';
import { IVideo } from '../../models/search-response.model';
import { SortService } from './sort.service';

interface IJson {
  default: {
	items: IVideo[];
  };
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [SortService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements  OnInit, OnChanges {
  public videosData: IVideo[];

  constructor(private ss: SortService,
  private router: ActivatedRoute) {
  }

  @Input() public videoName: string;
  @Input() public sort: string;
  @Input() public sortWord: string;

  public setVideosData(name: string): void {
  this.videosData = (data as unknown as IJson).default.items;
  }

  public sortBy(name: string): void {
  if (name) {
  this.videosData = this.ss.sort(name, this.videosData);
  }
  }

  public ngOnInit(): void {
  this.router.queryParams.subscribe((params: Params): void => {
  console.log(params);
  });
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
  if (data.currentValue) {
	this.setVideosData(data.currentValue);
  }
  }
  });
  }
}
