import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as data from '../../../shared/data.json';
import { IVideo } from '../../shared/models/search-response.model';

interface IJson {
  default: {
    items: IVideo[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private readonly videosData: IVideo[];

  constructor() {
    this.videosData = (data as unknown as IJson).default.items;
  }

  public loadVideoData(): Observable<IVideo[]> {
    return new Observable((observer: any): void => {
      setTimeout((): void => {
        observer.next(this.videosData);
        observer.complete();
      }, 1000);
    });
  }

  public getVideoData(): IVideo[] {
    return this.videosData;
  }

  public getById(id: string): IVideo {
    return this.videosData.find((data: IVideo): boolean => data.id === id);
  }
}
