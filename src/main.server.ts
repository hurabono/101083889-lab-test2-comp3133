import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

export default function bootstrap() {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideServerRendering(),
      provideRouter(routes),
      importProvidersFrom(BrowserAnimationsModule, HttpClientModule),
    ],
  });
}
