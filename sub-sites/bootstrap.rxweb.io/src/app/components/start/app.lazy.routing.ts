import { Routes, RouterModule, NoPreloading } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { GettingStartedComponent } from '../getting-started/getting-started.component';
import { WhatsNewComponent } from '../whats-new/whats-new.component';
import { WhatsNextComponent } from '../whats-next/whats-next.component';

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
  }
]

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, { 
    preloadingStrategy: NoPreloading,
  });