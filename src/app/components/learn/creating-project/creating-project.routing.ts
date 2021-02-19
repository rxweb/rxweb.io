import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CREATING_PROJECT_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CREATING_PROJECT_ROUTING = RouterModule.forChild(CREATING_PROJECT_ROUTES);
