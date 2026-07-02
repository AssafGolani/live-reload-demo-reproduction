import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withExperimentalPlatformNavigation } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // DEMO STEP: withExperimentalPlatformNavigation() delegates scroll/focus restoration
    // to the browser's native Navigation API. Comment out the argument below to fall back
    // to the plain History API, then re-test the live-reload scroll behavior and compare.
    // (The non-experimental equivalent for scroll restoration is withInMemoryScrolling().)
    provideRouter(routes, withExperimentalPlatformNavigation()),
  ],
};
