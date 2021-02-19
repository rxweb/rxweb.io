import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const AUTHENTICATION_RESOLVER_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const AUTHENTICATION_RESOLVER_ROUTING = RouterModule.forChild(AUTHENTICATION_RESOLVER_ROUTES);
