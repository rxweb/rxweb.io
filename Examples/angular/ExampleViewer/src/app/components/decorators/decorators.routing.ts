import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DECORATORS_ROUTES: Routes = [
{
	path:'prop',
	loadChildren: './prop/prop.module#PropModule',
},
{
	path:'propArray',
	loadChildren: './propArray/prop-array.module#PropArrayModule',
},
{
	path:'propObject',
	loadChildren: './propObject/prop-object.module#PropObjectModule',
},
{
	path:'disable',
	loadChildren: './disable/disable.module#DisableModule',
},
{
	path:'error',
	loadChildren: './error/error.module#ErrorModule',
},
{
	path:'elementClass',
	loadChildren: './elementClass/element-class.module#ElementClassModule',
},
{
	path:'model',
	loadChildren: './model/model.module#ModelModule',
},
];
export const DECORATORS_ROUTING: ModuleWithProviders = RouterModule.forChild(DECORATORS_ROUTES);