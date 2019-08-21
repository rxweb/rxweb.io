import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DROPDOWN_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DROPDOWN_ROUTING: ModuleWithProviders = RouterModule.forChild(DROPDOWN_ROUTES);
