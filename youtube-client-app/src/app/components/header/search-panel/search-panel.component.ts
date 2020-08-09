import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
  animations: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPanelComponent {
  public isFilter: boolean = false;

  @ViewChild('search', { static: true })
  private input: ElementRef<HTMLInputElement>;

  @Output() public getName: EventEmitter<string> = new EventEmitter<string>();

  public isFilterShow(): void {
  this.isFilter = !this.isFilter;
  }

  public searchVideo(): void {
  const elem: HTMLInputElement = this.input.nativeElement;
  const value: string = elem.value;
  this.getName.emit(value);
  elem.value = '';
  }

}
