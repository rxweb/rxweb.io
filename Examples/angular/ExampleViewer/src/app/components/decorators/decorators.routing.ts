import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DECORATORS_ROUTES: Routes = [
{
	path:'prop',
	loadChildren: () => import('./prop/prop.module').then(m => m.PropModule),
},
{
	path:'propArray',
	loadChildren: () => import('./propArray/prop-array.module').then(m => m.PropArrayModule),
},
{
	path:'propObject',
	loadChildren: () => import('./propObject/prop-object.module').then(m => m.PropObjectModule),
},
{
	path:'disable',
	loadChildren: () => import('./disable/disable.module').then(m => m.DisableModule),
},
{
	path:'error',
	loadChildren: () => import('./error/error.module').then(m => m.ErrorModule),
},
{
	path:'elementClass',
	loadChildren: () => import('./elementClass/element-class.module').then(m => m.ElementClassModule),
},
{
	path:'model',
	loadChildren: () => import('./model/model.module').then(m => m.ModelModule),
},
];
export const DECORATORS_ROUTING: ModuleWithProviders = RouterModule.forChild(DECORATORS_ROUTES);