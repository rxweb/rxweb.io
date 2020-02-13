import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicValidationComponent } from '../dynamic-validation/dynamic-validation.component';
import { DynamicFormHomeComponent } from "./home/home.component"
import { DynamicGettingStartedComponent } from './getting-started/getting-started.component';

const REACTIVE_DYNAMIC_FORMS_ROUTES: Routes = [
{
    path: 'dynamic-forms',
    loadChildren: () => import('src/app/components/dynamic-forms/dynamic-forms.module').then(m => m.DynamicFormsModule),
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
    loadChildren: () => import('src/app/components/static-binding/static-binding.module').then(m => m.StaticBindingModule),
  },
  {
    path: 'conditional-binding',
    loadChildren: () => import('src/app/components/conditional-binding/conditional-binding.module').then(m => m.ConditionalBindingModule),
  },
  {
    path: 'controls',
    loadChildren: () => import('src/app/components/controls/controls.module').then(m => m.ControlsModule),
  },
  {
    path: 'dynamic-getting-started',
    component:DynamicGettingStartedComponent
  },
  {
    path:'advance-form-design',
    loadChildren:() => import('src/app/components/advance-form-design/advance-form-design.module').then(m => m.Advance_form_designModule)
  }

];
export const REACTIVE_DYNAMIC_FORMS_ROUTING: ModuleWithProviders = RouterModule.forChild(REACTIVE_DYNAMIC_FORMS_ROUTES);
