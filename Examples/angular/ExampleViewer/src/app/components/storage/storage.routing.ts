import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const STORAGE_ROUTES: Routes = [
  {
    path: 'local-storage',
    loadChildren: () => import('src/app/components/storage/local-storage/local-storage.module').then(m => m.LocalStorageModule),
  },
  {
    path: 'session-storage',
    loadChildren: () => import('src/app/components/storage/session-storage/session-storage.module').then(m => m.SessionStorageModule),
  }
];
export const STORAGE_ROUTING: ModuleWithProviders = RouterModule.forChild(STORAGE_ROUTES);
