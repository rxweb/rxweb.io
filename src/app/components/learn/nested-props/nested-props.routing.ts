import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const NESTED_PROPS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const NESTED_PROPS_ROUTING = RouterModule.forChild(NESTED_PROPS_ROUTES);