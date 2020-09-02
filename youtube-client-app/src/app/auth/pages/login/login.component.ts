import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public isAuth: Observable<boolean>;

  constructor(private auth: AuthService) {
    this.isAuth = auth.isAuthenticated();
  }

}
