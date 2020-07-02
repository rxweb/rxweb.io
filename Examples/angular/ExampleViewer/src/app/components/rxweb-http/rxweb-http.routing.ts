import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const RXWEB_HTTP_ROUTES: Routes = [
    {
        path: 'http',
        loadChildren: () => import('src/app/components/http/http.module').then(m => m.HttpModule),
    }

];
export const RXWEB_HTTP_ROUTING = RouterModule.forChild(RXWEB_HTTP_ROUTES);
