import { Action } from '@ngrx/store';
import { ICustomVideo, IVideo } from '../../shared/models/search-response.model';

export enum videosActionsType {
  search = '[VIDEOS] search',
  load = '[VIDEOS] load',
  addCustom = '[VIDEOS] add custom',
}

export class VideosSearchAction implements Action {
  public readonly type: string = videosActionsType.search;

  constructor(public payload: {
    name: string
  }) {
  }
}

export class VideosLoadAction implements Action {
  public readonly type: string = videosActionsType.load;

  constructor(public payload: {
    videos: IVideo[]
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

export type VideosActions = VideosLoadAction | VideosSearchAction | VideosAddCustomAction;
