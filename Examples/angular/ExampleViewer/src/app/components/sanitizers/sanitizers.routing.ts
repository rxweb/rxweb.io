import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const SANITIZERS_ROUTES: Routes = [
{
	path:'sanitizer',
	loadChildren: () => import('./sanitizer/sanitizer.module').then(m => m.SanitizerModule),
},
];
export const SANITIZERS_ROUTING: ModuleWithProviders = RouterModule.forChild(SANITIZERS_ROUTES);
