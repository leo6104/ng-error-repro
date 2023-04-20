import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  test: string = isPlatformServer(this.platformId) ? 'server' : 'client';
  test$ = of('test').pipe(
    tap((t) => this.test = t),
  );

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
  }

  ngOnInit() {
    this.test$.subscribe();
  }
}
