import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { NoPreloading } from "@angular/router";
import { GettingStartedComponent } from "src/app/components/getting-started/getting-started.component";
import { ReactiveFormConfigComponent } from "../reactive-form-config/reactive-form-config.component";
import { FormBuilderComponent } from "../form-builder/form-builder.component";

import { TextPageComponent } from "../text-page/text-page.component";
import { WhatsNextComponent } from "../whats-next/whats-next.component";
import { WhatsNewComponent } from "../whats-new/whats-new.component";
import { WhyRxwebComponent } from "../why/why-component";
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
    path: 'why', component: WhyRxwebComponent
  },
  {
    path: 'hidden-gems', component: ContributorsComponent
  },
  {
    path: 'changelog', component: ChangeLogComponent
  },
  {
    path: 'how-to',
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
    path: 'vue/form-validations',
    loadChildren: 'src/app/components/form-validation/form-validation.module#FormValidationModule',
  },
  {
    path: 'rxweb-http',
    loadChildren: 'src/app/components/rxweb-http/rxweb-http.module#RxwebHttpModule',
  },
  {
    path: 'rxweb-localization',
    loadChildren: 'src/app/components/rxweb-localization/rxweb-localization.module#RxwebLocalizationModule',
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
    path: 'sanitization',
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
    path: 'rxweb-router',
    loadChildren: 'src/app/components/rxweb-router/rxweb-router.module#RxwebRouterModule',
  },
  {
    path: 'rxweb-sanitizers',
    loadChildren: 'src/app/components/rxweb-sanitizers/rxweb-sanitizers.module#RxwebSanitizersModule',
  },
  {
    path: 'rxweb-storage',
    loadChildren: 'src/app/components/rxweb-storage/rxweb-storage.module#RxwebStorageModule',
  },
  {
    path: 'rxweb-translate',
    loadChildren: 'src/app/components/rxweb-translate/rxweb-translate.module#RxwebTranslateModule',
  },
  {
    path: 'ngx-translate-extension',
    loadChildren: 'src/app/components/ngx-translate-extension/ngx-translate-extension.module#NgxTranslateExtensionModule',
  },
  {
    path: 'strongly-typed',
    loadChildren: 'src/app/components/strongly-typed/strongly-typed.module#StronglyTypedAngularModule',
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

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, {
  preloadingStrategy: NoPreloading,
});
