import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DISABLED_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DISABLED_ROUTING: ModuleWithProviders = RouterModule.forChild(DISABLED_ROUTES);
