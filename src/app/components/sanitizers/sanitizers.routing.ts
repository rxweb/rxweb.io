import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const SANITIZERS_ROUTES: Routes = [
{
	path:'sanitizer',
	loadChildren: './sanitizer/sanitizer.module#SanitizerModule',
},
];
export const SANITIZERS_ROUTING = RouterModule.forChild(SANITIZERS_ROUTES);
