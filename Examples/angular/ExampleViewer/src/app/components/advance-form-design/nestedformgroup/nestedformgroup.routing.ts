import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const NESTEDFORMGROUP_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const NESTEDFORMGROUP_ROUTING = RouterModule.forChild(NESTEDFORMGROUP_ROUTES);
