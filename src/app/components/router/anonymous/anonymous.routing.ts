import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ANONYMOUS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const ANONYMOUS_ROUTING = RouterModule.forChild(ANONYMOUS_ROUTES);