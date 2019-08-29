import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DYNAMIC_FORM_CONFIGURATION_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DYNAMIC_FORM_CONFIGURATION_ROUTING: ModuleWithProviders = RouterModule.forChild(DYNAMIC_FORM_CONFIGURATION_ROUTES);
