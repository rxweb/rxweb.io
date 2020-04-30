import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateGettingStartedComponent } from './getting-started/getting-started.component';


const RXWEB_TRANSLATE_ROUTES: Routes = [
  {
    path: "getting-started",
    component: TranslateGettingStartedComponent
  },
  {
    path: 'translate',
    loadChildren: 'src/app/components/translate/translate.module#TranslateModule',
  }

];
export const RXWEB_TRANSLATE_ROUTING: ModuleWithProviders = RouterModule.forChild(RXWEB_TRANSLATE_ROUTES);