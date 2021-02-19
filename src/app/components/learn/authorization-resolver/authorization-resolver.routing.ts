import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const AUTHORIZATION_RESOLVER_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const AUTHORIZATION_RESOLVER_ROUTING = RouterModule.forChild(AUTHORIZATION_RESOLVER_ROUTES);
