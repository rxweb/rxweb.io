import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const PATCH_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const PATCH_ROUTING = RouterModule.forChild(PATCH_ROUTES);
