import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService } from '../../../core/services/data.service';
import { VideosNameAction } from '../../../redux/actions/videos.actions';
import { IVideosState } from '../../../redux/reducers/videos.reducer';
import { selectVideos } from '../../../redux/selectors/videos.selectors';
import { IVideo } from '../../../shared/models/search-response.model';
import { capitalize } from '../../../shared/shared';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {
  public videos$: Observable<IVideo[]> = this.store$.pipe(select(selectVideos));
  public videoName: string;
  public sort: string;
  public sortWord: string;
  public sortDate: string;
  public sortView: string;

  constructor(
    private router: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private dataService: DataService,
    private store$: Store<IVideosState>,
  ) {
  }

  public sortBy(arr: [string, string]): void {
    const [type, name]: [string, string] = arr;
    const sort: (type: string, name: string) => string =
      (type: string, name: string): string => this[`sort${capitalize(type)}`] = name;
    sort(type, name);
    this.cdr.detectChanges();
  }

  public ngOnInit(): void {
    this.router.queryParams.subscribe((params: Params): void => {
      Object.entries(params).forEach(([name, value]: [string, string]): void => {
        if (name === 'videoName') {
          this.store$.dispatch(new VideosNameAction({
            name: value,
          }));
        }
        if (['date', 'view', 'word'].includes(name)) {
          this.sortBy([name, value]);
        }
      });
    });
  }
}
