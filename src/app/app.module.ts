import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Cmp1Component } from '../cmp1/cmp1.component';
import { Cmp2Component } from '../cmp2/cmp2.component';
import { LetDirective } from '../ng-let.directive';
import { Cmp3Component } from '../cmp3/cmp3.component';

@NgModule({
  imports: [
    BrowserModule,
    Cmp1Component,
    Cmp2Component,
    Cmp3Component,
    LetDirective,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
