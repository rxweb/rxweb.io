import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { DateComponent } from './date/date.component';

const SANITIZE_ROUTES: Routes = [
  {
    path: 'currency',
    component: CurrencyComponent
  },
  {
    path: 'date',
    component: DateComponent
  }

];
export const NGX_SANITIZE_ROUTING: ModuleWithProviders = RouterModule.forChild(SANITIZE_ROUTES);
