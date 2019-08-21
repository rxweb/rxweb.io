import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CONTROLS_ROUTES: Routes = [
{
	path:'checkbox',
	loadChildren: './checkbox/checkbox.module#CheckboxModule',
},
{
	path:'textbox',
	loadChildren: './textbox/textbox.module#TextboxModule',
},
{
	path:'dropdown',
	loadChildren: './dropdown/dropdown.module#DropdownModule',
},
{
	path:'dynamicdate',
	loadChildren: './dynamicdate/dynamicdate.module#DynamicdateModule',
},
{
	path:'dynamicemail',
	loadChildren: './dynamicemail/dynamicemail.module#DynamicemailModule',
},
{
	path:'dynamicfile',
	loadChildren: './dynamicfile/dynamicfile.module#DynamicfileModule',
},
{
	path:'dynamicpassword',
	loadChildren: './dynamicpassword/dynamicpassword.module#DynamicpasswordModule',
},
{
	path:'radio',
	loadChildren: './radio/radio.module#RadioModule',
},
{
	path:'dynamicrange',
	loadChildren: './dynamicrange/dynamicrange.module#DynamicrangeModule',
},
{
	path:'textarea',
	loadChildren: './textarea/textarea.module#TextareaModule',
},
{
	path:'dynamicurl',
	loadChildren: './dynamicurl/dynamicurl.module#DynamicurlModule',
},
];
export const CONTROLS_ROUTING: ModuleWithProviders = RouterModule.forChild(CONTROLS_ROUTES);
