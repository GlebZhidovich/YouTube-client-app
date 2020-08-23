import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuth: boolean = false;

  constructor(private router: Router) {
  }

  public login(): void {
    this.isAuth = true;
    this.router.navigate(['']);
  }

  public getIsAuth(): boolean { return this.isAuth; }

  public isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean>) => void): void => {
      setTimeout((): void => {
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
