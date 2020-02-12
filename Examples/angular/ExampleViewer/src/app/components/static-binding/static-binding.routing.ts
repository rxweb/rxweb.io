import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const STATIC_BINDING_ROUTES: Routes = [
{
	path:'class',
	loadChildren: './class/class.module#ClassModule',
},
{
	path:'description',
	loadChildren: './description/description.module#DescriptionModule',
},
{
	path:'disabled',
	loadChildren: './disabled/disabled.module#DisabledModule',
},
{
	path:'focus',
	loadChildren: './focus/focus.module#FocusModule',
},
{
	path:'hide',
	loadChildren: './hide/hide.module#HideModule',
},
{
	path:'label',
	loadChildren: './label/label.module#LabelModule',
},
{
	path:'placeholder',
	loadChildren: './placeholder/placeholder.module#PlaceholderModule',
},
{
	path:'readonly',
	loadChildren: './readonly/readonly.module#ReadonlyModule',
},
{
	path:'source',
	loadChildren: './source/source.module#SourceModule',
},
{
	path:'value',
	loadChildren: './value/value.module#ValueModule',
},
];
export const STATIC_BINDING_ROUTING: ModuleWithProviders = RouterModule.forChild(STATIC_BINDING_ROUTES);
