import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DELETE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DELETE_ROUTING = RouterModule.forChild(DELETE_ROUTES);
