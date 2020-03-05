import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ROUTER_MODULE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const ROUTER_MODULE_ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTER_MODULE_ROUTES);