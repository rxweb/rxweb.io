import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const STRONGLY_TYPED_ROUTES: Routes = [
{
	path:'angular-strongly-typed',
	loadChildren: './angular/angular-strongly-typed.module#AngularStronglyTypedModule',
}
];
export const STRONGLY_TYPED_ROUTING: ModuleWithProviders = RouterModule.forChild(STRONGLY_TYPED_ROUTES);