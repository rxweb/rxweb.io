import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const BINDING_ROUTES: Routes = [
  {
    path: 'static-translation',
    loadChildren: () => import('src/app/components/translate/binding/static-traslation/static-translation.module').then(m => m.StaticTranslationModule),
  }
];
export const BINDING_ROUTING: ModuleWithProviders = RouterModule.forChild(BINDING_ROUTES);
