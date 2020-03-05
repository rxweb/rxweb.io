import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const LOCALIZATION_ROUTES: Routes = [
{
	path:'localization-quick-start',
	loadChildren: './localization-quick-start/localization-quick-start.module#LocalizationQuickStartModule',
}
];
export const LOCALIZATION_ROUTING: ModuleWithProviders = RouterModule.forChild(LOCALIZATION_ROUTES);