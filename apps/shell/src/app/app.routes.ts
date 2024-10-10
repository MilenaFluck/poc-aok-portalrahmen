import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'remote1',  // Route to load remote1 as a microfrontend
    loadChildren: () => import('remote1/Routes').then(m => m.remoteRoutes),  // Load remote1 dynamically
  },
  {
    path: 'remote1',  // Route to load remote1 as a microfrontend
    loadChildren: () => import('remote1/Routes').then(m => m.remoteRoutes),  // Load remote1 dynamically
    outlet: 'microfrontend2',
  },
  {
    path: 'remote2',  // Route to load remote2 as a microfrontend
    loadChildren: () => import('remote2/Routes').then(m => m.remoteRoutes),  // Load remote2 dynamically
  },
  {
    path: 'remote2',  // Route to load remote1 as a microfrontend
    loadChildren: () => import('remote2/Routes').then(m => m.remoteRoutes),  // Load remote1 dynamically
    outlet: 'microfrontend2',
  },
  {
    path: 'remote4',  // Route to load remote4 as a microfrontend
    loadChildren: () => import('remote4/Routes').then(m => m.remoteRoutes),   // Load remote1 dynamically
  },
  {
    path: 'remote4',  // Route to load remote4 as a microfrontend
    loadChildren: () => import('remote4/Routes').then(m => m.remoteRoutes),   // Load remote1 dynamically
    outlet: 'microfrontend2',
  },
  {
    path: '',
    redirectTo: 'remote1',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'remote4', // Redirect named outlet to remote4
    pathMatch: 'full',
    outlet: 'microfrontend2', // This targets the named outlet
  },
];
