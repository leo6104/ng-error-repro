import { Component, HostBinding, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'cmp-1',
  templateUrl: './cmp1.component.html',
  standalone: true,
  imports: [
    NgIf
  ]
})
export class Cmp1Component {
  @Input() sheetId: number;
  @Input() sheet: any;
  @Input() cartSuccessAction: 'move' | 'open' = 'open';
  @Input() currentUser: any;
  @Input() isVideo: boolean = false;
  @Input() relatedProducts: any;
  @HostBinding('class.loading') @Input() loading: boolean;
}
