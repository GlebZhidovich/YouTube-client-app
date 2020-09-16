import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { AuthService } from '../../shared/services/auth.service';

@Directive({
  selector: '[appSearch]',
})
export class SearchDirective implements OnInit, OnDestroy {

  private search$: Subscription;

  constructor(private searchElem: ElementRef,
              private router: Router,
              public authService: AuthService) {
  }

  private searchVideo(value: string): void {
    if (this.authService.getIsAuth()) {
      this.router.navigate(['/youtube'], {
        queryParams: {
          videoName: value,
        },
      });
    }
  }

  public ngOnInit(): void {
    this.search$ = fromEvent(this.searchElem.nativeElement, 'keyup')
      .pipe(
        debounceTime(700),
        map((event: KeyboardEvent): string => (event.target as HTMLInputElement).value),
        filter((str: string): boolean => str.length > 2),
        distinctUntilChanged(),
      )
      .subscribe({
        next: (name: string): void => {
          this.searchVideo(name);
        },
      });
  }

  public ngOnDestroy(): void {
    this.search$.unsubscribe();
  }
}
