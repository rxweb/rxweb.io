import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const COMPONENT_MIDDLEWARE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const COMPONENT_MIDDLEWARE_ROUTING = RouterModule.forChild(COMPONENT_MIDDLEWARE_ROUTES);
