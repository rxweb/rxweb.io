import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DYNAMIC_FORMS_ROUTES: Routes = [
{
	path:'stepbystep',
	loadChildren: './stepbystep/stepbystep.module#StepbystepModule',
},
{
	path:'dynamicresetform',
	loadChildren: './dynamicresetform/dynamicresetform.module#DynamicresetformModule',
},
{
	path:'dynamicerrormessagestrategy',
	loadChildren: './dynamicerrormessagestrategy/dynamicerrormessagestrategy.module#DynamicerrormessagestrategyModule',
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
	path:'DynamicFormConfiguration',
	loadChildren: './DynamicFormConfiguration/dynamic-form-configuration.module#DynamicFormConfigurationModule',
},
{
	path:'dynamic',
	loadChildren: './dynamic/dynamic.module#DynamicModule',
},
{
	path:'overrideProps',
	loadChildren: './overrideProps/override-props.module#OverridePropsModule',
},
{
	path:'dynamicComponent',
	loadChildren: './dynamicComponent/dynamic-component.module#DynamicComponentModule',
},
{
	path:'preValueHook',
	loadChildren: './preValueHook/pre-value-hook.module#PreValueHookModule',
},
{
	path:'postValueHook',
	loadChildren: './postValueHook/post-value-hook.module#PostValueHookModule',
},
];
export const DYNAMIC_FORMS_ROUTING = RouterModule.forChild(DYNAMIC_FORMS_ROUTES);
