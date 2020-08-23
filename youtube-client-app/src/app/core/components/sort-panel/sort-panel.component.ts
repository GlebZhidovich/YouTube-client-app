import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortPanelComponent {
  private date: string = 'up';
  private view: string = 'up';
  public isDate: boolean = false;
  public isView: boolean = false;
  public isWord: boolean = false;

  constructor(private router: Router) {
  }

  public sortBy(type: string): void {
    if (!this[`is${capitalize(type)}`]) {
      this[`is${capitalize(type)}`] = !this[`is${capitalize(type)}`];
    }
    this[type] = this[type] === 'up' ? 'down' : 'up';
    this.router.navigate([''], {
      queryParams: {
        [type]: this[type],
      },
    });
  }

  public sortByWord(event: MouseEvent | KeyboardEvent, name: HTMLInputElement): void {
    if (
      (event instanceof MouseEvent || event.key === 'Enter')
    ) {
      console.log(event);
      this.router.navigate([''], {
        queryParams: {
          word: name.value,
        },
      });
    }
  }
}

function capitalize(s: string) {
  if (typeof s !== 'string') {
    return '';
  };
  return s[0].toUpperCase() + s.substring(1);
}
