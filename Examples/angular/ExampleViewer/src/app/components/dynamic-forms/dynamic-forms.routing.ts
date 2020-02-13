import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DYNAMIC_FORMS_ROUTES: Routes = [
{
	path:'stepbystep',
	loadChildren: () => import('./stepbystep/stepbystep.module').then(m => m.StepbystepModule),
},
{
	path:'dynamicresetform',
	loadChildren: () => import('./dynamicresetform/dynamicresetform.module').then(m => m.DynamicresetformModule),
},
{
	path:'dynamicerrormessagestrategy',
	loadChildren: () => import('./dynamicerrormessagestrategy/dynamicerrormessagestrategy.module').then(m => m.DynamicerrormessagestrategyModule),
},
{
	path:'customvalidation',
	loadChildren: () => import('./customvalidation/customvalidation.module').then(m => m.CustomvalidationModule),
},
{
	path:'asyncvalidation',
	loadChildren: () => import('./asyncvalidation/asyncvalidation.module').then(m => m.AsyncvalidationModule),
},
{
	path:'DynamicFormConfiguration',
	loadChildren: () => import('./DynamicFormConfiguration/dynamic-form-configuration.module').then(m => m.DynamicFormConfigurationModule),
},
{
	path:'dynamic',
	loadChildren: () => import('./dynamic/dynamic.module').then(m => m.DynamicModule),
},
{
	path:'overrideProps',
	loadChildren: () => import('./overrideProps/override-props.module').then(m => m.OverridePropsModule),
},
{
	path:'dynamicComponent',
	loadChildren: () => import('./dynamicComponent/dynamic-component.module').then(m => m.DynamicComponentModule),
},
{
	path:'preValueHook',
	loadChildren: () => import('./preValueHook/pre-value-hook.module').then(m => m.PreValueHookModule),
},
{
	path:'postValueHook',
	loadChildren: () => import('./postValueHook/post-value-hook.module').then(m => m.PostValueHookModule),
},
];
export const DYNAMIC_FORMS_ROUTING: ModuleWithProviders = RouterModule.forChild(DYNAMIC_FORMS_ROUTES);
