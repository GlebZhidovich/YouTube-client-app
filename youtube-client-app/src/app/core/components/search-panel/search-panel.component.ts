import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';

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
export class SearchPanelComponent implements OnInit {
  public isFilter: boolean = false;

  @ViewChild('search', {static: true})
  private searchElem: ElementRef<HTMLInputElement>;

  constructor(private router: Router,
    private authService: AuthService) {}

  public isFilterShow(): void {
    if (this.authService.getIsAuth()) {
      this.isFilter = !this.isFilter;
    }
  }

  public searchVideo(event: MouseEvent | KeyboardEvent, elem: HTMLInputElement): void {
    if (elem.value !== '' &&
      (event instanceof MouseEvent || event.key === 'Enter')
      && this.authService.getIsAuth()
    ) {
      this.router.navigate([''], {
        queryParams: {
          videoName: elem.value,
        },
      });
      elem.value = '';
    }
  }

  public ngOnInit(): void {
    fromEvent(this.searchElem.nativeElement, 'keyup')
      .pipe(
        debounceTime(700),
        map((event: KeyboardEvent): string  => (event.target as HTMLInputElement).value),
        filter((str: string): boolean => str.length > 2),
      )
      .subscribe({
        next: console.log,
        error: console.log,
        complete: (): void => console.log('complete'),
      });
  }

}
