import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cmp-1',
  templateUrl: './cmp1.component.html',
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class Cmp1Component {
  loading: boolean;
}
