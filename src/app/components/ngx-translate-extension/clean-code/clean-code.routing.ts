import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './transloco/home/home.component';
import { LazyComponent } from './transloco/lazy/lazy.component';
import { InlineLoadersComponent } from './transloco/inline-loaders/inline-loaders.component';
import { DynamicTranslationComponent } from './transloco/dynamic-translation/dynamic-translation.component';
import { ConfigurationComponent } from './transloco/configuration/configuration.component';
import { ScopeSharingComponent } from './transloco/scope-sharing/scope-sharing.component';
import { MultiLangsComponent } from './transloco/multi-langs/multi-langs.component';
import { TranspilersComponent } from './transloco/transpilers/transpilers.component';
import { CleanCodeAngularComparisonComponent } from './angular-i18n/home/home.component';
import { ApiAngularComparisonComponent } from './angular-i18n/home/api/api.component';
import { PipeAngularComparisonComponent } from './angular-i18n/home/pipe/pipe.component';
import { DirectiveAngularComparisonComponent } from './angular-i18n/home/directive/directive.component';
import { LazyComparisonComponent } from './angular-i18n/lazy/lazy.component';
import { OnPushComparisonComponent } from './angular-i18n/on-push/on-push.component';
import { ValidationComparisonComponent } from './angular-i18n/validation/validation.component';



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
  },
  {
    path:'angular-code-compare',
    component:CleanCodeAngularComparisonComponent
  },
  {
    path:'angular-comparison-api',
    component:ApiAngularComparisonComponent
  },
  {
    path:'angular-comparison-pipe',
    component:PipeAngularComparisonComponent
  },
  {
    path:'angular-comparison-directive',
    component:DirectiveAngularComparisonComponent
  },
  {
    path:'angular-comparison-lazy',
    component:LazyComparisonComponent
  },
  {
    path:'angular-comparison-on-push',
    component:OnPushComparisonComponent
  },
  {
    path:'angular-comparison-validation',
    component:ValidationComparisonComponent
  }
  
];
export const CLEAN_CODE_ROUTING: ModuleWithProviders = RouterModule.forChild(CLEAN_CODE_ROUTES);
