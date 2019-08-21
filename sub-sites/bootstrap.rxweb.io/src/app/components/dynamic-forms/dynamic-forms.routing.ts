import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DYNAMIC_FORMS_ROUTES: Routes = [
	{
		path:'stepbystep',
		loadChildren: './stepbystep/stepbystep.module#StepbystepModule',
	},
{
	path:'customvalidation',
	loadChildren: './customvalidation/customvalidation.module#CustomvalidationModule',
},
{
	path:'asyncvalidation',
	loadChildren: './asyncvalidation/asyncvalidation.module#AsyncvalidationModule',
},
{
	path:'dynamicresetform',
	loadChildren: './dynamicresetform/dynamicresetform.module#DynamicresetformModule',
},
{
	path:'dynamicerrormessagestrategy',
	loadChildren: './dynamicerrormessagestrategy/dynamicerrormessagestrategy.module#DynamicerrormessagestrategyModule',
},
];
export const DYNAMIC_FORMS_ROUTING: ModuleWithProviders = RouterModule.forChild(DYNAMIC_FORMS_ROUTES);
