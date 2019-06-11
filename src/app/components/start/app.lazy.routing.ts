import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { NoPreloading } from "@angular/router";
import { GettingStartedComponent } from "src/app/components/getting-started/getting-started.component";
import { ReactiveFormConfigComponent } from "../reactive-form-config/reactive-form-config.component";
import { FormBuilderComponent } from "../form-builder/form-builder.component";
import { ConditionalValidationComponent } from "src/assets/examples/advance-form-validations/conditional-validation/conditional-validation.component";
import { TextPageComponent } from "../text-page/text-page.component";
import { WhatsNextComponent } from "../whats-next/whats-next.component";
import { WhatsNewComponent } from "../whats-new/whats-new.component";
import { WhyRxwebComponent } from "../why/why-component";
import { ChangeLogComponent } from "../changelog/change-log.component";



const APP_LAZY_ROUTES: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'reactive-forms/getting-started', component: GettingStartedComponent
  },
  // {
  //   path: 'changelog', component: TextPageComponent
  //   //loadChildren: 'src/app/components/text-page/text-page.module#TextPageModule',
  // },
  {
    path:'api/reactive-form-config',component:ReactiveFormConfigComponent
  },
  {
    path:'whats-next',component:WhatsNextComponent
  },
  {
    path:'whats-new',component:WhatsNewComponent
  },
  {
    path:'why',component:WhyRxwebComponent
  },
  {
    path:'changelog',component:ChangeLogComponent
  },
  {
    path:'how-to',
    loadChildren: 'src/app/components/howto/howto.module#HowtoModule',
  },
  {
    path: 'advance-form-validation',
    loadChildren: 'src/app/components/advance-form-validation/advance-form-validation.module#AdvanceFormValidationModule',
  },
  {
    path: 'form-validations',
    loadChildren: 'src/app/components/form-validation/form-validation.module#FormValidationModule',
  },
  {
    path: 'dynamic-forms',
    loadChildren: 'src/app/components/dynamic-forms/dynamic-forms.module#DynamicFormsModule',
  },
  {
    path: 'decorators',
    loadChildren: 'src/app/components/decorators/decorators.module#DecoratorsModule',
  },
  {
    path: 'community',
    loadChildren: 'src/app/components/community/community.module#CommunityModule',
  },
  {
    path: 'form-builder',
    loadChildren: 'src/app/components/form-builder/form-builder-shared.module#FormBuilderSharedModule',
  },
  {
    path: 'dynamic-form-builder',
    loadChildren: 'src/app/components/dynamic-form-builder/dynamic-form-builder.module#DynamicFormBuilderModule',
  },
  {
    path: 'api/RxFormBuilder',
    loadChildren: 'src/app/components/api/RxFormBuilder/rx-form-builder.module#RxFormBuilderModule',
  },
  {
    path: 'api/FormBuilderConfiguration',
    loadChildren: 'src/app/components/api/FormBuilderConfiguration/form-builder-configuration.module#FormBuilderConfigurationModule',
  },
  {
    path:'sanitization',
    loadChildren: 'src/app/components/sanitization/sanitization.module#SanitizationModule',
  },
  {
    path: '**', 
    redirectTo:'home',
    pathMatch: 'full'
  }
 
];

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, { 
      preloadingStrategy: NoPreloading,
    });
