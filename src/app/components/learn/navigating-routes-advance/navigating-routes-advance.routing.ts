import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const NAVIGATING_ROUTES_ADVANCE_ROUTES: Routes = [

{
	path:'',
	component:PageComponent
}

];
export const NAVIGATING_ROUTES_ADVANCE_ROUTING = RouterModule.forChild(NAVIGATING_ROUTES_ADVANCE_ROUTES);
