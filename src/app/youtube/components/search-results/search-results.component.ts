import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, OnDestroy,
  OnInit,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../../../core/services/data.service';
import { VideosLoadAction } from '../../../redux/actions/videos.actions';
import { IVideosState } from '../../../redux/reducers/videos.reducer';
import {
  selectCustomVideos,
  selectError,
  selectLoading,
  selectVideos,
} from '../../../redux/selectors/videos.selectors';
import { ICustomVideo, IVideo } from '../../../shared/models/search-response.model';
import { capitalize } from '../../../shared/shared';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public error$: Subscription;
  public loading$: Observable<boolean> = this.store$.pipe(select(selectLoading));
  public videos$: Observable<IVideo[]> = this.store$.pipe(select(selectVideos));
  public customVideos$: Observable<ICustomVideo[]> = this.store$.pipe(select(selectCustomVideos));
  public videoName: string;
  public sort: string;
  public sortWord: string;
  public sortDate: string;
  public sortView: string;

  constructor(
    private router: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private dataService: DataService,
    private snackBar: MatSnackBar,
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

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public ngOnInit(): void {
    this.error$ = this.store$.pipe(select(selectError)).subscribe({
      next: (message: string): void => {
        if (message) {
          this.openSnackBar(message, 'error');
        }
      },
    });
    this.router.queryParams.subscribe((params: Params): void => {
      Object.entries(params).forEach(([name, value]: [string, string]): void => {
        if (name === 'videoName') {
          this.store$.dispatch(new VideosLoadAction({
            name: value,
          }));
        }
        if (['date', 'view', 'word'].includes(name)) {
          this.sortBy([name, value]);
        }
      });
    });
  }

  public ngOnDestroy(): void {
    this.error$.unsubscribe();
  }
}
