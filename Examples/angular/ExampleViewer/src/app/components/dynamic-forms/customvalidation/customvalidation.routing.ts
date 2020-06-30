import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CUSTOMVALIDATION_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CUSTOMVALIDATION_ROUTING = RouterModule.forChild(CUSTOMVALIDATION_ROUTES);
