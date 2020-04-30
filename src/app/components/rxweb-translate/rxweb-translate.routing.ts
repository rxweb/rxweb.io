import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const RXWEB_TRANSLATE_ROUTES: Routes = [
  // {
  //   path: "storage-getting-started",
  //   component: StorageGettingStartedComponent
  // },
  {
    path: 'translate',
    loadChildren: 'src/app/components/translate/translate.module#TranslateModule',
  }

];
export const RXWEB_TRANSLATE_ROUTING: ModuleWithProviders = RouterModule.forChild(RXWEB_TRANSLATE_ROUTES);