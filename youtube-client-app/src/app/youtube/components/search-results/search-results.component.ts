import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../../core/services/data.service';
import { IVideo } from '../../../shared/models/search-response.model';
import { capitalize } from '../../../shared/shared';

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
  public videosData: Observable<IVideo[] | []>;
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
    this.videosData = this.dataService.loadVideo(name);
    this.cdr.detectChanges();
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
    if (this.dataService.getVideoData()) {
      this.videosData = this.dataService.getVideoData();
    }
    this.router.queryParams.subscribe((params: Params): void => {
      Object.entries(params).forEach(([name, value]: [string, string]): void => {
        if (name === 'videoName') {
          this.setVideosData(value);
        }
        if (['date', 'view', 'word'].includes(name)) {
          this.sortBy([name, value]);
        }
      });
    });
  }
}
