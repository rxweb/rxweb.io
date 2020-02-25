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
}
];
export const STORAGE_ROUTING: ModuleWithProviders = RouterModule.forChild(STORAGE_ROUTES);