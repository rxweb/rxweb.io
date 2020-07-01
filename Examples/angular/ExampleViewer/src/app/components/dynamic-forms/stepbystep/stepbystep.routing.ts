import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const STEPBYSTEP_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const STEPBYSTEP_ROUTING = RouterModule.forChild(STEPBYSTEP_ROUTES);
