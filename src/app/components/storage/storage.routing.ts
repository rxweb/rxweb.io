import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const STORAGE_ROUTES: Routes = [
{
	path:'session-storage',
	loadChildren: './session-storage/session-storage.module#SessionStorageModule',
},
{
	path:'local-storage',
	loadChildren: './local-storage/local-storage.module#LocalStorageModule',
},
{
	path:'storage-methods',
	loadChildren: './storage-methods/storage-methods.module#StorageMethodsModule',
}
];
export const STORAGE_ROUTING = RouterModule.forChild(STORAGE_ROUTES);