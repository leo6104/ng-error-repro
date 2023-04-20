import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'cmp-3',
  templateUrl: './cmp3.component.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  host: {
    ngSkipHydration: 'true',
  }
})
export class Cmp3Component {
  request$ = this.http.get<{ data: any[]}>('https://reqres.in/api/users');

  constructor(
    private http: HttpClient,
  ) {
  }

}
