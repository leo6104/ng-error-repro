import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Cmp2Component } from '../cmp2/cmp2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  @ViewChild('fabWrapperContainer', { read: ViewContainerRef }) fabContainer: ViewContainerRef;

  title = 'my-universal-app';

  ngAfterViewInit() {
    this.fabContainer.createComponent(Cmp2Component);
  }
}
