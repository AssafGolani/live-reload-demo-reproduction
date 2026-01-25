import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dmeo-livereload-repro');

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
