import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { ICustomVideo, IVideo } from '../../shared/models/search-response.model';
import { videosNode, IVideosState } from '../reducers/videos.reducer';

export const selectVideosFeature: MemoizedSelector<object, IVideosState> = createFeatureSelector<IVideosState>(videosNode);

export const selectVideos: MemoizedSelector<object, IVideo[]> = createSelector(
  selectVideosFeature,
  (state: IVideosState): IVideo[] => state.videos,
);

export const selectCustomVideos: MemoizedSelector<object, ICustomVideo[]> = createSelector(
  selectVideosFeature,
  (state: IVideosState): ICustomVideo[] => state.customVideos,
);

export const selectLoading: MemoizedSelector<object, boolean> = createSelector(
  selectVideosFeature,
  (state: IVideosState): boolean => state.loading,
);

export const selectError: MemoizedSelector<object, string> = createSelector(
  selectVideosFeature,
  (state: IVideosState): string => state.error,
);
