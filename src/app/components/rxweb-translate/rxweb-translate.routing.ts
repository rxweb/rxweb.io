import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateGettingStartedComponent } from './getting-started/getting-started.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import { CliComponent } from './cli/cli.component';


const RXWEB_TRANSLATE_ROUTES: Routes = [
  {
    path: '', redirectTo: 'en/lazy-load', pathMatch: 'full'
  },
  {
    path: ':languageCode/lazy-load', component: LazyLoadComponent
  },
  {
    path: ':languageCode/pre-load-module', loadChildren: 'src/app/components/rxweb-translate/pre-load-module/pre-load-module.component#PreLoadModule'
  },
  {
    path: "getting-started",
    component: TranslateGettingStartedComponent
  },
  {
    path:"rxweb-cli",
    component:CliComponent
  },
  {
    path: 'translate',
    loadChildren: 'src/app/components/translate/translate.module#TranslateModule',
  }

];
export const RXWEB_TRANSLATE_ROUTING: ModuleWithProviders = RouterModule.forChild(RXWEB_TRANSLATE_ROUTES);