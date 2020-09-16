import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginComponent {

  constructor(public authService: AuthService) {
  }

}
