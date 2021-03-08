import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const LOADING_MESSAGE_CONDITIONALLY_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const LOADING_MESSAGE_CONDITIONALLY_ROUTING = RouterModule.forChild(LOADING_MESSAGE_CONDITIONALLY_ROUTES);
