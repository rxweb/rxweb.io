import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const STRONGLY_TYPED_ROUTES: Routes = [
	{
		path: 'angular-strongly-typed',
		loadChildren: () => import('./angular/angular-strongly-typed.module').then(m => m.AngularStronglyTypedModule),
	},
	{
		path: 'formGroup-class-instance',
		loadChildren: () => import('./formGroup-class-instance/formGroup-class-instance.module').then(m => m.FormGroupStronglyTypedModule),
	}
];
export const STRONGLY_TYPED_ROUTING = RouterModule.forChild(STRONGLY_TYPED_ROUTES);