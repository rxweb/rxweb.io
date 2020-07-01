import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTER_ROUTES: Routes = [
{
	path:'access',
	loadChildren: () => import('./access/access.module').then(m => m.AccessModule),
},
{
	path:'anonymous',
	loadChildren: () => import('./anonymous/anonymous.module').then(m => m.AnonymousModule),
},
{
	path:'middleware',
	loadChildren: () => import('./middleware/middleware.module').then(m => m.MiddlwareModule),
},
{
	path:'router-module',
	loadChildren: () => import('./routerModule/router-module.module').then(m => m.RouterModuleModule),
}
];
export const ROUTER_ROUTING = RouterModule.forChild(ROUTER_ROUTES);