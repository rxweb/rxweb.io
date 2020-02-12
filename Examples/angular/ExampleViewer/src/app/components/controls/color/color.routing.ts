import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const COLOR_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const COLOR_ROUTING: ModuleWithProviders = RouterModule.forChild(COLOR_ROUTES);
