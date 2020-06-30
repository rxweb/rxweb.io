import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const FILTERS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const FILTERS_ROUTING = RouterModule.forChild(FILTERS_ROUTES);
