import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const NESTEDFORMARRAY_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const NESTEDFORMARRAY_ROUTING = RouterModule.forChild(NESTEDFORMARRAY_ROUTES);
