import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DYNAMICRANGE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DYNAMICRANGE_ROUTING = RouterModule.forChild(DYNAMICRANGE_ROUTES);
