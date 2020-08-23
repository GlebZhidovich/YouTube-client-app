import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

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

  constructor(private router: Router,
    private authService: AuthService) {}

  public isFilterShow(): void {
    if (this.authService.getIsAuth()) {
      this.isFilter = !this.isFilter;
    }
  }

  public searchVideo(event: MouseEvent | KeyboardEvent, elem: HTMLInputElement): void {
    if (elem.value !== '' &&
      (event instanceof MouseEvent || event.key === 'Enter') &&
      this.authService.getIsAuth()
    ) {
      this.router.navigate([''], {
        queryParams: {
          videoName: elem.value,
        },
      });
      elem.value = '';
    }
  }

}
