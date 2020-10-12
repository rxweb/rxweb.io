import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTER_ROUTES: Routes = [
{
	path:'authorization',
  loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule),
	
},
{
	path:'authentication',
  loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
	
},
];
export const ROUTER_ROUTING = RouterModule.forChild(ROUTER_ROUTES);
