import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const HIDE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const HIDE_ROUTING = RouterModule.forChild(HIDE_ROUTES);
