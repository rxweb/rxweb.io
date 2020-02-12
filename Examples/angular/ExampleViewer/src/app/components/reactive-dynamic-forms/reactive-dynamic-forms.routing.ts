import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicValidationComponent } from '../dynamic-validation/dynamic-validation.component';
import { DynamicFormHomeComponent } from "./home/home.component"
import { DynamicGettingStartedComponent } from './getting-started/getting-started.component';

const REACTIVE_DYNAMIC_FORMS_ROUTES: Routes = [
{
    path: 'dynamic-forms',
    loadChildren: 'src/app/components/dynamic-forms/dynamic-forms.module#DynamicFormsModule',
  },
  {
    path: 'home',
    component: DynamicFormHomeComponent
  },
  {
    path: 'dynamic-validation',
    component:DynamicValidationComponent
  },
  {
    path: 'static-binding',
    loadChildren: 'src/app/components/static-binding/static-binding.module#StaticBindingModule',
  },
  {
    path: 'conditional-binding',
    loadChildren: 'src/app/components/conditional-binding/conditional-binding.module#ConditionalBindingModule',
  },
  {
    path: 'controls',
    loadChildren: 'src/app/components/controls/controls.module#ControlsModule',
  },
  {
    path: 'dynamic-getting-started',
    component:DynamicGettingStartedComponent
  },
  {
    path:'advance-form-design',
    loadChildren:'src/app/components/advance-form-design/advance-form-design.module#Advance_form_designModule'
  }

];
export const REACTIVE_DYNAMIC_FORMS_ROUTING: ModuleWithProviders = RouterModule.forChild(REACTIVE_DYNAMIC_FORMS_ROUTES);
