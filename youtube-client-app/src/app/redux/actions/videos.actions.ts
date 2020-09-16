import { Action } from '@ngrx/store';
import { ICustomVideo, IVideo } from '../../shared/models/search-response.model';

export enum videosActionsType {
  load = '[VIDEOS] load',
  success = '[VIDEOS] search',
  error = '[VIDEOS] error',
  addCustom = '[VIDEOS] add custom',
}

export class VideosLoadAction implements Action {
  public readonly type: string = videosActionsType.load;

  constructor(public payload: {
    name: string
  }) {
  }
}

export class VideosLoadSuccessAction implements Action {
  public readonly type: string = videosActionsType.success;

  constructor(public payload: {
    videos: IVideo []
  }) {
  }
}

export class VideosLoadFailedAction implements Action {
  public readonly type: string = videosActionsType.error;

  constructor(public payload: {
    error: string
  }) {
  }
}

export class VideosAddCustomAction implements Action {
  public readonly type: string = videosActionsType.addCustom;

  constructor(public payload: {
    video: ICustomVideo
  }) {
  }
}

export type VideosActions = VideosLoadAction
  | VideosLoadSuccessAction
  | VideosLoadFailedAction
  | VideosAddCustomAction;
