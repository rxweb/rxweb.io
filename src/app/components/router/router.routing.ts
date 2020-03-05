import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTER_ROUTES: Routes = [
{
	path:'access',
	loadChildren: './access/access.module#AccessModule',
},
{
	path:'anonymous',
	loadChildren: './anonymous/anonymous.module#AnonymousModule',
},
{
	path:'middleware',
	loadChildren: './middleware/middleware.module#MiddlwareModule',
},
{
	path:'router-module',
	loadChildren: './routerModule/router-module.module#RouterModuleModule',
}
];
export const ROUTER_ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTER_ROUTES);