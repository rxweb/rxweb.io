import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ACCESS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const ACCESS_ROUTING: ModuleWithProviders = RouterModule.forChild(ACCESS_ROUTES);