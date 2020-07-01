import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CHECKBOX_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CHECKBOX_ROUTING = RouterModule.forChild(CHECKBOX_ROUTES);
