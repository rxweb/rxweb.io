import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const LOCALIZATION_MODULE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const LOCALIZATION_QUICKSTART_MODULE_ROUTING: ModuleWithProviders = RouterModule.forChild(LOCALIZATION_MODULE_ROUTES);