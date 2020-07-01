import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateGettingStartedComponent } from './getting-started/getting-started.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';


const RXWEB_TRANSLATE_ROUTES: Routes = [
  {
    path: '', redirectTo: 'en/lazy-load', pathMatch: 'full'
  },
  {
    path: ':languageCode/lazy-load', component: LazyLoadComponent
  },
  {
    path: ':languageCode/pre-load-module', loadChildren: () => import('src/app/components/rxweb-translate/pre-load-module/pre-load-module.component').then(m => m.PreLoadModule)
  },
  {
    path: "getting-started",
    component: TranslateGettingStartedComponent
  },
 
  {
    path: 'translate',
    loadChildren: () => import('src/app/components/translate/translate.module').then(m => m.TranslateModule),
  }

];
export const RXWEB_TRANSLATE_ROUTING = RouterModule.forChild(RXWEB_TRANSLATE_ROUTES);