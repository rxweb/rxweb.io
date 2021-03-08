import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const SET_PAGETITLE_USING_SINGLE_PROPERTY_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const SET_PAGETITLE_USING_SINGLE_PROPERTY_ROUTING = RouterModule.forChild(SET_PAGETITLE_USING_SINGLE_PROPERTY_ROUTES);
