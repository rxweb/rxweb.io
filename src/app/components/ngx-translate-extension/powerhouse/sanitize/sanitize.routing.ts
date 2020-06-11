import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { DateComponent } from './date/date.component';
import { DecimalComponent } from './decimal/decimal.component';
import { PercentComponent } from './percent/percent.component';
import { LowerCaseComponent } from './lower-case/lower-case.component';
import { UpperCaseComponent } from './upper-case/upper-case.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { CustomComponent } from './custom/custom.component';

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
  },
  {
    path: 'upper-case',
    component: UpperCaseComponent
  },
  {
    path: 'title-case',
    component: TitleCaseComponent
  },
  {
    path: 'custom',
    component: CustomComponent
  }

];
export const NGX_SANITIZE_ROUTING: ModuleWithProviders = RouterModule.forChild(SANITIZE_ROUTES);
