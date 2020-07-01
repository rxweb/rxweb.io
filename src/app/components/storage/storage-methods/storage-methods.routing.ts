import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const STORAGE_METHODS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const STORAGE_METHODS_ROUTING = RouterModule.forChild(STORAGE_METHODS_ROUTES);