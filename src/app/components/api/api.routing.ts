import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const API_ROUTES: Routes = [
{
	path:'RxFormBuilder',
	loadChildren: () => import('./RxFormBuilder/rx-form-builder.module').then(m => m.RxFormBuilderModule),
},
{
	path:'FormBuilderConfiguration',
	loadChildren: () => import('./FormBuilderConfiguration/form-builder-configuration.module').then(m => m.FormBuilderConfigurationModule),
},
{
	path:'RxFormGroup',
	loadChildren: () => import('./RxFormGroup/rx-form-group.module').then(m => m.RxFormGroupModule),
},
];
export const API_ROUTING = RouterModule.forChild(API_ROUTES);