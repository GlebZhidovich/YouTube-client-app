import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  @Output() public getVideoName: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sb: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sbw: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cdr: ChangeDetectorRef) {

  }

  public getName(name: string): void {
  this.getVideoName.emit(name);
  }

  public sortBy(type: string): void {
	this.sb.emit(type);
  }

  public sortByWord(name: string): void {
  this.sbw.emit(name);
  }

}
