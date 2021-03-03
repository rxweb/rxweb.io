import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CREATING_ADVANCE_APPLICATION_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CREATING_ADVANCE_APPLICATION_ROUTING = RouterModule.forChild(CREATING_ADVANCE_APPLICATION_ROUTES);
