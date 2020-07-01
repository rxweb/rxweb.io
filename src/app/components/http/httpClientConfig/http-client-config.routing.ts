import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const HTTP_CLIENT_CONFIG_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const HTTP_CLIENT_CONFIG_ROUTING = RouterModule.forChild(HTTP_CLIENT_CONFIG_ROUTES);
