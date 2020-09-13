import { animate, style, transition, trigger } from '@angular/animations';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { IVideosState } from '../../../redux/reducers/videos.reducer';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('open-close', [
      transition(':enter', [
        style({
          height: 0,
        }),
        animate('500ms ease-in'),
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({
          height: 0,
        })),
      ]),
    ]),
  ],
})
export class SearchPanelComponent implements OnInit, OnDestroy {
  public isFilter: boolean = false;
  private search$: Subscription;

  @ViewChild('search', {static: true})
  private searchElem: ElementRef<HTMLInputElement>;

  constructor(private router: Router,
    public authService: AuthService) {}

  public isFilterShow(): void {
    if (this.authService.getIsAuth()) {
      this.isFilter = !this.isFilter;
    }
  }

  private searchVideo(value: string): void {
    if (this.authService.getIsAuth()) {
      this.router.navigate(['/youtube'], {
        queryParams: {
          videoName: value,
        },
      });
    }
  }

  public ngOnInit(): void {
    if (this.searchElem) {
      this.search$ = fromEvent(this.searchElem.nativeElement, 'keyup')
        .pipe(
          debounceTime(700),
          map((event: KeyboardEvent): string  => (event.target as HTMLInputElement).value),
          filter((str: string): boolean => str.length > 2),
          distinctUntilChanged(),
        )
        .subscribe({
          next: (name: string): void => {
            this.searchVideo(name);
          },
        });
    }
  }

  public ngOnDestroy(): void {
    this.search$.unsubscribe();
  }
}
