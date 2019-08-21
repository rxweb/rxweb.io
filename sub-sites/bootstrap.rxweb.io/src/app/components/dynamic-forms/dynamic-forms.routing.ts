import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DYNAMIC_FORMS_ROUTES: Routes = [
{
	path:'customvalidation',
	loadChildren: './customvalidation/customvalidation.module#CustomvalidationModule',
},
{
	path:'asyncvalidation',
	loadChildren: './asyncvalidation/asyncvalidation.module#AsyncvalidationModule',
},
];
export const DYNAMIC_FORMS_ROUTING: ModuleWithProviders = RouterModule.forChild(DYNAMIC_FORMS_ROUTES);
