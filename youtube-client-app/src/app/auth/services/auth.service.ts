import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private router: Router) {
  }

  public login(): void {
    localStorage.setItem('auth', 'true');
    this.router.navigate(['']);
  }

  public logout(): void {
    localStorage.removeItem('auth');
    this.router.navigate(['auth']);
  }

  public getIsAuth(): boolean {
    return !!localStorage.getItem('auth');
  }

  public isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean>) => void): void => {
      setTimeout((): void => {
        if (localStorage.getItem('auth')) {
          resolve(true);
        }
        resolve(false);
      }, 1000);
    });
  }
}
