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
    loadChildren: () => import('src/app/components/howto/howto.module').then(m => m.HowtoModule),
  },
  {
    path: 'advance-form-validation',
    loadChildren: () => import('src/app/components/advance-form-validation/advance-form-validation.module').then(m => m.AdvanceFormValidationModule),
  },
  {
    path: 'form-validations',
    loadChildren: () => import('src/app/components/form-validation/form-validation.module').then(m => m.FormValidationModule),
  },
  {
    path: 'rxweb-http',
    loadChildren: () => import('src/app/components/rxweb-http/rxweb-http.module').then(m => m.RxwebHttpModule),
  },
  {
    path: 'decorators',
    loadChildren: () => import('src/app/components/decorators/decorators.module').then(m => m.DecoratorsModule),
  },
  {
    path: 'community',
    loadChildren: () => import('src/app/components/community/community.module').then(m => m.CommunityModule),
  },
  {
    path: 'rx-web-core',
    loadChildren: () => import('src/app/components/htmlpages/html.page.module').then(m => m.HtmlPageModule),
  },
  {
    path: 'form-builder',
    loadChildren: () => import('src/app/components/form-builder/form-builder-shared.module').then(m => m.FormBuilderSharedModule),
  },
  {
    path: 'dynamic-form-builder',
    loadChildren: () => import('src/app/components/dynamic-form-builder/dynamic-form-builder.module').then(m => m.DynamicFormBuilderModule),
  },
  {
    path: 'api/RxFormBuilder',
    loadChildren: () => import('src/app/components/api/RxFormBuilder/rx-form-builder.module').then(m => m.RxFormBuilderModule),
  },
  {
    path: 'api/RxFormGroup',
    loadChildren: () => import('src/app/components/api/RxFormGroup/rx-form-group.module').then(m => m.RxFormGroupModule),
  },
  {
    path: 'api/FormBuilderConfiguration',
    loadChildren: () => import('src/app/components/api/FormBuilderConfiguration/form-builder-configuration.module').then(m => m.FormBuilderConfigurationModule),
  },
  {
    path:'sanitization',
    loadChildren: () => import('src/app/components/sanitization/sanitization.module').then(m => m.SanitizationModule),
  },
  {
    path: 'reactive-dynamic-forms',
    loadChildren: () => import('src/app/components/reactive-dynamic-forms/reactive-dynamic-forms.module').then(m => m.ReactiveDynamicFormsModule),
  },
  {
    path: 'rxweb-generics',
    loadChildren: () => import('src/app/components/rxweb-generics/rxweb-generics.module').then(m => m.RxwebGenericsModule),
  },
  {
    path: 'rxweb-sanitizers',
    loadChildren: () => import('src/app/components/rxweb-sanitizers/rxweb-sanitizers.module').then(m => m.RxwebSanitizersModule),
  },
  {
    path: 'rxweb-storage',
    loadChildren: () => import('src/app/components/rxweb-storage/rxweb-storage.module').then(m => m.RxwebStorageModule),
  },
  {
    path: '**', 
    redirectTo:'home',
    pathMatch: 'full'
  }
 
];

export const APP_LAZY_ROUTING = RouterModule.forRoot(APP_LAZY_ROUTES, { 
  preloadingStrategy: NoPreloading,
});
