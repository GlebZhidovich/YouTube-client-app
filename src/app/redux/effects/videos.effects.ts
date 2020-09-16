import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { catchError, map, mergeMap, pluck, switchMap, tap } from 'rxjs/operators';
import { DataService } from '../../core/services/data.service';
import { IVideo } from '../../shared/models/search-response.model';
import {
  videosActionsType,
  VideosLoadFailedAction,
  VideosLoadSuccessAction,
} from '../actions/videos.actions';

@Injectable()
export class VideosEffects {
  constructor(private action$: Actions,
              private dataService: DataService) {
  }

  @Effect()
  public load(): Observable<any> {
    return this.action$.pipe(
      ofType(videosActionsType.load),
      pluck('payload', 'name'),
      switchMap((name: string): Observable<Object> => {
        return this.dataService.loadVideo(name).pipe(
          map((data: IVideo[]): VideosLoadSuccessAction => new VideosLoadSuccessAction({
            videos: data,
          })),
          catchError((err: Error): Observable<VideosLoadFailedAction> => of(new VideosLoadFailedAction({
            error: err.name,
          }))),
        );
      }),
    );
  }
}
