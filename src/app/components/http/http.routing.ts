import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const HTTP_ROUTES: Routes = [
{
	path:'service-entity-filter',
  loadChildren: () => import('./service-entity-filter/service-entity-filter.module').then(m => m.Service_entity_filterModule),
	
},
{
	path:'global-filter',
  loadChildren: () => import('./global-filter/global-filter.module').then(m => m.Global_filterModule),
	
},
{
	path:'get',
  loadChildren: () => import('./get/get.module').then(m => m.GetModule),
	
},
{
	path:'get-direct-usage',
  loadChildren: () => import('./get-direct-usage/get-direct-usage.module').then(m => m.GetDirectUsageModule),
	
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
	path:'HttpRequestConfig',
  loadChildren: () => import('./HttpRequestConfig/http-request-config.module').then(m => m.HttpRequestConfigModule),
	
},
];
export const HTTP_ROUTING = RouterModule.forChild(HTTP_ROUTES);
