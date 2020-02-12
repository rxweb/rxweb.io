import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const GENERICS_ROUTES: Routes = [
{
	path:'list',
	loadChildren: './list/list.module#ListModule',
},
];
export const GENERICS_ROUTING: ModuleWithProviders = RouterModule.forChild(GENERICS_ROUTES);
