import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CONDITIONALVALUE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CONDITIONALVALUE_ROUTING: ModuleWithProviders = RouterModule.forChild(CONDITIONALVALUE_ROUTES);
