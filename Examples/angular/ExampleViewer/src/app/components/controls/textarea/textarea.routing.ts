import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const TEXTAREA_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const TEXTAREA_ROUTING = RouterModule.forChild(TEXTAREA_ROUTES);
