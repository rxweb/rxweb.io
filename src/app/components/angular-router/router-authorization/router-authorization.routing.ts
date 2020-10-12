import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ROUTER_AUTHORIZATION_ROUTES: Routes = [
	{
		path:'',
		component:PageComponent
	}
	

];
export const ROUTER_AUTHORIZATION_ROUTING = RouterModule.forChild(ROUTER_AUTHORIZATION_ROUTES);
