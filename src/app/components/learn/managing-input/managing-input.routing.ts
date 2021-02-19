import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const MANAGING_INPUT_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const MANAGING_INPUT_ROUTING = RouterModule.forChild(MANAGING_INPUT_ROUTES);
