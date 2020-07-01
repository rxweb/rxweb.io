import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const RXWEB_STORAGE_ROUTES: Routes = [
  {
    path: 'storage',
    loadChildren: () => import('src/app/components/storage/storage.module').then(m => m.StorageModule),
  }
];
export const RXWEB_STORAGE_ROUTING = RouterModule.forChild(RXWEB_STORAGE_ROUTES);
