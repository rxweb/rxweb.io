import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ANGULAR_ROUTER_ROUTES: Routes = [
{
	path:'router-authorization',
  loadChildren: () => import('./router-authorization/router-authorization.module').then(m => m.Router_authorizationModule),
	
},
{
	path:'router-authentication',
  loadChildren: () => import('./router-authentication/router-authentication.module').then(m => m.Router_authenticationModule),
	
},
];
export const ANGULAR_ROUTER_ROUTING = RouterModule.forChild(ANGULAR_ROUTER_ROUTES);
