import {
  createFeatureSelector,
  createSelector,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { videosNode, videosReducer, IVideosState } from './reducers/videos.reducer';

export interface IState {
  videos: IVideosState;
}

export const reducers: ActionReducerMap<IState> = {
  videos: videosReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
