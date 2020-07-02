import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const RXWEB_SANITIZERS_ROUTES: Routes = [
    {
        path: 'sanitizers',
        loadChildren: () => import('src/app/components/sanitizers/sanitizers.module').then(m => m.SanitizersModule),
    }

];
export const RXWEB_SANITIZERS_ROUTING = RouterModule.forChild(RXWEB_SANITIZERS_ROUTES);
