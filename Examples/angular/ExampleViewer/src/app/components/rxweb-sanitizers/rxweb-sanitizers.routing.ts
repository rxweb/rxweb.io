import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanitizersGettingStartedComponent } from './getting-started/getting-started.component';


const RXWEB_SANITIZERS_ROUTES: Routes = [
    {
        path: "sanitizers-getting-started",
        component: SanitizersGettingStartedComponent
    },
    {
        path: 'sanitizers',
        loadChildren: () => import('src/app/components/sanitizers/sanitizers.module').then(m => m.SanitizersModule),
    }

];
export const RXWEB_SANITIZERS_ROUTING: ModuleWithProviders = RouterModule.forChild(RXWEB_SANITIZERS_ROUTES);
