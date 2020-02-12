import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const HTTP_ROUTES: Routes = [
{
	path:'get',
	loadChildren: './get/get.module#GetModule',
},
{
	path:'post',
	loadChildren: './post/post.module#PostModule',
},
{
	path:'put',
	loadChildren: './put/put.module#PutModule',
},
{
	path:'patch',
	loadChildren: './patch/patch.module#PatchModule',
},
{
	path:'delete',
	loadChildren: './delete/delete.module#DeleteModule',
},
{
	path:'filters',
	loadChildren: './filters/filters.module#FiltersModule',
},
{
	path:'httpClientConfig',
	loadChildren: './httpClientConfig/http-client-config.module#HttpClientConfigModule',
},
{
	path:'decorators',
	loadChildren: './decorators/decorators.module#DecoratorsModule',
},
];
export const HTTP_ROUTING: ModuleWithProviders = RouterModule.forChild(HTTP_ROUTES);
