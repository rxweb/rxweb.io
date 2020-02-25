import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const SESSION_STORAGE_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const SESSION_STORAGE_ROUTING: ModuleWithProviders = RouterModule.forChild(SESSION_STORAGE_ROUTES);
