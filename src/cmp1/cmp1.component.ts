import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs';

@Component({
  selector: 'cmp-1',
  templateUrl: './cmp1.component.html',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class Cmp1Component {
  request$ = this.http.get<{ data: any[]}>('https://reqres.in/api/users');
  constructor(
    private http: HttpClient
  ) {
  }

}
