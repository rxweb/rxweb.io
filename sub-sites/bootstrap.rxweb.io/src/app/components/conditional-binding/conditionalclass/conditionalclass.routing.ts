import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CONDITIONALCLASS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CONDITIONALCLASS_ROUTING: ModuleWithProviders = RouterModule.forChild(CONDITIONALCLASS_ROUTES);
