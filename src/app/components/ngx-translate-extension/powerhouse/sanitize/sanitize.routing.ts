import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { DateComponent } from './date/date.component';
import { DecimalComponent } from './decimal/decimal.component';
import { PercentComponent } from './percent/percent.component';
import { LowerCaseComponent } from './lower-case/lower-case.component';

const SANITIZE_ROUTES: Routes = [
  {
    path: 'currency',
    component: CurrencyComponent
  },
  {
    path: 'date',
    component: DateComponent
  },
  {
    path: 'decimal',
    component: DecimalComponent
  },
  {
    path: 'percent',
    component: PercentComponent
  },
  {
    path: 'lower-case',
    component: LowerCaseComponent
  }

];
export const NGX_SANITIZE_ROUTING: ModuleWithProviders = RouterModule.forChild(SANITIZE_ROUTES);
