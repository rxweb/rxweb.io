import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DESCRIPTION_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DESCRIPTION_ROUTING = RouterModule.forChild(DESCRIPTION_ROUTES);
