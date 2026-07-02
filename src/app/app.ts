import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// EDIT THIS during the demo (e.g. 'v1' -> 'v2') to trigger a rebuild
const DEMO_MARKER = 'v1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dmeo-livereload-repro');

  protected readonly demoMarker = DEMO_MARKER;
  protected readonly bootstrappedAt = new Date().toLocaleTimeString();
  protected readonly hasNavigationApi = 'navigation' in window;

  constructor() {
    // ============================================================================
    // LIVE-RELOAD TEST: withExperimentalPlatformNavigation
    // ============================================================================
    console.log('Test');
    console.log('Comment the this line and reload');
    console.log(
      'Then comment the withExperimentalPltaformNavigation in app.config.ts and test again',
    );
  }
}
