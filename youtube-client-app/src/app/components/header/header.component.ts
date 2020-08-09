import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  @Output() public getVideoName: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cdr: ChangeDetectorRef) {

  }

  public getName(name: string): void {
  this.getVideoName.emit(name);
  }
}
