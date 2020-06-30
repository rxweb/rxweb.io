import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const HTTP_ROUTES: Routes = [
{
	path:'get',
	loadChildren: () => import('./get/get.module').then(m => m.GetModule),
},
{
	path:'post',
	loadChildren: () => import('./post/post.module').then(m => m.PostModule),
},
{
	path:'put',
	loadChildren: () => import('./put/put.module').then(m => m.PutModule),
},
{
	path:'patch',
	loadChildren: () => import('./patch/patch.module').then(m => m.PatchModule),
},
{
	path:'delete',
	loadChildren: () => import('./delete/delete.module').then(m => m.DeleteModule),
},
{
	path:'filters',
	loadChildren: () => import('./filters/filters.module').then(m => m.FiltersModule),
},
{
	path:'httpClientConfig',
	loadChildren: () => import('./httpClientConfig/http-client-config.module').then(m => m.HttpClientConfigModule),
},
{
	path:'decorators',
	loadChildren: () => import('./decorators/decorators.module').then(m => m.DecoratorsModule),
},
];
export const HTTP_ROUTING = RouterModule.forChild(HTTP_ROUTES);
