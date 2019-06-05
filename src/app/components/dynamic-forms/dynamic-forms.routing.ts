import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DYNAMIC_FORMS_ROUTES: Routes = [
{
	path:'stepbystep',
	loadChildren: './stepbystep/stepbystep.module#StepbystepModule',
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
	path:'checkbox',
	loadChildren: './checkbox/checkbox.module#CheckboxModule',
},
{
	path:'radio',
	loadChildren: './radio/radio.module#RadioModule',
},
{
	path:'dynamicfile',
	loadChildren: './dynamicfile/dynamicfile.module#DynamicfileModule',
},
];
export const DYNAMIC_FORMS_ROUTING: ModuleWithProviders = RouterModule.forChild(DYNAMIC_FORMS_ROUTES);