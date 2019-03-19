import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const API_ROUTES: Routes = [
{
	path:'RxFormBuilder',
	loadChildren: './RxFormBuilder/rx-form-builder.module#RxFormBuilderModule',
},
];
export const API_ROUTING: ModuleWithProviders = RouterModule.forChild(API_ROUTES);