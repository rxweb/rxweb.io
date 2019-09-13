import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const HTTP_ROUTES: Routes = [
{
	path:'methods',
	loadChildren: './methods/methods.module#MethodsModule',
},
{
	path:'decorators',
	loadChildren: './decorators/decorators.module#DecoratorsModule',
},
{
	path:'filters',
	loadChildren: './filters/filters.module#FiltersModule',
},
];
export const HTTP_ROUTING: ModuleWithProviders = RouterModule.forChild(HTTP_ROUTES);
