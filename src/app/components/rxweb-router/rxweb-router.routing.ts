import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterGettingStartedComponent } from './getting-started/getting-started.component';




const RXWEB_ROUTER_ROUTES: Routes = [
    {
        path: "router-getting-started",
        component: RouterGettingStartedComponent
    },
    {
        path: 'router',
        loadChildren: () => import('src/app/components/router/router.module').then(m => m.RouteModule),
    }

];
export const RXWEB_ROUTER_ROUTING = RouterModule.forChild(RXWEB_ROUTER_ROUTES);
