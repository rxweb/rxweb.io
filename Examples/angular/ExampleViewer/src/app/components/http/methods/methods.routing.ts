import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const METHODS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const METHODS_ROUTING = RouterModule.forChild(METHODS_ROUTES);
