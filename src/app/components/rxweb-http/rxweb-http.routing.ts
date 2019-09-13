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
        loadChildren: 'src/app/components/http/http.module#HttpModule',
    }

];
export const RXWEB_HTTP_ROUTING: ModuleWithProviders = RouterModule.forChild(RXWEB_HTTP_ROUTES);
