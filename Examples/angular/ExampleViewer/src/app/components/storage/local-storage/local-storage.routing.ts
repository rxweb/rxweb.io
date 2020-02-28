import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from '../../page/page.component';

const LOCAL_STORAGE_ROUTES: Routes = [
  {
    path: '',
    component: PageComponent
  }
];
export const LOCAL_STORAGE_ROUTING: ModuleWithProviders = RouterModule.forChild(LOCAL_STORAGE_ROUTES);
