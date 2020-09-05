import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { capitalize } from '../../../shared/shared';

enum Sorting {
  up = 'up',
  down = 'down',
}

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortPanelComponent implements OnInit, OnDestroy {
  private date: string = Sorting.up;
  private view: string = Sorting.up;
  public isDate: boolean = false;
  public isView: boolean = false;
  public isWord: boolean = false;
  private sort$: Subscription;

  @ViewChild('input', {static: true})
  private inputRef: ElementRef;

  constructor(private router: Router) {
  }

  public sortBy(type: string): void {
    if (!this[`is${capitalize(type)}`]) {
      this[`is${capitalize(type)}`] = !this[`is${capitalize(type)}`];
    }
    this[type] = this[type] === Sorting.up ? Sorting.down : Sorting.up;
    this.router.navigate(['/youtube'], {
      queryParams: {
        [type]: this[type],
      },
    });
  }

  public sortByWord(value: string): void {
    this.router.navigate(['/youtube'], {
      queryParams: {
        word: value,
      },
    });
  }

  public ngOnInit(): void {
    this.sort$ = fromEvent(this.inputRef.nativeElement, 'keyup')
      .pipe(
        map((event: KeyboardEvent): string => (event.target as HTMLInputElement).value),
        distinctUntilChanged(),
      )
      .subscribe(
        (value: string): void => {
          this.sortByWord(value);
        },
      );
  }

  public ngOnDestroy(): void  {
    this.sort$.unsubscribe();
  }
}
