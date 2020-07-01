import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const READONLY_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const READONLY_ROUTING = RouterModule.forChild(READONLY_ROUTES);
