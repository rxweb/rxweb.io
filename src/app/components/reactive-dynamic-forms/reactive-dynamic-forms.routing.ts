import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicValidationComponent } from '../dynamic-validation/dynamic-validation.component';
import { DynamicFormHomeComponent } from "./home/home.component"

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
  }

];
export const REACTIVE_DYNAMIC_FORMS_ROUTING: ModuleWithProviders = RouterModule.forChild(REACTIVE_DYNAMIC_FORMS_ROUTES);
