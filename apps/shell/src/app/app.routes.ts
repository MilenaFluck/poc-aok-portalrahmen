import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'remote1',  // Route to load app2 as a microfrontend
    loadChildren: () => import('remote1/Routes').then(m => m.remoteRoutes)  // Load remote1 dynamically
  },
  {
    path: 'remote2',  // Route to load app2 as a microfrontend
    loadChildren: () => import('remote2/Routes').then(m => m.remoteRoutes)  // Load remote2 dynamically
  },
  {
    path: '',
    redirectTo: 'remote1',
    pathMatch: 'full'
  },
];
