import { Route } from '@angular/router';
import { Component1Component } from '../component-1/component-1.component';
import { Component2Component } from '../component-2/component-2.component';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'component-1',
        component: Component1Component
      },
      {
        path: 'component-2',
        component: Component2Component
      },
      {
        path: '',
        redirectTo: 'component-1',
        pathMatch: 'full'
      }
    ]
  },
];
