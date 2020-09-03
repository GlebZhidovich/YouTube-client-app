import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortPanelComponent {
  private date: string = 'Up';
  private view: string = 'Up';

  @Output() public sb: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sbw: EventEmitter<string> = new EventEmitter<string>();

  public sortBy(type: string): void {
  this[type] = this[type] === 'Up' ? 'Down' : 'Up';
  this.sb.emit(type + this[type]);
  }

  public sortByWord(name: HTMLInputElement): void {
  if (name.value !== '') {
  this.sbw.emit(name.value);
  name.value = '';
  }
  }
}
