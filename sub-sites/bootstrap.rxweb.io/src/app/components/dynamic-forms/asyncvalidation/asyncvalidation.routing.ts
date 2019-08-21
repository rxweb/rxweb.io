import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ASYNCVALIDATION_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const ASYNCVALIDATION_ROUTING: ModuleWithProviders = RouterModule.forChild(ASYNCVALIDATION_ROUTES);
