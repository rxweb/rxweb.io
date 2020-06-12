import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { DecimalComponent } from './decimal/decimal.component';
const  ANGULAR_PIPES_ROUTES: Routes = [
  {
    path: 'currency',
    component: CurrencyComponent
  },
  {
    path: 'decimal',
    component: DecimalComponent
  }

];
export const  ANGULAR_PIPES_ROUTING: ModuleWithProviders = RouterModule.forChild( ANGULAR_PIPES_ROUTES);