import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, map, reduce, switchMap } from 'rxjs/operators';
import { IVideo } from '../../shared/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private videosData: IVideo[];

  constructor(
    private http: HttpClient,
  ) { }

  public loadVideo(name: string): Observable<IVideo[] | []> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBhdQAgLeAYO2Tey3oeoWZ2KAUu4asq_Fk&type=video&maxResults=15&q=${name}`)
      .pipe(
        switchMap((data: {items: IVideo[]}): Observable<object> => from(data.items)),
        map((obj: {id: {videoId: string}}): string => obj.id.videoId),
        reduce((a: string, b: string): string => `${a},${b}`),
        switchMap((group: string): Observable<Object> => this.loadVideoData(group)),
        map((data: {items: IVideo[]}): IVideo[] => data.items),
        catchError((err: string): [] => []),
        map((data: [] | IVideo[]): [] | IVideo[] => {
          this.videosData = data;
          return data;
        }),
      );
  }

  public loadVideoData(group: string): Observable<Object> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBhdQAgLeAYO2Tey3oeoWZ2KAUu4asq_Fk&id=${group}&part=snippet,statistics`);
  }

  public getVideoData(): Observable<IVideo[]> {
    return of(this.videosData);
  }

  public setVideoData(data: IVideo[]): void {
    this.videosData = data;
  }

  public getById(id: string): IVideo {
    if (this.videosData) {
      return this.videosData.find((data: IVideo): boolean => data.id === id);
    }
  }
}
