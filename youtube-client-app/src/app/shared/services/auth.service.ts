import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscriber, TeardownLogic } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {

  public isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  public login(): void {
    localStorage.setItem('auth', 'true');
    this.router.navigate(['/youtube']);
  }

  public logout(): void {
    localStorage.removeItem('auth');
    this.isAuth.next(false);
    this.router.navigate(['/auth']);
  }

  public getIsAuth(): boolean {
    return !!localStorage.getItem('auth');
  }

  public isAuthenticated(): Observable<boolean> {
    return new Observable((subscriber: Subscriber<boolean>): TeardownLogic => {
      if (localStorage.getItem('auth')) {
        subscriber.next(true);
      } else {
        subscriber.next(false);
      }
      subscriber.complete();
    }).pipe(
      delay(1000),
    );
  }
}
