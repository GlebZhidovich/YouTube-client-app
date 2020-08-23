import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  Input,
  OnChanges, OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as data from '../../../../shared/data.json';
import { IVideo } from '../../../models/search-response.model';
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
export class SearchResultsComponent implements  OnInit {
  public videosData: IVideo[];
  public videoName: string;
  public sort: string;
  public sortWord: string;

  constructor(
    private sortService: SortService,
    private router: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
  }

  public setVideosData(name: string): void {
    this.videosData = (data as unknown as IJson).default.items;
    this.cdr.detectChanges();
  }

  public sortBy(arr: [string, string]): void {
    if (arr && this.videosData) {
      if (arr[0] === 'word') {
        this.sortWord = arr[1];
      } else {
        this.videosData = this.sortService.sort(arr, this.videosData);
      }
      this.cdr.detectChanges();
    }
  }

  public ngOnInit(): void {
    this.router.queryParams.subscribe((params: Params): void => {
      Object.entries(params).forEach(([name, value]: [string, string]): void => {
        if (name === 'videoName') {
          this.setVideosData(value);
        }
        if (name === 'date' ||
            name === 'view' ||
            name === 'word'
          ) {
          this.sortBy([name, value]);
        }
      });
    });
  }
}
