import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const STRONGLY_TYPED_ROUTES: Routes = [
	{
		path: 'angular-strongly-typed',
		loadChildren: './angular/angular-strongly-typed.module#AngularStronglyTypedModule',
	},
	{
		path: 'formGroup-class-instance',
		loadChildren: './formGroup-class-instance/formGroup-class-instance.module#FormGroupStronglyTypedModule',
	}
];
export const STRONGLY_TYPED_ROUTING = RouterModule.forChild(STRONGLY_TYPED_ROUTES);