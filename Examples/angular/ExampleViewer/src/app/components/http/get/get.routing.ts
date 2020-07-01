import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const GET_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const GET_ROUTING = RouterModule.forChild(GET_ROUTES);
