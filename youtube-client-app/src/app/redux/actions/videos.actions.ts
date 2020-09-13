import { Action } from '@ngrx/store';
import { IVideo } from '../../shared/models/search-response.model';

export enum videosActionsType {
  name = '[VIDEOS] name',
  load = '[VIDEOS] load',
}

export class VideosNameAction implements Action {
  public readonly type: string = videosActionsType.name;

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

export type VideosActions = VideosLoadAction | VideosNameAction;
