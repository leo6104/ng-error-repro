import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cmp-2',
  templateUrl: './cmp2.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class Cmp2Component {
  label: string = 'test';
  link: string[];
}
