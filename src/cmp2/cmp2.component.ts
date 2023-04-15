import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'cmp-2',
  templateUrl: './cmp2.component.html',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class Cmp2Component {
  request$ = this.http.get<{ data: any[]}>('https://reqres.in/api/users');

  constructor(
    private http: HttpClient,
  ) {
  }

}
