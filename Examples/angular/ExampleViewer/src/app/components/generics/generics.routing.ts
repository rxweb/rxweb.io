import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const GENERICS_ROUTES: Routes = [
{
	path:'list',
	loadChildren: () => import('./list/list.module').then(m => m.ListModule),
},
];
export const GENERICS_ROUTING: ModuleWithProviders = RouterModule.forChild(GENERICS_ROUTES);
