import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ROUTER_DECORATORS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}

];
export const ROUTER_DECORATORS_ROUTING = RouterModule.forChild(ROUTER_DECORATORS_ROUTES);
