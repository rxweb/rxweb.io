import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const GET_BUSINESS_LOGIC_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const GET_BUSINESS_LOGIC_ROUTING = RouterModule.forChild(GET_BUSINESS_LOGIC_ROUTES);