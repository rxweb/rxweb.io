import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const STORAGE_ROUTES: Routes = [
{
	path:'session-storage',
	loadChildren: () => import('./session-storage/session-storage.module').then(m => m.SessionStorageModule),
},
{
	path:'local-storage',
	loadChildren: () => import('./local-storage/local-storage.module').then(m => m.LocalStorageModule),
},
{
	path:'storage-methods',
	loadChildren: () => import('./storage-methods/storage-methods.module').then(m => m.StorageMethodsModule),
}
];
export const STORAGE_ROUTING = RouterModule.forChild(STORAGE_ROUTES);