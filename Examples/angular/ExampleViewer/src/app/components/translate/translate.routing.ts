import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const TRANSLATE_ROUTES: Routes = [
  // {
  //   path: 'binding',
  //   loadChildren: () => import('src/app/components/translate/binding/binding.module').then(m => m.BindingModule),
  // },
  // {
  //   path: 'translation-strategy',
  //   loadChildren: () => import('src/app/components/translate/translation-strategy/translation-strategy.module').then(m => m.SessionStorageModule),
  // },
  // {
  //   path: 'content-translation',
  //   loadChildren: () => import('src/app/components/translate/content-translation/content-translation.module').then(m => m.SessionStorageModule),
  // }
];
export const TRANSLATE_ROUTING: ModuleWithProviders = RouterModule.forChild(TRANSLATE_ROUTES);
