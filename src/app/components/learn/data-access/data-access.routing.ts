import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DATA_ACCESS_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DATA_ACCESS_ROUTING = RouterModule.forChild(DATA_ACCESS_ROUTES);
