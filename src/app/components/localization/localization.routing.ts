import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const LOCALIZATION_ROUTES: Routes = [
{
	path:'localization-quick-start',
	loadChildren: () => import('./localization-quick-start/localization-quick-start.module').then(m => m.LocalizationQuickStartModule),
},
{
	path:'global-setup',
	loadChildren: () => import('./global-setup/global-setup.module').then(m => m.GlobalSetupModule),
},
{
	path:'page-level',
	loadChildren: () => import('./page-level/page-level.module').then(m => m.PageLevelModule),
}
];
export const LOCALIZATION_ROUTING = RouterModule.forChild(LOCALIZATION_ROUTES);	