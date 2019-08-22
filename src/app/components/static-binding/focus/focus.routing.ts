import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const FOCUS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const FOCUS_ROUTING: ModuleWithProviders = RouterModule.forChild(FOCUS_ROUTES);
