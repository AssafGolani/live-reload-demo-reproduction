# DmeoLivereloadRepro

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.1.

## Live demo steps

`withExperimentalPlatformNavigation()` makes the router delegate **scroll and focus
restoration to the browser's native Navigation API** instead of Angular's
`withInMemoryScrolling`. The gotcha: when the dev server live-reloads (a full page reload),
the browser attempts to restore your scroll position *before* Angular has re-rendered the
page, so the scroll behavior differs from a plain History-API build.

The home page is a tall, scrollable surface with a fixed HUD showing the bootstrap time,
the current `Scroll Y`, `history.scrollRestoration`, and whether the Navigation API is
available — so the behavior is visible on a projector.

1. Run `npm start` (`ng serve --live-reload=true`) and open `http://localhost:4200` in a Chromium browser (the Navigation API is Chromium-only).
2. Scroll down to one of the coloured bands and note the **Scroll Y** readout in the HUD.
3. Edit `DEMO_MARKER` in `src/app/app.ts` (e.g. `'v1'` → `'v2'`) and save to trigger a live-reload. Watch where the page lands and whether **Bootstrapped at** changed.
4. Comment out `withExperimentalPlatformNavigation()` in `src/app/app.config.ts`, repeat, and compare the scroll behavior between the two builds.

## Development server

To start a local development server, run:

```bash
ng serve --live-reload=true
OR
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
