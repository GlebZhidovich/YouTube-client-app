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
  customVideos: [
  //   {
  //   title: 'Angular 8 - Быстрый курс за 60 минут',
  //   description: 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут',
  //   imgLink: 'https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg',
  //   videoLink: 'https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg',
  //   date: `${new Date()}`,
  // },
  ],
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
