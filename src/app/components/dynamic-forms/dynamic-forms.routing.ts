import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DYNAMIC_FORMS_ROUTES: Routes = [
{
	path:'label',
	loadChildren: './label/label.module#LabelModule',
},
{
	path:'dynamicdisable',
	loadChildren: './dynamicdisable/dynamicdisable.module#DynamicdisableModule',
},
{
	path:'placeholder',
	loadChildren: './placeholder/placeholder.module#PlaceholderModule',
},
{
	path:'focus',
	loadChildren: './focus/focus.module#FocusModule',
},
];
export const DYNAMIC_FORMS_ROUTING: ModuleWithProviders = RouterModule.forChild(DYNAMIC_FORMS_ROUTES);