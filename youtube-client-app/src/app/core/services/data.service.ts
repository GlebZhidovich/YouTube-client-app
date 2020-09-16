import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, reduce, switchMap } from 'rxjs/operators';
import { key } from '../../../../key';
import { IVideo } from '../../shared/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public loadVideo(name: string): Observable<IVideo[]> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&maxResults=15&q=${name}`)
      .pipe(
        switchMap((data: { items: IVideo[] }): Observable<object> => from(data.items)),
        map((obj: { id: { videoId: string } }): string => obj.id.videoId),
        reduce((a: string, b: string): string => `${a},${b}`),
        switchMap((group: string): Observable<Object> => this.loadVideoData(group)),
        map((data: { items: IVideo[] }): IVideo[] => data.items),
      );
  }

  public loadVideoData(group: string): Observable<Object> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?key=${key}&id=${group}&part=snippet,statistics`);
  }

}
