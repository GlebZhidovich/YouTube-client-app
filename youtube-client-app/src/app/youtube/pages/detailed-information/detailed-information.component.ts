import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { IVideosState } from '../../../redux/reducers/videos.reducer';
import { selectVideos } from '../../../redux/selectors/videos.selectors';
import { IVideo } from '../../../shared/models/search-response.model';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit, OnDestroy {

  public videoData: IVideo;
  public video$: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store$: Store<IVideosState>,
  ) { }

  public ngOnInit(): void {
    this.route.params.subscribe((params: {id: string}): void => {
      const { id }: { id: string } = params;
      this.video$ = this.store$.pipe(
        select(selectVideos),
        map((arr: IVideo[]): IVideo => arr.find((el: IVideo): boolean => el.id === id)),
      ).subscribe({
        next: (value: IVideo): void => {
          this.videoData = value;
        },
        error: (err: any): void => {
          this.router.navigate(['error']);
        },
      });
    });
  }

  public ngOnDestroy(): void {
    this.video$.unsubscribe();
  }

}
