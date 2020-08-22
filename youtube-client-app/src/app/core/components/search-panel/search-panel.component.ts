import { animate, group, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';

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
export class SearchPanelComponent {
  public isFilter: boolean = false;

  constructor(private router: Router) {
  }

  @ViewChild('search', { static: true })
  private input: ElementRef<HTMLInputElement>;

  @Output() public sb: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sbw: EventEmitter<string> = new EventEmitter<string>();

  public isFilterShow(): void {
  this.isFilter = !this.isFilter;
  }

  public searchVideo(): void {
  const elem: HTMLInputElement = this.input.nativeElement;
  this.router.navigate(['', {
  queryParams: {
  name: elem.value,
  },
  }]);
  elem.value = '';
  }

  public sortBy(type: string): void {
	this.sb.emit(type);
  }

  public sortByWord(name: string): void {
  this.sbw.emit(name);
  }
}
