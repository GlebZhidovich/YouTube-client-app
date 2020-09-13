import { IVideo } from '../../shared/models/search-response.model';
import { videosActionsType, VideosActions, VideosLoadAction, VideosNameAction } from '../actions/videos.actions';

export const videosNode: string = 'videos';

export interface IVideosState {
  name: string;
  videos: IVideo[];
}

const initialState: IVideosState = {
  name: '',
  videos: [],
};

export const videosReducer: (state: IVideosState, action: VideosActions) => IVideosState =
  (state: IVideosState = initialState, action: VideosActions): IVideosState => {
  switch (action.type) {
    case videosActionsType.name:
      return {
        ...state,
        name: (action as VideosNameAction).payload.name,
      };
    case videosActionsType.load:
      return {
        ...state,
        videos: (action as VideosLoadAction).payload.videos,
      };
    default:
      return state;
  }
};
