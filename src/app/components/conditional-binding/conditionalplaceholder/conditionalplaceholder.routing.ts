import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CONDITIONALPLACEHOLDER_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CONDITIONALPLACEHOLDER_ROUTING: ModuleWithProviders = RouterModule.forChild(CONDITIONALPLACEHOLDER_ROUTES);
