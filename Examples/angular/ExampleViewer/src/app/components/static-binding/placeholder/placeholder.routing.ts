import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const PLACEHOLDER_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const PLACEHOLDER_ROUTING: ModuleWithProviders = RouterModule.forChild(PLACEHOLDER_ROUTES);
