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
{
	path:'cssclassnames',
	loadChildren: './cssclassnames/cssclassnames.module#CssclassnamesModule',
},
{
	path:'value',
	loadChildren: './value/value.module#ValueModule',
},
{
	path:'hide',
	loadChildren: './hide/hide.module#HideModule',
},
{
	path:'description',
	loadChildren: './description/description.module#DescriptionModule',
},
{
	path:'readonly',
	loadChildren: './readonly/readonly.module#ReadonlyModule',
},
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
{
	path:'color',
	loadChildren: './color/color.module#ColorModule',
},
{
	path:'dynamicbootstrap',
	loadChildren: './dynamicbootstrap/dynamicbootstrap.module#DynamicbootstrapModule',
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
	path:'dynamicpassword',
	loadChildren: './dynamicpassword/dynamicpassword.module#DynamicpasswordModule',
},
{
	path:'dynamicurl',
	loadChildren: './dynamicurl/dynamicurl.module#DynamicurlModule',
},
{
	path:'textarea',
	loadChildren: './textarea/textarea.module#TextareaModule',
},
{
	path:'prependLeftTextbox',
	loadChildren: './prependLeftTextbox/prepend-left-textbox.module#PrependLeftTextboxModule',
},
{
	path:'dynamicrange',
	loadChildren: './dynamicrange/dynamicrange.module#DynamicrangeModule',
},
{
	path:'bootstraphorizontal',
	loadChildren: './bootstraphorizontal/bootstraphorizontal.module#BootstraphorizontalModule',
},
{
	path:'bootstrapadvance',
	loadChildren: './bootstrapadvance/bootstrapadvance.module#BootstrapadvanceModule',
}
];
export const DYNAMIC_FORMS_ROUTING: ModuleWithProviders = RouterModule.forChild(DYNAMIC_FORMS_ROUTES);