import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withExperimentalPlatformNavigation } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // DEMO STEP: comment out the withExperimentalPlatformNavigation() argument below
    // to disable platform navigation, then re-test live-reload
    provideRouter(routes, withExperimentalPlatformNavigation()),
  ],
};
