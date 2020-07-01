import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorageGettingStartedComponent } from './getting-started/getting-started.component';


const RXWEB_STORAGE_ROUTES: Routes = [ 
    {
        path: "storage-getting-started",
        component: StorageGettingStartedComponent
    },
    {
        path: 'storage',
        loadChildren: 'src/app/components/storage/storage.module#StorageModule',
    }

];
export const RXWEB_STORAGE_ROUTING = RouterModule.forChild(RXWEB_STORAGE_ROUTES);