import { ICustomVideo, IVideo } from '../../shared/models/search-response.model';
import {
  videosActionsType,
  VideosActions,
  VideosAddCustomAction,
  VideosLoadFailedAction,
  VideosLoadSuccessAction,
} from '../actions/videos.actions';

export const videosNode: string = 'videos';

export interface IVideosState {
  loading: boolean;
  error: string;
  videos: IVideo[];
  customVideos: ICustomVideo[];
}

const initialState: IVideosState = {
  loading: false,
  error: null,
  videos: [],
  customVideos: [],
};

export const videosReducer: (state: IVideosState, action: VideosActions) => IVideosState =
  (state: IVideosState = initialState, action: VideosActions): IVideosState => {
    switch (action.type) {
      case videosActionsType.load:
        return {
          ...state,
          loading: true,
        };
      case videosActionsType.success:
        return {
          ...state,
          loading: false,
          videos: (action as VideosLoadSuccessAction).payload.videos,
        };
      case videosActionsType.error:
        return {
          ...state,
          loading: false,
          error: (action as VideosLoadFailedAction).payload.error,
        };
      case videosActionsType.addCustom:
        return {
          ...state,
          customVideos: [
            ...state.customVideos,
            (action as VideosAddCustomAction).payload.video,
          ],
        };
      default:
        return state;
    }
  };
