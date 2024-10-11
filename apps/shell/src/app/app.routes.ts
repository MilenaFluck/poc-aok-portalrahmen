import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'remote1',
    loadChildren: () => loadRemoteModule('remote1', './Routes').then(m => m.remoteRoutes),
  },
  {
    path: 'remote1',
    loadChildren: () => loadRemoteModule('remote1', './Routes').then(m => m.remoteRoutes),
    outlet: 'microfrontend2',
  },
  {
    path: 'remote2',
    loadChildren: () => loadRemoteModule('remote2', './Routes').then(m => m.remoteRoutes),
  },
  {
    path: 'remote2',  // Route to load remote1 as a microfrontend
    loadChildren: () => loadRemoteModule('remote2', './Routes').then(m => m.remoteRoutes),
    outlet: 'microfrontend2',
  },
  {
    path: 'remote4',
    loadChildren: () => loadRemoteModule('remote4', './Routes').then(m => m.remoteRoutes),
  },
  {
    path: 'remote4',
    loadChildren: () => loadRemoteModule('remote4', './Routes').then(m => m.remoteRoutes),
    outlet: 'microfrontend2',
  },
  {
    path: '',
    component: AppComponent,
  },
];
