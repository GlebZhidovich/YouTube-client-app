import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../../core/services/data.service';
import { IVideo } from '../../../shared/models/search-response.model';

interface ITypes {
  date(type: string, name: string): string;
  word(type: string, name: string): string;
  view(type: string, name: string): string;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements  OnInit {
  public videosData: IVideo[];
  public videoName: string;
  public sort: string;
  public sortWord: string;
  public sortDate: string;
  public sortView: string;

  constructor(
    private router: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private dataService: DataService,
  ) {
  }

  public setVideosData(name: string): void {
    const source: Subscription =  this.dataService.loadVideoData()
      .subscribe((data: IVideo[]): void => {
      this.videosData = data;
      this.cdr.detectChanges();
      source.unsubscribe();
    });
  }

  public sortBy(arr: [string, string]): void {
    const sort: (type: string, name: string) => string =
      (type: string, name: string): string =>  this[`sort${capitalize(type)}`] = name;
    const types: ITypes = {
      date: sort,
      word: sort,
      view: sort,
    };
    const [type, name]: [string, string] = arr;
    if (arr && this.videosData) {
      if (types.hasOwnProperty(type)) {
        types[type](type, name);
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

function capitalize(s: string): string {
  if (typeof s !== 'string') {
    return '';
  }
  return s[0].toUpperCase() + s.substring(1);
}