import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { DataService } from '../../core/services/data.service';
import { IVideo } from '../../shared/models/search-response.model';
import { videosActionsType, VideosLoadAction } from '../actions/videos.actions';

@Injectable()
export class VideosEffects {
  constructor(private action$: Actions,
              private dataService: DataService) {
  }

  @Effect()
  public load(): Observable<any> {
    return this.action$.pipe(
      ofType(videosActionsType.search),
      map((data: {payload: { name: string } }): string => data.payload.name),
      mergeMap((name: string): Observable<Object> => this.dataService.loadVideo(name)),
      map((data: IVideo[]): VideosLoadAction => new VideosLoadAction({
          videos: data,
        })),
    );
  }
}
