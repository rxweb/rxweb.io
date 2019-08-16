import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const CONDITIONALREADONLY_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const CONDITIONALREADONLY_ROUTING: ModuleWithProviders = RouterModule.forChild(CONDITIONALREADONLY_ROUTES);
