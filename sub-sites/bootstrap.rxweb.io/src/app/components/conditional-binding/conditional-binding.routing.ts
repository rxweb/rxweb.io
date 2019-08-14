import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CONDITIONAL_BINDING_ROUTES: Routes = [
{
	path:'conditionalclass',
	loadChildren: './conditionalclass/conditionalclass.module#ConditionalclassModule',
},
];
export const CONDITIONAL_BINDING_ROUTING: ModuleWithProviders = RouterModule.forChild(CONDITIONAL_BINDING_ROUTES);
