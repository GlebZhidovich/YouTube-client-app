import { ICustomVideo, IVideo } from '../../shared/models/search-response.model';
import {
  videosActionsType,
  VideosActions,
  VideosAddCustomAction,
  VideosLoadAction,
  VideosSearchAction,
} from '../actions/videos.actions';

export const videosNode: string = 'videos';

export interface IVideosState {
  name: string;
  videos: IVideo[];
  customVideos: ICustomVideo[];
}

const initialState: IVideosState = {
  name: '',
  videos: [],
  customVideos: [],
};

export const videosReducer: (state: IVideosState, action: VideosActions) => IVideosState =
  (state: IVideosState = initialState, action: VideosActions): IVideosState => {
  switch (action.type) {
    case videosActionsType.search:
      return {
        ...state,
        name: (action as VideosSearchAction).payload.name,
      };
    case videosActionsType.load:
      return {
        ...state,
        videos: (action as VideosLoadAction).payload.videos,
      };
    case videosActionsType.addCustom:
      return {
        ...state,
        customVideos: [...state.customVideos, (action as VideosAddCustomAction).payload.video],
      };
    default:
      return state;
  }
};
