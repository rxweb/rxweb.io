import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DYNAMICDATE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DYNAMICDATE_ROUTING = RouterModule.forChild(DYNAMICDATE_ROUTES);
