import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const RXWEB_GENERICS_ROUTES: Routes = [
{
    path: 'generics',
    loadChildren: () => import('src/app/components/generics/generics.module').then(m => m.GenericsModule),
  }

];
export const RXWEB_GENERICS_ROUTING = RouterModule.forChild(RXWEB_GENERICS_ROUTES);
