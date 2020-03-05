import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const MIDDLEWARE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const MIDDLEWARE_ROUTING: ModuleWithProviders = RouterModule.forChild(MIDDLEWARE_ROUTES);