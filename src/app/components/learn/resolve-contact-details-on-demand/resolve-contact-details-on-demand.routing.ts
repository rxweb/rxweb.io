import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const RESOLVE_CONTACT_DETAILS_ON_DEMAND_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const RESOLVE_CONTACT_DETAILS_ON_DEMAND_ROUTING = RouterModule.forChild(RESOLVE_CONTACT_DETAILS_ON_DEMAND_ROUTES);
