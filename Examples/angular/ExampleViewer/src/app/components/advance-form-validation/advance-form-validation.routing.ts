import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ADVANCE_FORM_VALIDATION_ROUTES: Routes = [
{
	path:'conditionalValidation',
	loadChildren: () => import('./conditionalValidation/conditional-validation.module').then(m => m.ConditionalValidationModule),
},
];
export const ADVANCE_FORM_VALIDATION_ROUTING = RouterModule.forChild(ADVANCE_FORM_VALIDATION_ROUTES);