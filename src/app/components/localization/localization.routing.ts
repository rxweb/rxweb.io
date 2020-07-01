import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const LOCALIZATION_ROUTES: Routes = [
{
	path:'localization-quick-start',
	loadChildren: './localization-quick-start/localization-quick-start.module#LocalizationQuickStartModule',
},
{
	path:'global-setup',
	loadChildren: './global-setup/global-setup.module#GlobalSetupModule',
},
{
	path:'page-level',
	loadChildren: './page-level/page-level.module#PageLevelModule',
}
];
export const LOCALIZATION_ROUTING = RouterModule.forChild(LOCALIZATION_ROUTES);	