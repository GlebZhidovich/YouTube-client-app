import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideo } from '../../shared/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private videosData: IVideo[];

  constructor(
    private http: HttpClient,
  ) { }

  public loadVideo(name: string): Observable<Object> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBhdQAgLeAYO2Tey3oeoWZ2KAUu4asq_Fk&type=video&maxResults=15&q=${'js'}`);
  }

  public loadVideoData(group: string): Observable<Object> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBhdQAgLeAYO2Tey3oeoWZ2KAUu4asq_Fk&id=${group}&part=snippet,statistics`);
  }

  public getVideoData(): IVideo[] {
    return this.videosData;
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
