import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { NoPreloading } from "@angular/router";
import { GettingStartedComponent } from "src/app/components/getting-started/getting-started.component";
import { ReactiveFormConfigComponent } from "../reactive-form-config/reactive-form-config.component";

import { TextPageComponent } from "../text-page/text-page.component";
import { WhatsNextComponent } from "../whats-next/whats-next.component";
import { WhatsNewComponent } from "../whats-new/whats-new.component";

import { ChangeLogComponent } from "../changelog/change-log.component";
import { ContributionComponent } from "../shared/disqus/contribution/contribution.component";
import { ContributorsComponent } from "../contributors/contributors-component";
import { ComingSoonComponent } from "../coming-soon/coming-soon.component";
import { LinkItemsComponent } from "../side-bar-link-items/link-items/link-item.component";
import { AngularHomeComponent } from "../angular-home-page/angular-home.component";
import { QuickStartComponent } from "../quick-start/quick-start.component";
import { VueGettingStartedComponent } from "../vue-getting-started/vue-getting-started.component";
import { VueHomePageComponent } from "../vue-home-page/vue-home-page.component";
import { ArticleComponent } from "../article/article.component";



const APP_LAZY_ROUTES: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'aspnetcore', component: HomeComponent
  },
  {
    path: 'home', component: AngularHomeComponent
  },
  {
    path: 'getting-started', component: GettingStartedComponent
  },
  {
    path: 'rx-web-core/quick-start',
    component: QuickStartComponent,
  },
  // {
  //   path: 'changelog', component: TextPageComponent
  //   //loadChildren: 'src/app/components/text-page/text-page.module#TextPageModule',
  // },
  {
    path: 'api/reactive-form-config', component: ReactiveFormConfigComponent
  },
  {
    path: 'whats-next', component: WhatsNextComponent
  },
  {
    path: 'vue/vue-getting-started', component: VueGettingStartedComponent
  },
  {
    path: 'whats-new', component: WhatsNewComponent
  },
  {
    path: 'hidden-gems', component: ContributorsComponent
  },
  {
    path: 'changelog', component: ChangeLogComponent
  },
  {
    path: 'how-to',
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
    path: 'vue/form-validations',
    loadChildren: () => import('src/app/components/form-validation/form-validation.module').then(m => m.FormValidationModule),
  },
  {
    path: 'rxweb-http',
    loadChildren: () => import('src/app/components/rxweb-http/rxweb-http.module').then(m => m.RxwebHttpModule),
  },
  {
    path: 'rxweb-localization',
    loadChildren: () => import('src/app/components/rxweb-localization/rxweb-localization.module').then(m => m.RxwebLocalizationModule),
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
    path: 'sanitization',
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
    path: 'rxweb-router',
    loadChildren: () => import('src/app/components/rxweb-router/rxweb-router.module').then(m => m.RxwebRouterModule),
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
    path: 'rxweb-translate',
    loadChildren: () => import('src/app/components/rxweb-translate/rxweb-translate.module').then(m => m.RxwebTranslateModule),
  },
  {
    path: 'ngx-translate-extension',
    loadChildren: () => import('src/app/components/ngx-translate-extension/ngx-translate-extension.module').then(m => m.NgxTranslateExtensionModule),
  },
  {
    path: 'strongly-typed',
    loadChildren: () => import('src/app/components/strongly-typed/strongly-typed.module').then(m => m.StronglyTypedAngularModule),
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent,
  },
  {
    path: 'vue/home',
    component: VueHomePageComponent,
  },
  {
    path: 'link-items',
    component: LinkItemsComponent,
  },
  {
    path: 'articles',
    component: ArticleComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

export const APP_LAZY_ROUTING = RouterModule.forRoot(APP_LAZY_ROUTES, {
  preloadingStrategy: NoPreloading,
});
