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
        loadChildren: 'src/app/components/router/router.module#RouteModule',
    }

];
export const RXWEB_ROUTER_ROUTING: ModuleWithProviders = RouterModule.forChild(RXWEB_ROUTER_ROUTES);
