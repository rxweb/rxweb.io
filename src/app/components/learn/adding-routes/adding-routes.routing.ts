import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ADDING_ROUTES_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const ADDING_ROUTES_ROUTING = RouterModule.forChild(ADDING_ROUTES_ROUTES);
