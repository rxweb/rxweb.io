import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const LEARN_ROUTES: Routes = [
{
	path:'creating-project',
  loadChildren: () => import('./creating-project/creating-project.module').then(m => m.Creating_projectModule),
	
},
{
	path:'adding-routes',
  loadChildren: () => import('./adding-routes/adding-routes.module').then(m => m.Adding_routesModule),
	
},
{
	path:'managing-input',
  loadChildren: () => import('./managing-input/managing-input.module').then(m => m.Managing_inputModule),
	
},
{
	path:'data-access',
  loadChildren: () => import('./data-access/data-access.module').then(m => m.Data_accessModule),
	
},
{
	path:'multilingual',
  loadChildren: () => import('./multilingual/multilingual.module').then(m => m.MultilingualModule),
	
},
{
	path:'authentication-resolver',
  loadChildren: () => import('./authentication-resolver/authentication-resolver.module').then(m => m.Authentication_resolverModule),
	
},
{
	path:'authorization-resolver',
  loadChildren: () => import('./authorization-resolver/authorization-resolver.module').then(m => m.Authorization_resolverModule),
	
},
{
	path:'component-middleware',
  loadChildren: () => import('./component-middleware/component-middleware.module').then(m => m.Component_middlewareModule),
	
},
{
	path:'advance-forms',
  loadChildren: () => import('./advance-forms/advance-forms.module').then(m => m.Advance_formsModule),
	
},
{
	path:'navigating-routes-advance',
  loadChildren: () => import('./navigating-routes-advance/navigating-routes-advance.module').then(m => m.Navigating_routes_advanceModule),
	
},
{
	path:'creating-advance-application',
  loadChildren: () => import('./creating-advance-application/creating-advance-application.module').then(m => m.Creating_advance_applicationModule),
	
},
{
	path:'accessing-data-advance',
  loadChildren: () => import('./accessing-data-advance/accessing-data-advance.module').then(m => m.Accessing_data_advanceModule),
	
},
{
	path:'validating-employee-dynamically',
  loadChildren: () => import('./validating-employee-dynamically/validating-employee-dynamically.module').then(m => m.Validating_employee_dynamicallyModule),
	
},
{
	path:'adding-employee-department-details-generic',
  loadChildren: () => import('./adding-employee-department-details-generic/adding-employee-department-details-generic.module').then(m => m.Adding_employee_department_details_genericModule),
	
},
{
	path:'resolve-contact-details-on-demand',
  loadChildren: () => import('./resolve-contact-details-on-demand/resolve-contact-details-on-demand.module').then(m => m.Resolve_contact_details_on_demandModule),
	
},
{
	path:'adding-mutilingual-validation-messages-globally',
  loadChildren: () => import('./adding-mutilingual-validation-messages-globally/adding-mutilingual-validation-messages-globally.module').then(m => m.Adding_mutilingual_validation_messages_globallyModule),
	
},
{
	path:'set-pagetitle-using-single-property',
  loadChildren: () => import('./set-pagetitle-using-single-property/set-pagetitle-using-single-property.module').then(m => m.Set_pagetitle_using_single_propertyModule),
	
},
{
	path:'loading-message-conditionally',
  loadChildren: () => import('./loading-message-conditionally/loading-message-conditionally.module').then(m => m.Loading_message_conditionallyModule),
	
},
];
export const LEARN_ROUTING = RouterModule.forChild(LEARN_ROUTES);
