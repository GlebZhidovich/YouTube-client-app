import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
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
export class SearchPanelComponent {
  public isFilter: boolean = false;

  constructor(public authService: AuthService) {}

  public isFilterShow(): void {
    if (this.authService.getIsAuth()) {
      this.isFilter = !this.isFilter;
    }
  }

}
