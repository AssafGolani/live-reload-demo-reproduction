import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// EDIT THIS during the demo (e.g. 'v1' -> 'v2') to trigger a live-reload
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
  // 'auto' = browser restores scroll on reload; withExperimentalPlatformNavigation
  // leans on this native restoration instead of Angular's withInMemoryScrolling.
  protected readonly scrollRestoration = history.scrollRestoration;

  // Live scroll position, so the audience can watch where the page lands after a reload.
  protected readonly scrollY = signal(0);

  // Tall content so there is a real scroll offset to (fail to) restore.
  protected readonly sections = Array.from({ length: 12 }, (_, i) => i);

  @HostListener('window:scroll')
  protected onScroll() {
    this.scrollY.set(Math.round(window.scrollY));
  }

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
