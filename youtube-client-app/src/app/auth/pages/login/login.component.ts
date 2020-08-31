import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public isAuth: Observable<boolean>;

  constructor(public auth: AuthService) {
    this.isAuth = auth.isAuthenticated2();
  }

  public ngOnInit(): void {
  }

}
