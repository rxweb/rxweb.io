import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { NoPreloading } from "@angular/router";
import { GettingStartedComponent } from "src/app/components/getting-started/getting-started.component";
import { ReactiveFormConfigComponent } from "../reactive-form-config/reactive-form-config.component";


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
    path: 'getting-started', component: GettingStartedComponent
  },
  // {
  //   path: 'changelog', component: TextPageComponent
  //   //loadChildren: 'src/app/components/text-page/text-page.module#TextPageModule',
  // },
  {
    path:'api/reactive-form-config',component:ReactiveFormConfigComponent
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
    path: 'rxweb-http',
    loadChildren: 'src/app/components/rxweb-http/rxweb-http.module#RxwebHttpModule',
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
    path: 'rx-web-core',
    loadChildren: 'src/app/components/htmlpages/html.page.module#HtmlPageModule',
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
    path: 'api/RxFormGroup',
    loadChildren: 'src/app/components/api/RxFormGroup/rx-form-group.module#RxFormGroupModule',
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
    path: 'reactive-dynamic-forms',
    loadChildren: 'src/app/components/reactive-dynamic-forms/reactive-dynamic-forms.module#ReactiveDynamicFormsModule',
  },
  {
    path: 'rxweb-generics',
    loadChildren: 'src/app/components/rxweb-generics/rxweb-generics.module#RxwebGenericsModule',
  },
  {
    path: 'rxweb-sanitizers',
    loadChildren: 'src/app/components/rxweb-sanitizers/rxweb-sanitizers.module#RxwebSanitizersModule',
  },
  {
    path: '**', 
    redirectTo:'home',
    pathMatch: 'full'
  }
 
];

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, { 
      preloadingStrategy: PreloadAllModules,
    });
