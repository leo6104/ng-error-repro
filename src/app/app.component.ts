import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Cmp3Component } from '../cmp3/cmp3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  @ViewChild('fabWrapperContainer', { read: ViewContainerRef }) fabContainer: ViewContainerRef;

  title = 'my-universal-app';

  ngAfterViewInit() {
    this.fabContainer.createComponent(Cmp3Component);
  }
}
