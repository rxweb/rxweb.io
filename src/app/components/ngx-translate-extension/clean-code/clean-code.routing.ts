import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ScopeSharingComponent } from './scope-sharing/scope-sharing.component';
import { MultiLangsComponent } from './multi-langs/multi-langs.component';
import { TranspilersComponent } from './transpilers/transpilers.component';
import { LazyComponent } from "./lazy/lazy.component";
import { InlineLoadersComponent } from "./inline-loaders/inline-loaders.component";
import { DynamicTranslationComponent } from "./dynamic-translation/dynamic-translation.component";

const CLEAN_CODE_ROUTES: Routes = [
  {
    path: 'on-push',
    component: HomeComponent
  },
 
  {
    path: 'lazy',
    component: LazyComponent
  },
  {
    path: 'inline-loaders',
    component: InlineLoadersComponent
  },
  {
    path: 'dynamic-translation',
    component: DynamicTranslationComponent
  },
  // { path: '', pathMatch: 'full', redirectTo: 'en/playground' },
  // { path: ':languageCode/playground', component: PlayGroundComponent },
  {
    path: 'configuration',
    component: ConfigurationComponent
  },
  {
    path: 'scope-sharing',
    component: ScopeSharingComponent
  },
  {
    path: 'multi-langs',
    component: MultiLangsComponent
  },
  {
    path: 'transpilers',
    component: TranspilersComponent
  }
  
];
export const CLEAN_CODE_ROUTING: ModuleWithProviders = RouterModule.forChild(CLEAN_CODE_ROUTES);
