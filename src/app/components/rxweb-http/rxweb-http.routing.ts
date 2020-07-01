import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpGettingStartedComponent } from './getting-started/getting-started.component';


const RXWEB_HTTP_ROUTES: Routes = [
    {
        path: "http-getting-started",
        component: HttpGettingStartedComponent
    },
    {
        path: 'http',
        loadChildren: () => import('src/app/components/http/http.module').then(m => m.HttpModule),
    }

];
export const RXWEB_HTTP_ROUTING = RouterModule.forChild(RXWEB_HTTP_ROUTES);
