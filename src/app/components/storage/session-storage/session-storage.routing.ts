import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from '../../page/page.component';

const SESSION_STORAGE_ROUTES: Routes = [
  {
    path: '',
    component: PageComponent
  }
];
export const SESSION_STORAGE_ROUTING = RouterModule.forChild(SESSION_STORAGE_ROUTES);
