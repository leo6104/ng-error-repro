import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideServerRendering } from '@angular/platform-server';

const AppBootstrap = () => bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering(),
    provideHttpClient(
      withFetch(),
    ),
  ],
});

export { AppBootstrap };
