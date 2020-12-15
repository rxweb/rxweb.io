import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ROUTER__URL_ENCRYPTION_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}

];
export const ROUTER_URL_ENCRYPTION_ROUTING = RouterModule.forChild(ROUTER__URL_ENCRYPTION_ROUTES);