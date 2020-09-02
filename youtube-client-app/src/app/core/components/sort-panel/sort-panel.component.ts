import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { capitalize } from '../../../shared/shared';

enum sorting {
  up = 'up',
  down = 'down',
}

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortPanelComponent {
  private date: string = sorting.up;
  private view: string = sorting.up;
  public isDate: boolean = false;
  public isView: boolean = false;
  public isWord: boolean = false;

  constructor(private router: Router) {
  }

  public sortBy(type: string): void {
    if (!this[`is${capitalize(type)}`]) {
      this[`is${capitalize(type)}`] = !this[`is${capitalize(type)}`];
    }
    this[type] = this[type] === sorting.up ? sorting.down : sorting.up;
    this.router.navigate(['/youtube'], {
      queryParams: {
        [type]: this[type],
      },
    });
  }

  public sortByWord(event: MouseEvent | KeyboardEvent, name: HTMLInputElement): void {
    if (
      (event instanceof MouseEvent || event.key === 'Enter')
    ) {
      this.router.navigate(['/youtube'], {
        queryParams: {
          word: name.value,
        },
      });
    }
  }
}
