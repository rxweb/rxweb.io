import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';

const SANITIZE_ROUTES: Routes = [
  {
    path: 'currency',
    component: CurrencyComponent
  },

];
export const SANITIZE_ROUTING: ModuleWithProviders = RouterModule.forChild(SANITIZE_ROUTES);
