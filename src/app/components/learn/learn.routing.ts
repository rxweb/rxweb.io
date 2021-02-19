import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const LEARN_ROUTES: Routes = [
{
	path:'creating-project',
  loadChildren: () => import('./creating-project/creating-project.module').then(m => m.Creating_projectModule),
	
},
{
	path:'adding-routes',
  loadChildren: () => import('./adding-routes/adding-routes.module').then(m => m.Adding_routesModule),
	
},
{
	path:'managing-input',
  loadChildren: () => import('./managing-input/managing-input.module').then(m => m.Managing_inputModule),
	
},
{
	path:'data-access',
  loadChildren: () => import('./data-access/data-access.module').then(m => m.Data_accessModule),
	
},
{
	path:'multilingual',
  loadChildren: () => import('./multilingual/multilingual.module').then(m => m.MultilingualModule),
	
},
{
	path:'authentication-resolver',
  loadChildren: () => import('./authentication-resolver/authentication-resolver.module').then(m => m.Authentication_resolverModule),
	
},
{
	path:'authorization-resolver',
  loadChildren: () => import('./authorization-resolver/authorization-resolver.module').then(m => m.Authorization_resolverModule),
	
},
{
	path:'component-middleware',
  loadChildren: () => import('./component-middleware/component-middleware.module').then(m => m.Component_middlewareModule),
	
},
];
export const LEARN_ROUTING = RouterModule.forChild(LEARN_ROUTES);
