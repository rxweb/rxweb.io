import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CONTROLS_ROUTES: Routes = [
{
	path:'textbox',
	loadChildren: () => import('./textbox/textbox.module').then(m => m.TextboxModule),
},
{
	path:'color',
	loadChildren: () => import('./color/color.module').then(m => m.ColorModule),
},
{
	path:'checkbox',
	loadChildren: () => import('./checkbox/checkbox.module').then(m => m.CheckboxModule),
},
{
	path:'dynamicdate',
	loadChildren: () => import('./dynamicdate/dynamicdate.module').then(m => m.DynamicdateModule),
},
{
	path:'dropdown',
	loadChildren: () => import('./dropdown/dropdown.module').then(m => m.DropdownModule),
},
{
	path:'dynamicemail',
	loadChildren: () => import('./dynamicemail/dynamicemail.module').then(m => m.DynamicemailModule),
},
{
	path:'dynamicfile',
	loadChildren: () => import('./dynamicfile/dynamicfile.module').then(m => m.DynamicfileModule),
},
{
	path:'dynamicpassword',
	loadChildren: () => import('./dynamicpassword/dynamicpassword.module').then(m => m.DynamicpasswordModule),
},
{
	path:'radio',
	loadChildren: () => import('./radio/radio.module').then(m => m.RadioModule),
},
{
	path:'dynamicrange',
	loadChildren: () => import('./dynamicrange/dynamicrange.module').then(m => m.DynamicrangeModule),
},
{
	path:'textarea',
	loadChildren: () => import('./textarea/textarea.module').then(m => m.TextareaModule),
},
{
	path:'dynamicurl',
	loadChildren: () => import('./dynamicurl/dynamicurl.module').then(m => m.DynamicurlModule),
},
{
	path:'color',
	loadChildren: () => import('./color/color.module').then(m => m.ColorModule),
},
];
export const CONTROLS_ROUTING = RouterModule.forChild(CONTROLS_ROUTES);
