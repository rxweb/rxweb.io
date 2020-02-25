import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const RXWEB_STORAGE_ROUTES: Routes = [ 
    {
        path: 'storage',
        loadChildren: 'src/app/components/storage/storage.module#StorageModule',
    }

];
export const RXWEB_STORAGE_ROUTING: ModuleWithProviders = RouterModule.forChild(RXWEB_STORAGE_ROUTES);