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
{
	path:'middleware',
  loadChildren: () => import('./middleware/middleware.module').then(m => m.MiddlwareModule),
	
},
{
	path:'router-decorators',
  loadChildren: () => import('./router-decorators/router-decorators.module').then(m => m.Router_decoratorsModule),
	
},
];
export const ANGULAR_ROUTER_ROUTING = RouterModule.forChild(ANGULAR_ROUTER_ROUTES);
