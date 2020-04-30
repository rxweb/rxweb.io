import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from 'src/app/components/page/page.component';

const STATIC_TRANSLATION_ROUTES: Routes = [
  {
    path: '',
    component: PageComponent
  }
];
export const STATIC_TRANSLATION_ROUTING: ModuleWithProviders = RouterModule.forChild(STATIC_TRANSLATION_ROUTES);
