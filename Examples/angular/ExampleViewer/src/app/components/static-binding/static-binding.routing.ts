import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const STATIC_BINDING_ROUTES: Routes = [
{
	path:'class',
	loadChildren: () => import('./class/class.module').then(m => m.ClassModule),
},
{
	path:'description',
	loadChildren: () => import('./description/description.module').then(m => m.DescriptionModule),
},
{
	path:'disabled',
	loadChildren: () => import('./disabled/disabled.module').then(m => m.DisabledModule),
},
{
	path:'focus',
	loadChildren: () => import('./focus/focus.module').then(m => m.FocusModule),
},
{
	path:'hide',
	loadChildren: () => import('./hide/hide.module').then(m => m.HideModule),
},
{
	path:'label',
	loadChildren: () => import('./label/label.module').then(m => m.LabelModule),
},
{
	path:'placeholder',
	loadChildren: () => import('./placeholder/placeholder.module').then(m => m.PlaceholderModule),
},
{
	path:'readonly',
	loadChildren: () => import('./readonly/readonly.module').then(m => m.ReadonlyModule),
},
{
	path:'source',
	loadChildren: () => import('./source/source.module').then(m => m.SourceModule),
},
{
	path:'value',
	loadChildren: () => import('./value/value.module').then(m => m.ValueModule),
},
];
export const STATIC_BINDING_ROUTING: ModuleWithProviders = RouterModule.forChild(STATIC_BINDING_ROUTES);
