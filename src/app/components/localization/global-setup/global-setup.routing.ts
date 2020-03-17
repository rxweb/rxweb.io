import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const GLOBAL_SETUP_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const GLOBAL_SETUP_ROUTING: ModuleWithProviders = RouterModule.forChild(GLOBAL_SETUP_ROUTES);