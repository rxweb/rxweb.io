import { Routes, RouterModule, NoPreloading } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { GettingStartedComponent } from '../getting-started/getting-started.component';
import { WhatsNewComponent } from '../whats-new/whats-new.component';
import { WhatsNextComponent } from '../whats-next/whats-next.component';
import { DynamicValidationComponent } from '../dynamic-validation/dynamic-validation.component';

const APP_LAZY_ROUTES: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'getting-started', component: GettingStartedComponent
  },
  {
    path: 'whats-new', component: WhatsNewComponent
  },
  {
    path: 'whats-next', component: WhatsNextComponent 
  },
  {
    path: 'dynamic-forms',
    loadChildren: 'src/app/components/dynamic-forms/dynamic-forms.module#DynamicFormsModule',
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
]

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, { 
    preloadingStrategy: NoPreloading,
  });
